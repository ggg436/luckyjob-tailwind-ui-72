
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";

export const UserMenu = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link to="/sign-in">
        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
          <LogIn className="h-4 w-4 mr-2" />
          Sign In
        </Button>
      </Link>
      <Link to="/sign-up">
        <Button variant="outline" size="sm" className="text-white border-white hover:bg-gray-800">
          <UserPlus className="h-4 w-4 mr-2" />
          Join
        </Button>
      </Link>
    </div>
  );
};
