
import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Send } from "lucide-react";
import { EmojiPicker } from './EmojiPicker';
import { useChat } from '@/context/ChatContext';

export const ChatInput = () => {
  const [messageInput, setMessageInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendMessage } = useChat();

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      sendMessage(messageInput);
      setMessageInput('');
    }
  };

  const insertEmoji = (emoji: string) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart || 0;
      const end = inputRef.current.selectionEnd || 0;
      const newValue = messageInput.substring(0, start) + emoji + messageInput.substring(end);
      setMessageInput(newValue);
      const newPosition = start + emoji.length;
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(newPosition, newPosition);
        }
      }, 0);
    }
  };

  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center bg-white border border-gray-300 rounded-lg">
        <Button variant="ghost" className="text-gray-500">
          <Paperclip className="h-4 w-4" />
        </Button>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="flex-1 border-none focus:ring-0"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <EmojiPicker onEmojiSelect={insertEmoji} />
        <Button
          className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={handleSendMessage}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
