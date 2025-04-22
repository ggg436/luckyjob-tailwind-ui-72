
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatMessage } from '@/types/chat';

interface ChatMessagesProps {
  messages: ChatMessage[];
}

export const ChatMessages = ({ messages }: ChatMessagesProps) => (
  <ScrollArea className="flex-1 p-4">
    <div className="space-y-4">
      {messages.map(message => (
        <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
          {!message.isMe && (
            <Avatar className="h-8 w-8 mr-2 mt-1">
              <AvatarImage src={message.avatar} alt={message.sender} />
              <AvatarFallback>{message.sender.charAt(0)}</AvatarFallback>
            </Avatar>
          )}
          <div className={`max-w-[70%] ${
            message.isMe ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'
          } rounded-lg px-4 py-2`}>
            {!message.isMe && (
              <div className="text-xs font-medium mb-1">{message.sender}</div>
            )}
            <p className="text-sm">{message.content}</p>
            <div className={`text-xs ${
              message.isMe ? 'text-indigo-200' : 'text-gray-500'
            } mt-1 text-right`}>
              {message.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  </ScrollArea>
);
