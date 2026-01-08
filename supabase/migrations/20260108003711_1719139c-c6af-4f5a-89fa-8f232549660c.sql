-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create enum for pricing plans
CREATE TYPE public.pricing_plan AS ENUM (
  'launch_pad',
  'essential_web',
  'professional_site',
  'brand_builder',
  'business_plus',
  'digital_platform',
  'full_solution'
);

-- Create enum for request status
CREATE TYPE public.request_status AS ENUM (
  'pending',
  'in_review',
  'approved',
  'contacted',
  'completed'
);

-- Create project requests table
CREATE TABLE public.project_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  request_id TEXT NOT NULL UNIQUE DEFAULT 'REQ-' || upper(substr(md5(random()::text), 1, 8)),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  
  -- Plan selection
  plan pricing_plan NOT NULL,
  
  -- Contact info
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Company details (common)
  company_name TEXT NOT NULL,
  company_email TEXT NOT NULL,
  ceo_name TEXT,
  business_type TEXT,
  country TEXT,
  city TEXT,
  project_description TEXT,
  
  -- Advanced plan fields
  needs_website BOOLEAN DEFAULT false,
  needs_mobile_app BOOLEAN DEFAULT false,
  mobile_platforms TEXT[],
  needs_branding BOOLEAN DEFAULT false,
  expected_timeline TEXT,
  budget_confirmed BOOLEAN DEFAULT false,
  
  -- Status and metadata
  status request_status NOT NULL DEFAULT 'pending',
  admin_notes TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.project_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own requests
CREATE POLICY "Users can view own requests"
ON public.project_requests
FOR SELECT
USING (auth.uid() = user_id);

-- Policy: Authenticated users can insert requests
CREATE POLICY "Authenticated users can insert requests"
ON public.project_requests
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create storage bucket for project files
INSERT INTO storage.buckets (id, name, public) VALUES ('project-files', 'project-files', false);

-- Storage policy for authenticated users
CREATE POLICY "Authenticated users can upload project files"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'project-files' AND auth.role() = 'authenticated');

CREATE POLICY "Users can view their own project files"
ON storage.objects
FOR SELECT
USING (bucket_id = 'project-files' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Create updated_at trigger
CREATE TRIGGER update_project_requests_updated_at
BEFORE UPDATE ON public.project_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();