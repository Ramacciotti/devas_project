export interface AboutProps {
  name: string;
  age: string;
  city: string;
  description: string;
  image: number;
}

export interface SocialProps {
  github: string;
  linkedin: string;
  site: string;
}

export interface JobProps {
  position: string;
  level: string;
  preference: string;
  objective: string;
  expectation: string;
}

export interface TechnologiesProps {
  name: string;
}

export interface IAccount {
  registerUser: (email: string, password: string, about: AboutProps, social: SocialProps, job: JobProps, technologies: TechnologiesProps) => void;
  loginUser: (email: string, password: string) => Promise<any>;
  popupMessage: string;
  hasError: boolean;
  logged: boolean;
  showPopup: boolean;
}

export interface IUser {
  email: string;
  password?: string;
  about: AboutProps;
  social: SocialProps;
  job: JobProps;
  technologies: TechnologiesProps[];
}
