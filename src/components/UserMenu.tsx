
import { useAuth, useUser, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, User, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserMenu = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  return (
    <div className="flex items-center space-x-4">
      {isSignedIn ? (
        <div className="flex items-center space-x-4">
          <span className="text-sm hidden md:inline-block">Hi, {user?.firstName || "User"}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-8 h-8 rounded-full overflow-hidden focus:outline-none">
                <img 
                  src={user?.imageUrl || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonBox: "w-full flex justify-between items-center",
                      userButtonOuterIdentifier: "hidden",
                      userButtonTrigger: "w-full flex justify-between items-center",
                    }
                  }}
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
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
      )}
    </div>
  );
};
