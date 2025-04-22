
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";
import { emojis } from '@/data/chatData';

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

export const EmojiPicker = ({ onEmojiSelect }: EmojiPickerProps) => {
  return (
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
                    onClick={() => onEmojiSelect(emoji)}
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
  );
};
