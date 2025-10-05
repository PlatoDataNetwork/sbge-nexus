import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { formatDistanceToNow, format } from 'date-fns';
import { Search, Mail, Phone, Building2, DollarSign, Shield, Calendar, User, Eye, Filter, UserCog } from 'lucide-react';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  aum: string | null;
  accreditation_status: string | null;
  created_at: string;
  updated_at: string;
  role?: string;
}

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [accreditationFilter, setAccreditationFilter] = useState<string>('all');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    filterUsers();
  }, [users, searchQuery, roleFilter, accreditationFilter]);

  const loadUsers = async () => {
    try {
      // Fetch profiles
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Fetch all user roles
      const { data: userRoles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) throw rolesError;

      // Create a map of user_id to roles
      const rolesMap = new Map();
      userRoles?.forEach(ur => {
        if (!rolesMap.has(ur.user_id)) {
          rolesMap.set(ur.user_id, []);
        }
        rolesMap.get(ur.user_id).push(ur.role);
      });

      // Combine profiles with roles
      const formattedUsers = profiles?.map(profile => ({
        ...profile,
        role: rolesMap.get(profile.id)?.[0] || 'user',
      })) || [];

      setUsers(formattedUsers);
      setFilteredUsers(formattedUsers);
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterUsers = () => {
    let filtered = [...users];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(user =>
        user.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.company?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Role filter
    if (roleFilter !== 'all') {
      filtered = filtered.filter(user => user.role === roleFilter);
    }

    // Accreditation filter
    if (accreditationFilter !== 'all') {
      filtered = filtered.filter(user => user.accreditation_status === accreditationFilter);
    }

    setFilteredUsers(filtered);
  };

  const changeUserRole = async (userId: string, newRole: 'admin' | 'user') => {
    try {
      // First, delete existing role
      await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId);

      // Then insert new role
      const { error } = await supabase
        .from('user_roles')
        .insert({ user_id: userId, role: newRole });

      if (error) throw error;

      toast.success(`User role updated to ${newRole}`);
      
      // Reload users
      await loadUsers();
    } catch (error) {
      console.error('Error updating user role:', error);
      toast.error('Failed to update user role');
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading users...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Registered Users CRM</CardTitle>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {filteredUsers.length} {filteredUsers.length === 1 ? 'User' : 'Users'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger>
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>

          <Select value={accreditationFilter} onValueChange={setAccreditationFilter}>
            <SelectTrigger>
              <Shield className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Accreditation Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="accredited">Accredited</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="unverified">Unverified</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Users List */}
        <div className="space-y-3">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 space-y-3">
                    {/* Header Row */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-lg">
                          {user.full_name || 'No name provided'}
                        </h3>
                      </div>
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                        {user.role?.toUpperCase()}
                      </Badge>
                      {user.accreditation_status && (
                        <Badge 
                          variant={
                            user.accreditation_status === 'accredited' 
                              ? 'default' 
                              : user.accreditation_status === 'pending' 
                              ? 'secondary' 
                              : 'outline'
                          }
                        >
                          <Shield className="h-3 w-3 mr-1" />
                          {user.accreditation_status}
                        </Badge>
                      )}
                    </div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>{user.email}</span>
                      </div>
                      
                      {user.phone && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{user.phone}</span>
                        </div>
                      )}
                      
                      {user.company && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building2 className="h-4 w-4" />
                          <span>{user.company}</span>
                        </div>
                      )}
                      
                      {user.aum && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          <span>AUM: {user.aum}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {formatDistanceToNow(new Date(user.created_at), { addSuffix: true })}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {/* Role Management */}
                    <Select
                      value={user.role}
                      onValueChange={(value) => changeUserRole(user.id, value as 'admin' | 'user')}
                    >
                      <SelectTrigger className="w-[140px]">
                        <UserCog className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedUser(user)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">User Profile Details</DialogTitle>
                      </DialogHeader>
                      {selectedUser && selectedUser.id === user.id && (
                        <ScrollArea className="max-h-[600px] pr-4">
                          <div className="space-y-6">
                            {/* Basic Information */}
                            <div>
                              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <User className="h-5 w-5" />
                                Basic Information
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-muted-foreground">Full Name</Label>
                                  <p className="font-medium">{selectedUser.full_name || 'Not provided'}</p>
                                </div>
                                <div>
                                  <Label className="text-muted-foreground">Role</Label>
                                  <p className="font-medium capitalize">{selectedUser.role}</p>
                                </div>
                                <div>
                                  <Label className="text-muted-foreground">Email</Label>
                                  <p className="font-medium">{selectedUser.email}</p>
                                </div>
                                <div>
                                  <Label className="text-muted-foreground">Phone</Label>
                                  <p className="font-medium">{selectedUser.phone || 'Not provided'}</p>
                                </div>
                              </div>
                            </div>

                            {/* Company Information */}
                            <div className="border-t pt-6">
                              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Building2 className="h-5 w-5" />
                                Company Information
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-muted-foreground">Company Name</Label>
                                  <p className="font-medium">{selectedUser.company || 'Not provided'}</p>
                                </div>
                              </div>
                            </div>

                            {/* Financial Information */}
                            <div className="border-t pt-6">
                              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <DollarSign className="h-5 w-5" />
                                Financial Information
                              </h3>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-muted-foreground">Assets Under Management</Label>
                                  <p className="font-medium">{selectedUser.aum || 'Not provided'}</p>
                                </div>
                                <div>
                                  <Label className="text-muted-foreground">Accreditation Status</Label>
                                  <p className="font-medium capitalize">
                                    {selectedUser.accreditation_status || 'Not verified'}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Timeline */}
                            <div className="border-t pt-6">
                              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Calendar className="h-5 w-5" />
                                Timeline
                              </h3>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                  <div>
                                    <p className="text-sm font-medium">Account Created</p>
                                    <p className="text-xs text-muted-foreground">
                                      {format(new Date(selectedUser.created_at), 'PPpp')}
                                    </p>
                                  </div>
                                  <Badge variant="outline">
                                    {formatDistanceToNow(new Date(selectedUser.created_at), { addSuffix: true })}
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                  <div>
                                    <p className="text-sm font-medium">Last Updated</p>
                                    <p className="text-xs text-muted-foreground">
                                      {format(new Date(selectedUser.updated_at), 'PPpp')}
                                    </p>
                                  </div>
                                  <Badge variant="outline">
                                    {formatDistanceToNow(new Date(selectedUser.updated_at), { addSuffix: true })}
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            {/* User ID */}
                            <div className="border-t pt-6">
                              <Label className="text-muted-foreground">User ID</Label>
                              <p className="text-xs font-mono bg-muted p-2 rounded mt-2">{selectedUser.id}</p>
                            </div>
                          </div>
                        </ScrollArea>
                      )}
                    </DialogContent>
                  </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {filteredUsers.length === 0 && !loading && (
            <div className="text-center py-12">
              <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-lg font-medium text-muted-foreground">No users found</p>
              <p className="text-sm text-muted-foreground mt-2">
                {searchQuery || roleFilter !== 'all' || accreditationFilter !== 'all'
                  ? 'Try adjusting your filters'
                  : 'Users will appear here when they register'}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersList;