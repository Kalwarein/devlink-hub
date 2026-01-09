-- Drop the restrictive insert policy
DROP POLICY IF EXISTS "Authenticated users can insert requests" ON public.project_requests;

-- Create a new policy that allows anyone to insert (guests submit with null user_id)
CREATE POLICY "Anyone can submit project requests"
ON public.project_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  -- Allow if user_id is null (guest) OR if it matches the authenticated user
  user_id IS NULL OR auth.uid() = user_id
);