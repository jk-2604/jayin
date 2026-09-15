
export interface Quote {
  id: string;
  text: string;
  author?: string;
}

export interface EducationDetail {
  text: string;
  iconName?: string; // Lucide icon name for the bullet point
  url?: string; // Optional URL for the detail item
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string; // Used for achievements or general text
  iconIdentifier?: string; // Main icon for the card
  details?: EducationDetail[]; // Specific bullet-point details, primarily for education
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string; // To describe experience with the skill
  iconName: string; // To specify a Lucide icon name
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  shortAbstract: string;
  supervisorName?: string;
  supervisorLink?: string;
  // For detailed page, we might have more fields
  fullWriteUp?: string;
  paperLink?: string | null;
  githubLink?: string | null;
  datasetLink?: string | null;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}
