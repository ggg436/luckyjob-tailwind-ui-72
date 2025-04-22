
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatSidebar } from '@/components/chat/ChatSidebar';
import { ChatMessages } from '@/components/chat/ChatMessages';
import { ChatInput } from '@/components/chat/ChatInput';
import { ChatDetails } from '@/components/chat/ChatDetails';
import { chats, messages as initialMessages, members, mediaFiles, emojis } from '@/data/chatData';
import { ChatMessage } from '@/types/chat';

const Messages = () => {
  const [currentChat, setCurrentChat] = useState('Cult of details');
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (messageText: string) => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      sender: 'You',
      content: messageText,
      time: 'Just now',
      isMe: true,
      avatar: ''
    };
    setMessages([...messages, newMessage]);
  };

  const currentChatData = chats.find(chat => chat.name === currentChat);

  return (
    <div className="flex h-screen bg-white text-gray-800 font-sans">
      <ChatSidebar 
        chats={chats}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
      />
      
      <div className="flex-1 flex flex-col">
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-3">
              <AvatarImage src={currentChatData?.avatar} alt={currentChat} />
              <AvatarFallback>{currentChat.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-md font-medium">{currentChat}</h2>
            </div>
          </div>
        </div>

        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} emojis={emojis} />
      </div>

      <ChatDetails 
        currentChat={currentChat}
        currentChatAvatar={currentChatData?.avatar || ''}
        members={members}
        mediaFiles={mediaFiles}
      />
    </div>
  );
};

export default Messages;
