import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SidebarToggle } from "@/components/SidebarToggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} />
      <SidebarToggle isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <div className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
        <div className="p-6 pl-20">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome Back!</CardTitle>
                  <CardDescription>
                    Your dashboard is ready to go
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Click the menu button in the top-left to open the sidebar.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    View your latest metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">1,234</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>
                    You have new notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">42</div>
                  <p className="text-xs text-muted-foreground">
                    Unread messages
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Animation Demo</CardTitle>
                  <CardDescription>
                    Testing the sidebar animation behavior
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The sidebar uses the exact specifications you requested:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Hidden initially with transform: translateX(-100%)</li>
                    <li>Toggle button positioned at top-left corner</li>
                    <li>Smooth 0.4s ease-in-out transition</li>
                    <li>Main content shifts right by 200px when sidebar opens</li>
                    <li>Performance optimized with will-change: transform</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
