export interface IAccount {
  registerUser: (
    email: string,
    password: string,
    about: {
      name: string;
      age: number;
      city: string;
      description: string;
      image: number;
    },
    social: {
      github: string;
      linkedin: string;
    },
    job: {
      position: string;
      level: string;
      preference: string;
      objective: string;
      expectation: string;
    },
    technology: {
      name: string;
    }
  ) => void;
  loginUser: (email: string, password: string) => Promise<any>;
  popupMessage: string;
  hasError: boolean;
  logged: boolean;
  showPopup: boolean;
}

export interface IUser {
  email: string;
  password?: string;
  about: {
    name: string;
    age: number;
    city: string;
    description: string;
    image: number;
  };
  social: {
    github: string;
    linkedin: string;
  };
  job: {
    position: string;
    level: string;
    preference: string;
    objective: string;
    expectation: string;
  };
  technology: {
    name: string;
  };
}
