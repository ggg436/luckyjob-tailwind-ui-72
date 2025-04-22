
import { SignUp } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const SignUpPage = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6">
        <div className="mb-6 text-center">
          <div className="flex justify-center mb-2">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="black"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Join LuckyJob</h1>
          <p className="text-gray-600 mt-2">Create your account to find your dream job</p>
        </div>
        <SignUp 
          routing="path"
          path="/sign-up"
          redirectUrl="/"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-none",
              formButtonPrimary: "bg-black hover:bg-gray-800 text-white",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
