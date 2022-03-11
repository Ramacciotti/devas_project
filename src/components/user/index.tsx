import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { IAccount, AboutProps, SocialProps, JobProps, TechnologiesProps } from '../../interfaces/IAccount';

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
        localStorage.setItem('logged', 'true');
        resetStates();
      })
      .catch((error) => {
        console.log('ERROR: ', error);
        localStorage.setItem('logged', 'false');
      });
  };

  const registerUser = (email: string, password: string, about: AboutProps, social: SocialProps, job: JobProps, technologies: TechnologiesProps) => {
    console.log(job.level);
    axios
      .post('http://localhost:8080/user/create', {
        email: email,
        password: password,
        about: about,
        social: social,
        job: job,
        technologies: technologies,
      })
      .then((response) => {
        console.log('SUCESSO: ', response);
        resetStates();
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
