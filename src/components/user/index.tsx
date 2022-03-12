import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { IAccount } from '../../interfaces/IAccount';

const UserContext = createContext({} as IAccount);

const UserProvider: React.FC = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>('');

  const resetStates = () => {
    setHasError(false);
    setPopupMessage('');
    setShowPopup(false);
  };

  const loginUser = async (email: string, password: string) => {
    axios
      .post('http://localhost:8080/user/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('password', JSON.stringify(password));
        localStorage.setItem('logged', 'true');
        resetStates();
      })
      .catch((error) => {
        console.log('ERROR: ', error);
        localStorage.setItem('logged', 'false');
      });
  };

  const registerUser = (
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
  ) => {
    axios
      .post('http://localhost:8080/user/create', {
        email: email,
        password: password,
        about: {
          name: about.name,
          age: about.age,
          city: about.city,
          description: about.description,
          image: about.image,
        },
        social: {
          github: social.github,
          linkedin: social.linkedin,
        },
        job: {
          position: job.position,
          level: job.level,
          preference: job.preference,
          objective: job.objective,
          expectation: job.expectation,
        },
        technology: {
          name: technology.name,
        },
      })
      .then((response) => {
        console.log('SUCESSO: ', response);
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  };

  useEffect(() => {
    const login = localStorage.getItem('logged');
    if (login == 'true') {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        hasError,
        logged,
        popupMessage,
        showPopup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
