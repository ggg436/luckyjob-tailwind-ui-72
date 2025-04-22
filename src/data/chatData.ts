import { Chat, ChatMessage, Member, MediaFile } from '@/types/chat';

export const chats: Chat[] = [
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

export const messages: ChatMessage[] = [
  {
    id: 1,
    sender: 'Zain George',
    content: 'Hello! I need your help in creating interactive animations for my mobile application.',
    time: '1 day ago',
    isMe: false,
    avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20male%20designer%20with%20creative%20style%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=9&orientation=squarish'
  },
  {
    id: 2,
    sender: 'You',
    content: 'Can I send you some reference files?',
    time: '1 day ago',
    isMe: true,
    avatar: ''
  },
  {
    id: 3,
    sender: 'Zain George',
    content: 'Sure! I would love to see some examples of interactive animations you have worked on before.',
    time: '23 hours ago',
    isMe: false,
    avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20male%20designer%20with%20creative%20style%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=9&orientation=squarish'
  },
  {
    id: 4,
    sender: 'You',
    content: 'I have a few Figma prototypes that showcase some smooth micro-interactions. Would you like me to share the links?',
    time: 'Today',
    isMe: true,
    avatar: ''
  },
  {
    id: 5,
    sender: 'Zain George',
    content: 'That would be perfect! Looking forward to seeing your work.',
    time: 'Just now',
    isMe: false,
    avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20male%20designer%20with%20creative%20style%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=9&orientation=squarish'
  },
  {
    id: 6,
    sender: 'Maria Butler',
    content: 'style.zip',
    time: '5 hours ago',
    isMe: false,
    fileSize: '41.26 MB',
    avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20design%20director%20with%20short%20hair%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=10&orientation=squarish'
  },
  {
    id: 7,
    sender: 'You',
    content: "We're having a meeting tomorrow. Can you make it? We're planning on 9 o'clock. Is that OK?",
    time: 'Today',
    isMe: true,
    avatar: ''
  },
  {
    id: 8,
    sender: 'Kiarra Septimus',
    content: "We're going to go over last quarter's sales figures.",
    time: '16:30',
    isMe: false,
    avatar: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20female%20marketing%20specialist%20with%20long%20dark%20hair%2C%20minimalist%20background%2C%20high%20quality%20professional%20headshot%2C%20soft%20lighting%2C%20neutral%20colors%2C%20modern%20aesthetic&width=40&height=40&seq=11&orientation=squarish'
  }
];

export const members: Member[] = [
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

export const mediaFiles: MediaFile[] = [
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

export const emojis = {
  smileys: ['😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂', '😉', '😌'],
  gestures: ['👍', '👎', '👌', '✌️', '🤞', '👊', '✋', '🤚', '🖐️', '✋'],
  hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💕', '💞', '💓'],
  nature: ['🌺', '🌸', '🌼', '🌻', '🌹', '🍀', '🌳', '🌲', '🌴', '🌵']
};
