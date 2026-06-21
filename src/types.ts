export interface Character {
  id: string;
  name: string;
  role: string;
  age: number;
  gender: 'M' | 'F' | 'Cat' | 'Other';
  height?: string;
  mbti?: string;
  enneagram?: string;
  visualBio: string;
  textBio: string;
  temperament: string;
  dialogueLines: string[];
  instagramHandle: string;
  routine: string[];
  hashtags: string[];
  residency: string;
  avatarUrl?: string;
}

export interface ZoneDetail {
  id: string;
  name: string;
  englishName: string;
  description: string;
  details: string;
  relatedCharacterId?: string;
  coordinateMark?: { x: number; y: number }; // Relative positions in percent
}

export interface FloorData {
  floor: string;
  title: string;
  subtitle: string;
  description: string;
  detailMapTitle: string;
  zones: ZoneDetail[];
  businessHours?: string;
  specialNote?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  hashtags: string[];
  bannerText: string;
  managerId?: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: { user: string; text: string }[];
  date: string;
  isLiked?: boolean;
}
