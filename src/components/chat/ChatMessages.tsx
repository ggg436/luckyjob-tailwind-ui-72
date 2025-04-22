
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageBubble } from './MessageBubble';
import { useChat } from '@/context/ChatContext';

export const ChatMessages = () => {
  const { messages } = useChat();
  
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages.map(message => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
};
