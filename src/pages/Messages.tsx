
import { ChatSidebar } from '@/components/chat/ChatSidebar';
import { ChatMessages } from '@/components/chat/ChatMessages';
import { ChatInput } from '@/components/chat/ChatInput';
import { ChatDetails } from '@/components/chat/ChatDetails';
import { ChatProvider } from '@/context/ChatContext';

const Messages = () => {
  return (
    <ChatProvider>
      <div className="flex h-screen bg-white text-gray-800 font-sans">
        <ChatSidebar />
        <div className="flex-1 flex flex-col">
          <ChatMessages />
          <ChatInput />
        </div>
        <ChatDetails />
      </div>
    </ChatProvider>
  );
};

export default Messages;
