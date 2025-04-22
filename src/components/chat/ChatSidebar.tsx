
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { useChat } from '@/context/ChatContext';

export const ChatSidebar = () => {
  const { chats, currentChat, setCurrentChat } = useChat();

  return (
    <div className="w-72 border-r border-gray-200 flex flex-col">
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold">Messages</h1>
        </div>
      </div>
      
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="relative">
          <Input
            placeholder="Search here"
            className="pl-9 pr-4 py-2 w-full rounded-md"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">GROUP CHATS</h2>
        </div>
        <div className="space-y-1 px-2">
          {chats.slice(0, 2).map(chat => (
            <ChatListItem 
              key={chat.id} 
              chat={chat} 
              isActive={currentChat === chat.name}
              onClick={() => setCurrentChat(chat.name)}
            />
          ))}
        </div>

        <div className="px-4 py-2 mt-4">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">PERSONAL CHATS</h2>
        </div>
        <div className="space-y-1 px-2">
          {chats.slice(2).map(chat => (
            <ChatListItem 
              key={chat.id} 
              chat={chat} 
              isActive={currentChat === chat.name}
              onClick={() => setCurrentChat(chat.name)}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <Button className="w-10 h-10 rounded-full p-0 bg-pink-500 hover:bg-pink-600 text-white">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

interface ChatListItemProps {
  chat: Chat;
  isActive: boolean;
  onClick: () => void;
}

const ChatListItem = ({ chat, isActive, onClick }: ChatListItemProps) => (
  <div
    className={`flex items-center space-x-3 px-2 py-2 rounded-lg cursor-pointer ${
      isActive ? 'bg-pink-100' : 'hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    <Avatar className="h-10 w-10">
      <AvatarImage src={chat.avatar} alt={chat.name} />
      <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between">
        <h3 className="text-sm font-medium truncate">{chat.name}</h3>
        <span className="text-xs text-gray-500">{chat.time}</span>
      </div>
      <p className="text-xs text-gray-500 truncate">{chat.message}</p>
    </div>
  </div>
);
