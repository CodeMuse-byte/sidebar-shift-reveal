import { Menu, X } from "lucide-react";

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SidebarToggle = ({ isOpen, onToggle }: SidebarToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="sidebar-toggle"
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>
  );
};