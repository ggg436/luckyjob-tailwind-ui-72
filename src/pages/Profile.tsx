
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Building, Briefcase, Star } from "lucide-react";

const Profile = () => {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState("profile");

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">My Profile</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sidebar with user info */}
              <div className="col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow">
                        <img 
                          src={user?.imageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} 
                          alt="Profile" 
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{user?.fullName || "User"}</CardTitle>
                    <CardDescription>{user?.primaryEmailAddress?.emailAddress}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Building className="w-5 h-5 mr-3 text-gray-500" />
                      <span>Software Engineer</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 mr-3 text-gray-500" />
                      <span>4 years experience</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 mr-3 text-yellow-500" />
                      <span>4.8 Rating</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-black hover:bg-gray-800">Edit Profile</Button>
                  </CardFooter>
                </Card>
              </div>
              
              {/* Main content */}
              <div className="col-span-1 md:col-span-2">
                <Card>
                  <CardHeader>
                    <Tabs defaultValue="profile" className="w-full">
                      <TabsList className="mb-4">
                        <TabsTrigger value="profile" onClick={() => setActiveTab("profile")}>Profile</TabsTrigger>
                        <TabsTrigger value="resume" onClick={() => setActiveTab("resume")}>Resume</TabsTrigger>
                        <TabsTrigger value="applications" onClick={() => setActiveTab("applications")}>Applications</TabsTrigger>
                        <TabsTrigger value="saved" onClick={() => setActiveTab("saved")}>Saved Jobs</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="profile">
                        <CardTitle>Personal Details</CardTitle>
                        <CardDescription>Update your personal information</CardDescription>
                      </TabsContent>
                      
                      <TabsContent value="resume">
                        <CardTitle>Resume</CardTitle>
                        <CardDescription>Manage your resume and CV</CardDescription>
                      </TabsContent>
                      
                      <TabsContent value="applications">
                        <CardTitle>Job Applications</CardTitle>
                        <CardDescription>Track your applications</CardDescription>
                      </TabsContent>
                      
                      <TabsContent value="saved">
                        <CardTitle>Saved Jobs</CardTitle>
                        <CardDescription>View your bookmarked jobs</CardDescription>
                      </TabsContent>
                    </Tabs>
                  </CardHeader>
                  
                  <CardContent>
                    {activeTab === "profile" && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input id="firstName" defaultValue={user?.firstName || ""} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input id="lastName" defaultValue={user?.lastName || ""} />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" value={user?.primaryEmailAddress?.emailAddress || ""} disabled />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="Your phone number" />
                        </div>
                      </div>
                    )}
                    
                    {activeTab === "resume" && (
                      <div className="py-10 text-center">
                        <p className="text-gray-500 mb-4">Upload your resume to apply for jobs faster</p>
                        <Button>Upload Resume</Button>
                      </div>
                    )}
                    
                    {activeTab === "applications" && (
                      <div className="py-10 text-center">
                        <p className="text-gray-500">You haven't applied to any jobs yet</p>
                      </div>
                    )}
                    
                    {activeTab === "saved" && (
                      <div className="py-10 text-center">
                        <p className="text-gray-500">You don't have any saved jobs</p>
                      </div>
                    )}
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Button className="bg-black hover:bg-gray-800">Save Changes</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
