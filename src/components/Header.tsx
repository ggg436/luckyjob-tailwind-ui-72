
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { UserMenu } from '@/components/UserMenu';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 w-full">
      <div className="w-full px-4 xl:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor"/>
              </svg>
              <span className="text-xl font-semibold">LuckyJob</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-gray-300">Find job</Link>
              <Link to="/messages" className="hover:text-gray-300">Messages</Link>
              <Link to="/" className="hover:text-gray-300">Hiring</Link>
              <Link to="/" className="hover:text-gray-300">Community</Link>
              <Link to="/" className="hover:text-gray-300">FAQ</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>New York, NY</span>
            </div>
            <div className="flex items-center">
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
