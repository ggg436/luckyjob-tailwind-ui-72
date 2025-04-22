import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { useChat } from '@/context/ChatContext';

export const ChatDetails = () => {
  const { currentChat, chats, members, mediaFiles } = useChat();
  const currentChatData = chats.find(chat => chat.name === currentChat);
  const currentChatAvatar = currentChatData?.avatar || '';

  return (
    <div className="w-72 border-l border-gray-200 flex flex-col">
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        <h2 className="text-lg font-medium">Conversation details</h2>
        <Button variant="ghost" className="text-gray-500">
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 border-b border-gray-200 flex flex-col items-center">
          <Avatar className="h-16 w-16 mb-2">
            <AvatarImage src={currentChatAvatar} alt={currentChat} />
            <AvatarFallback>{currentChat.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-medium">{currentChat}</h3>
          <p className="text-sm text-gray-500">Technology and Design chat</p>
        </div>

        <div className="p-4 border-b border-gray-200">
          <h3 className="text-sm font-medium uppercase text-gray-500 mb-4">NOTIFICATIONS</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm">Notifications</span>
            <Switch checked={true} />
          </div>
        </div>

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
  );
};
