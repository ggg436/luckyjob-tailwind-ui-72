
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, LogOut, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Signed out successfully");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (session) {
    return (
      <div className="flex items-center space-x-3">
        <Link to="/profile">
          <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
            <User className="h-4 w-4 mr-2" />
            Profile
          </Button>
        </Link>
        <Button
          variant="outline"
          size="sm"
          className="text-white border-white hover:bg-gray-800"
          onClick={handleSignOut}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <Link to="/auth">
        <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
          <LogIn className="h-4 w-4 mr-2" />
          Sign In
        </Button>
      </Link>
      <Link to="/auth">
        <Button
          variant="outline"
          size="sm"
          className="text-white border-white hover:bg-gray-800"
          onClick={() => navigate("/auth?signup=true")}
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Join
        </Button>
      </Link>
    </div>
  );
};
