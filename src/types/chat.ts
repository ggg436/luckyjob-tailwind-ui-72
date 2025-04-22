
export interface ChatMessage {
  id: number;
  sender: string;
  content: string;
  time: string;
  isMe: boolean;
  avatar: string;
  fileSize?: string;
}

export interface Chat {
  id: number;
  name: string;
  message: string;
  time: string;
  unread: boolean;
  avatar: string;
}

export interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
  lastSeen: string;
}

export interface MediaFile {
  id: number;
  type: string;
  url: string;
}
