export type ScreenType = 
  | 'home'
  | 'map'
  | 'worlds'
  | 'letter-activity'
  | 'number-activity'
  | 'victory'
  | 'progress'
  | 'rewards'
  | 'profile';

export interface UserStats {
  stars: number;
  streak: number;
  level: number;
  levelProgress: number; // 0-100
  name: string;
  avatarUrl: string;
  favoriteColor: string;
  outfit: string;
}

export interface ActivityCardData {
  id: string;
  title: string;
  subtitle?: string;
  stars: number;
  progress?: number;
  icon: string;
  iconBgColor: string;
  actionText: string;
  actionBgColor: string;
  actionTextColor: string;
  borderColor: string;
  route: ScreenType;
  letterParam?: string;
}

export interface BadgeItem {
  id: string;
  name: string;
  icon: string;
  imageUrl?: string;
  isUnlocked: boolean;
  floatClass?: string;
}
