import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  LogOut,
  Search,
  Filter,
  Calendar,
  Building2,
  Mail,
  Phone,
  DollarSign,
  Clock,
  RefreshCw,
} from "lucide-react";
import { format } from "date-fns";
import { pricingPlans } from "@/data/pricing";
import type { Database } from "@/integrations/supabase/types";

type ProjectRequest = Database["public"]["Tables"]["project_requests"]["Row"];
type RequestStatus = Database["public"]["Enums"]["request_status"];
type PricingPlan = Database["public"]["Enums"]["pricing_plan"];

const statusColors: Record<RequestStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  in_review: "bg-blue-100 text-blue-800",
  approved: "bg-green-100 text-green-800",
  contacted: "bg-purple-100 text-purple-800",
  completed: "bg-gray-100 text-gray-800",
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<ProjectRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [planFilter, setPlanFilter] = useState<string>("all");
  const [selectedRequest, setSelectedRequest] = useState<ProjectRequest | null>(null);

  useEffect(() => {
    checkAdminAccess();
    fetchRequests();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/admin");
      return;
    }

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      await supabase.auth.signOut();
      navigate("/admin");
    }
  };

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("project_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to fetch requests");
    } else {
      setRequests(data || []);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const updateStatus = async (id: string, status: RequestStatus) => {
    const { error } = await supabase
      .from("project_requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update status");
    } else {
      toast.success("Status updated");
      fetchRequests();
      if (selectedRequest?.id === id) {
        setSelectedRequest({ ...selectedRequest, status });
      }
    }
  };

  const togglePaid = async (id: string, isPaid: boolean) => {
    const { error } = await supabase
      .from("project_requests")
      .update({ 
        is_paid: isPaid,
        paid_at: isPaid ? new Date().toISOString() : null 
      })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update payment status");
    } else {
      toast.success(isPaid ? "Marked as paid" : "Marked as unpaid");
      fetchRequests();
    }
  };

  const updateNotes = async (id: string, notes: string) => {
    const { error } = await supabase
      .from("project_requests")
      .update({ admin_notes: notes })
      .eq("id", id);

    if (error) {
      toast.error("Failed to save notes");
    } else {
      toast.success("Notes saved");
    }
  };

  const filteredRequests = requests.filter((req) => {
    const matchesSearch =
      req.company_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.request_id?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || req.status === statusFilter;
    const matchesPlan = planFilter === "all" || req.plan === planFilter;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const getPlanName = (planId: string) => {
    return pricingPlans.find((p) => p.id === planId)?.name || planId;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">DevLink Admin</h1>
              <p className="text-xs text-muted-foreground">Dashboard</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-sm text-muted-foreground">Total Requests</p>
            <p className="text-2xl font-bold text-foreground">{requests.length}</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">
              {requests.filter((r) => r.status === "pending").length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-sm text-muted-foreground">Approved</p>
            <p className="text-2xl font-bold text-green-600">
              {requests.filter((r) => r.status === "approved").length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <p className="text-sm text-muted-foreground">Paid</p>
            <p className="text-2xl font-bold text-primary">
              {requests.filter((r) => r.is_paid).length}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by company, email, or request ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_review">In Review</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={planFilter} onValueChange={setPlanFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Plans</SelectItem>
              {pricingPlans.map((plan) => (
                <SelectItem key={plan.id} value={plan.id}>
                  {plan.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={fetchRequests}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Request List */}
          <div className="space-y-4">
            <h2 className="font-semibold text-foreground">
              Project Requests ({filteredRequests.length})
            </h2>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading...</div>
            ) : filteredRequests.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No requests found
              </div>
            ) : (
              <div className="space-y-3 max-h-[calc(100vh-320px)] overflow-y-auto">
                {filteredRequests.map((req) => (
                  <div
                    key={req.id}
                    onClick={() => setSelectedRequest(req)}
                    className={`bg-card border rounded-xl p-4 cursor-pointer transition-all hover:shadow-md ${
                      selectedRequest?.id === req.id
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-foreground">
                          {req.company_name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {req.request_id}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {req.is_paid && (
                          <Badge className="bg-green-100 text-green-800">
                            <DollarSign className="w-3 h-3 mr-1" />
                            Paid
                          </Badge>
                        )}
                        <Badge className={statusColors[req.status]}>
                          {req.status.replace("_", " ")}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(req.created_at), "MMM d, yyyy")}
                      </span>
                      <span>{getPlanName(req.plan)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Request Detail */}
          <div className="bg-card border border-border rounded-xl p-6">
            {selectedRequest ? (
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {selectedRequest.company_name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedRequest.request_id}
                    </p>
                  </div>
                  <Select
                    value={selectedRequest.status}
                    onValueChange={(value) =>
                      updateStatus(selectedRequest.id, value as RequestStatus)
                    }
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in_review">In Review</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedRequest.email}</span>
                  </div>
                  {selectedRequest.company_email && (
                    <div className="flex items-center gap-3 text-sm">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedRequest.company_email}</span>
                    </div>
                  )}
                  {selectedRequest.phone && (
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedRequest.phone}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {format(
                        new Date(selectedRequest.created_at),
                        "PPpp"
                      )}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium mb-2">Selected Plan</p>
                  <Badge variant="secondary" className="text-sm">
                    {getPlanName(selectedRequest.plan)}
                  </Badge>
                </div>

                {selectedRequest.ceo_name && (
                  <div>
                    <p className="text-sm font-medium mb-1">CEO/Founder</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedRequest.ceo_name}
                    </p>
                  </div>
                )}

                {selectedRequest.business_type && (
                  <div>
                    <p className="text-sm font-medium mb-1">Business Type</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedRequest.business_type}
                    </p>
                  </div>
                )}

                {(selectedRequest.country || selectedRequest.city) && (
                  <div>
                    <p className="text-sm font-medium mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">
                      {[selectedRequest.city, selectedRequest.country]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                )}

                {selectedRequest.project_description && (
                  <div>
                    <p className="text-sm font-medium mb-1">
                      Project Description
                    </p>
                    <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                      {selectedRequest.project_description}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {selectedRequest.needs_website && (
                    <Badge variant="outline">Website</Badge>
                  )}
                  {selectedRequest.needs_mobile_app && (
                    <Badge variant="outline">
                      Mobile: {selectedRequest.mobile_platforms?.join(", ")}
                    </Badge>
                  )}
                  {selectedRequest.needs_branding && (
                    <Badge variant="outline">Branding</Badge>
                  )}
                </div>

                <div className="border-t border-border pt-4">
                  <label className="text-sm font-medium mb-2 block">
                    Admin Notes
                  </label>
                  <textarea
                    className="w-full min-h-[100px] p-3 rounded-lg border border-border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Add internal notes..."
                    defaultValue={selectedRequest.admin_notes || ""}
                    onBlur={(e) =>
                      updateNotes(selectedRequest.id, e.target.value)
                    }
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    variant={selectedRequest.is_paid ? "outline" : "default"}
                    className="flex-1"
                    onClick={() =>
                      togglePaid(selectedRequest.id, !selectedRequest.is_paid)
                    }
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    {selectedRequest.is_paid ? "Mark Unpaid" : "Mark as Paid"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(`mailto:${selectedRequest.company_email || selectedRequest.email}`)
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                <Building2 className="w-12 h-12 mb-4 opacity-50" />
                <p>Select a request to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
