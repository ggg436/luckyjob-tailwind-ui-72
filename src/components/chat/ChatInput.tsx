
import { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Paperclip, Smile, Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  emojis: Record<string, string[]>;
}

export const ChatInput = ({ onSendMessage, emojis }: ChatInputProps) => {
  const [messageInput, setMessageInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const insertEmoji = (emoji: string) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart || 0;
      const end = inputRef.current.selectionEnd || 0;
      const newValue = messageInput.substring(0, start) + emoji + messageInput.substring(end);
      setMessageInput(newValue);
      const newPosition = start + emoji.length;
      setCursorPosition(newPosition);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(newPosition, newPosition);
        }
      }, 0);
    }
  };

  const handleSend = () => {
    if (messageInput.trim()) {
      onSendMessage(messageInput);
      setMessageInput('');
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
          onSelect={(e) => {
            const target = e.target as HTMLInputElement;
            setCursorPosition(target.selectionStart || 0);
          }}
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="text-gray-500">
              <Smile className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-3" align="end">
            <div className="space-y-4">
              {Object.entries(emojis).map(([category, categoryEmojis]) => (
                <div key={category}>
                  <h4 className="mb-2 text-sm font-medium capitalize">{category}</h4>
                  <div className="grid grid-cols-8 gap-2">
                    {categoryEmojis.map((emoji, index) => (
                      <button
                        key={index}
                        className="hover:bg-gray-100 rounded p-1 text-xl"
                        onClick={() => insertEmoji(emoji)}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Button
          className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white"
          onClick={handleSend}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
