// Core data types for the portfolio application
export interface Skill {
     name: string;
     icon: string;
     title: string;
}

export interface Project {
     id: string;
     title: string;
     description: string;
     image: string;
     tags: string[];
     category: 'Frontend' | 'Backend' | 'Full Stack';
     githubUrl?: string;
     liveUrl?: string;
}

export interface Experience {
     id: string;
     title: string;
     company: string;
     duration: string;
     startDate: Date;
     endDate?: Date;
     location: string;
     description: string;
     responsibilities: string[];
     technologies: string[];
}

export interface ContactForm {
     name: string;
     email: string;
     message: string;
}

export interface SocialLink {
     name: string;
     url: string;
     icon: string;
}

export interface Theme {
     mode: 'light' | 'dark';
}

export interface NavigationItem {
     id: string;
     label: string;
     href: string;
}

// Component Props Types
export interface ButtonProps {
     children: React.ReactNode;
     onClick?: () => void;
     variant?: 'primary' | 'secondary' | 'ghost';
     disabled?: boolean;
     type?: 'button' | 'submit' | 'reset';
     className?: string;
}

export interface SectionProps {
     id: string;
     children: React.ReactNode;
     className?: string;
}

export interface ProgressBarProps {
     progress: number;
}

export interface NotificationProps {
     message: string;
     type: 'success' | 'error' | 'info';
     isVisible: boolean;
     onClose: () => void;
}
