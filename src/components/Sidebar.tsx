import { Home, User, Settings, BarChart3, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
}

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Mail, label: "Messages", href: "/messages" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-8">Dashboard</h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-3 h-11 px-3 text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>
        
        <div className="mt-8 pt-6 border-t border-border">
          <div className="text-sm text-muted-foreground">
            <p className="font-medium">John Doe</p>
            <p>john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};