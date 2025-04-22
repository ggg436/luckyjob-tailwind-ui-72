
import { createContext, useContext, useState, ReactNode } from 'react';
import { Chat, ChatMessage, Member, MediaFile } from '@/types/chat';
import { chats, messages as initialMessages, members, mediaFiles } from '@/data/chatData';

interface ChatContextType {
  currentChat: string;
  messages: ChatMessage[];
  chats: Chat[];
  members: Member[];
  mediaFiles: MediaFile[];
  setCurrentChat: (name: string) => void;
  sendMessage: (content: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [currentChat, setCurrentChat] = useState('Cult of details');
  const [messages, setMessages] = useState(initialMessages);

  const sendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: messages.length + 1,
      sender: 'You',
      content,
      time: 'Just now',
      isMe: true,
      avatar: ''
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ChatContext.Provider 
      value={{
        currentChat,
        messages,
        chats,
        members,
        mediaFiles,
        setCurrentChat,
        sendMessage
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
