import { useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, Plus, Paperclip, Smile, Send, X } from "lucide-react";

const Messages = () => {
  const [currentChat, setCurrentChat] = useState('Cult of details');
  const [messageInput, setMessageInput] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Zain George',
      content: 'Hello! Finally found the time to write to you! I need your help in creating interactive animations for my mobile application.',
      time: '1 day ago',
      isMe: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20male%20designer%20with%20creative%20style%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=9&orientation=squarish'
    },
    {
      id: 2,
      sender: 'You',
      content: 'Can I send you files?',
      time: '1 day ago',
      isMe: true,
      avatar: ''
    },
    {
      id: 3,
      sender: 'You',
      content: 'Hey! Okay, send out.',
      time: '23 hours ago',
      isMe: true,
      avatar: ''
    },
    {
      id: 4,
      sender: 'Maria Butler',
      content: 'style.zip',
      time: '5 hours ago',
      isMe: false,
      fileSize: '41.26 MB',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20design%20director%20with%20short%20hair%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=10&orientation=squarish'
    },
    {
      id: 5,
      sender: 'You',
      content: "We're having a meeting tomorrow. Can you make it? We're planning on 9 o'clock. Is that OK?",
      time: 'Today',
      isMe: true,
      avatar: ''
    },
    {
      id: 6,
      sender: 'Kiarra Septimus',
      content: "We're going to go over last quarter's sales figures.",
      time: '16:30',
      isMe: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20marketing%20specialist%20with%20long%20dark%20hair%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=11&orientation=squarish'
    }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const emojis = {
    smileys: ['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '😉', '😌'],
    gestures: ['👍', '👎', '👌', '✌️', '🤞', '👊', '✋', '🤚', '🖐️', '✋'],
    hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💕', '💞', '💓'],
    nature: ['🌺', '🌸', '🌼', '🌻', '🌹', '🍀', '🌳', '🌲', '🌴', '🌵']
  };

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

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        content: messageInput,
        time: 'Just now',
        isMe: true,
        avatar: ''
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');
      const scrollArea = document.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollArea) {
        setTimeout(() => {
          scrollArea.scrollTop = scrollArea.scrollHeight;
        }, 0);
      }
    }
  };

  const chats = [
    {
      id: 1,
      name: 'Cult of details',
      message: 'Hello! Finally found the time to welcome you to our design chat.',
      time: '10:30',
      unread: true,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20designer%20with%20creative%20style%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Intelligent design',
      message: 'We are now ready to present you our latest concepts.',
      time: '09:45',
      unread: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20design%20team%20leader%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic%2C%20creative%20professional&width=40&height=40&seq=2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Mira Westervelt',
      message: 'I will be ready for them. They look promising!',
      time: '09:21',
      unread: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20project%20manager%20with%20blonde%20hair%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=3&orientation=squarish'
    },
    {
      id: 4,
      name: 'Ahmad Carder',
      message: 'An update regarding a possible shift in our design direction.',
      time: '15:30',
      unread: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20middle%20eastern%20male%20UX%20designer%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=4&orientation=squarish'
    },
    {
      id: 5,
      name: 'Carter Rhiel Madsen',
      message: 'Started the responsive design implementation yesterday.',
      time: '05:17',
      unread: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20scandinavian%20male%20developer%20with%20beard%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=5&orientation=squarish'
    },
    {
      id: 6,
      name: 'Rayna Lubin',
      message: 'So fine, where are you going with this design concept?',
      time: '02:34',
      unread: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20art%20director%20with%20curly%20hair%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=6&orientation=squarish'
    },
    {
      id: 7,
      name: 'Hanna Workman',
      message: 'Just finished writing a brief on the new visual identity.',
      time: '12:54',
      unread: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20content%20strategist%20with%20glasses%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=7&orientation=squarish'
    },
    {
      id: 8,
      name: 'Keiya Philips',
      message: 'Let me know when you have time to review the wireframes.',
      time: '01:11',
      unread: false,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20UX%20researcher%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=8&orientation=squarish'
    }
  ];

  const members = [
    {
      id: 1,
      name: 'Maria Butler',
      role: 'Admin',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20design%20director%20with%20short%20hair%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=12&orientation=squarish',
      lastSeen: 'last seen 5 hours ago'
    },
    {
      id: 2,
      name: 'Kiarra Septimus',
      role: 'Member',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20marketing%20specialist%20with%20long%20dark%20hair%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=13&orientation=squarish',
      lastSeen: 'last seen 30 min ago'
    },
    {
      id: 3,
      name: 'Zain George',
      role: 'Member',
      avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20male%20designer%20with%20creative%20style%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=14&orientation=squarish',
      lastSeen: 'last seen just now'
    }
  ];

  const mediaFiles = [
    {
      id: 1,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=design%20mood%20board%20with%20color%20swatches%2C%20typography%20samples%2C%20and%20material%20textures%2C%20flat%20lay%20photography%2C%20professional%20design%20work%2C%20creative%20process%20visualization&width=80&height=80&seq=15&orientation=squarish'
    },
    {
      id: 2,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=minimalist%20product%20design%20sketch%20on%20paper%2C%20clean%20lines%2C%20professional%20design%20work%2C%20creative%20process%2C%20neutral%20background&width=80&height=80&seq=16&orientation=squarish'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=UI%20design%20wireframe%20on%20digital%20tablet%2C%20professional%20workspace%2C%20creative%20design%20process%2C%20clean%20minimal%20aesthetic&width=80&height=80&seq=17&orientation=squarish'
    },
    {
      id: 4,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=color%20palette%20swatches%20for%20professional%20design%20project%2C%20organized%20design%20elements%2C%20creative%20process%20materials%2C%20clean%20workspace&width=80&height=80&seq=18&orientation=squarish'
    },
    {
      id: 5,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=design%20grid%20system%20layout%20on%20paper%2C%20professional%20design%20methodology%2C%20creative%20process%2C%20clean%20minimal%20aesthetic&width=80&height=80&seq=19&orientation=squarish'
    },
    {
      id: 6,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=UI%20component%20library%20samples%2C%20organized%20design%20system%20elements%2C%20professional%20design%20work%2C%20clean%20minimal%20aesthetic&width=80&height=80&seq=20&orientation=squarish'
    },
    {
      id: 7,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=design%20team%20brainstorming%20session%20materials%2C%20sticky%20notes%20with%20ideas%2C%20professional%20creative%20process%2C%20clean%20workspace&width=80&height=80&seq=21&orientation=squarish'
    },
    {
      id: 8,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=typography%20samples%20and%20font%20pairing%20examples%2C%20professional%20design%20elements%2C%20creative%20process%20materials%2C%20clean%20minimal%20aesthetic&width=80&height=80&seq=22&orientation=squarish'
    },
    {
      id: 9,
      type: 'image',
      url: 'https://readdy.ai/api/search-image?query=design%20project%20timeline%20and%20milestone%20chart%2C%20professional%20project%20management%2C%20creative%20process%20planning%2C%20clean%20minimal%20aesthetic&width=80&height=80&seq=23&orientation=squarish'
    }
  ];

  return (
    <div className="flex h-screen bg-white text-gray-800 font-sans">
      {/* Left Sidebar */}
      <div className="w-72 border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-4 border-b border-gray-200">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold">Messages</h1>
          </div>
        </div>
        
        {/* Search */}
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

        {/* Chat Categories */}
        <ScrollArea className="flex-1">
          <div className="px-4 py-2">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">GROUP CHATS</h2>
          </div>
          
          {/* Group Chats */}
          <div className="space-y-1 px-2">
            {chats.slice(0, 2).map(chat => (
              <div
                key={chat.id}
                className={`flex items-center space-x-3 px-2 py-2 rounded-lg cursor-pointer ${
                  currentChat === chat.name ? 'bg-pink-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => setCurrentChat(chat.name)}
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
            ))}
          </div>

          <div className="px-4 py-2 mt-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">PERSONAL CHATS</h2>
          </div>
          
          {/* Personal Chats */}
          <div className="space-y-1 px-2">
            {chats.slice(2).map(chat => (
              <div
                key={chat.id}
                className={`flex items-center space-x-3 px-2 py-2 rounded-lg cursor-pointer ${
                  currentChat === chat.name ? 'bg-gray-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => setCurrentChat(chat.name)}
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
            ))}
          </div>
        </ScrollArea>

        {/* New Chat Button */}
        <div className="p-4">
          <Button className="w-10 h-10 rounded-full p-0 bg-pink-500 hover:bg-pink-600 text-white">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-3">
              <AvatarImage src={chats[0].avatar} alt={currentChat} />
              <AvatarFallback>{currentChat.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-md font-medium">{currentChat}</h2>
            </div>
          </div>
        </div>

        {/* Messages */}
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

        {/* Message Input */}
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
              onClick={handleSendMessage}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 border-l border-gray-200 flex flex-col">
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Conversation details</h2>
          <Button variant="ghost" className="text-gray-500">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="flex-1">
          {/* Group Info */}
          <div className="p-4 border-b border-gray-200 flex flex-col items-center">
            <Avatar className="h-16 w-16 mb-2">
              <AvatarImage src={chats[0].avatar} alt={currentChat} />
              <AvatarFallback>{currentChat.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-medium">{currentChat}</h3>
            <p className="text-sm text-gray-500">Technology and Design chat</p>
          </div>

          {/* Notifications */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-sm font-medium uppercase text-gray-500 mb-4">NOTIFICATIONS</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm">Notifications</span>
              <Switch checked={true} />
            </div>
          </div>

          {/* Media Files */}
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-sm font-medium uppercase text-gray-500 mb-4">CONVERSATION FILES</h3>
            <Tabs defaultValue="photos">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="photos" className="text-xs">Photos</TabsTrigger>
                <TabsTrigger value="links" className="text-xs">Links</TabsTrigger>
                <TabsTrigger value="documents" className="text-xs">Documents</TabsTrigger>
              </TabsList>
              <TabsContent value="photos" className="mt-4">
                <div className="grid grid-cols-3 gap-2">
                  {mediaFiles.map(file => (
                    <div key={file.id} className="aspect-square rounded-md overflow-hidden cursor-pointer">
                      <img
                        src={file.url}
                        alt="Media file"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="links">
                <div className="text-sm text-gray-500 py-4 text-center">No links shared yet</div>
              </TabsContent>
              <TabsContent value="documents">
                <div className="text-sm text-gray-500 py-4 text-center">No documents shared yet</div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Members */}
          <div className="p-4">
            <h3 className="text-sm font-medium uppercase text-gray-500 mb-4">MEMBERS</h3>
            <div className="space-y-4">
              {members.map(member => (
                <div key={member.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.lastSeen}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {member.role}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Messages;
