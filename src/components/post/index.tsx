/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import {
  Container,
  Content,
  Email,
  Position,
  Level,
  Tags,
  Image,
  Text,
  SocialIcons,
  Header,
  MinorInfo,
  Description,
  Information,
  Objective,
  Name,
  Preference,
  City,
  Age,
  Languages,
} from './styles';
import linkedinIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';
import w1 from '../../assets/w1.svg';
import w2 from '../../assets/w2.svg';
import w3 from '../../assets/w3.svg';
import w4 from '../../assets/w4.svg';
import { IUser } from '../../interfaces/IAccount';
import { useEffect } from 'react';

export const Post: React.FC<IUser> = (props: IUser) => {
  const { email, about, social, job, technologies } = props;
  const [woman, setWoman] = useState('');

  const [objective, setObjective] = useState('');
  const [preference, setPreference] = useState('');
  const [level, setLevel] = useState('');

  const getImage = () => {
    if (about.image == 1) {
      setWoman(w1);
    }
    if (about.image == 2) {
      setWoman(w2);
    }
    if (about.image == 3) {
      setWoman(w3);
    }
    if (about.image == 4) {
      setWoman(w4);
    }
  };

  const editObjective = () => {
    if (job.objective === 'first_oportunity') {
      setObjective('Primeira oportunidade');
    }
    if (job.objective === 'looking_oportunity') {
      setObjective('Procurando nova oportunidade');
    }
    if (job.objective === 'career_transition') {
      setObjective('Transição de Carreira');
    }
    if (job.objective === 'return_market') {
      setObjective('Voltando ao mercado de trabalho');
    }
  };

  const editPreference = () => {
    if (job.preference === 'company') {
      setPreference('Empresa');
    }
    if (job.preference === 'online') {
      setPreference('Online');
    }
    if (job.preference === 'hybrid') {
      setPreference('Híbrido');
    }
  };

  const editLevel = () => {
    if (job.level === 'internship') {
      setLevel('Estagiário');
    }
    if (job.level === 'trainee') {
      setLevel('Trainee');
    }
    if (job.level === 'junior') {
      setLevel('Júnior');
    }
    if (job.level === 'pleno') {
      setLevel('Pleno');
    }
    if (job.level === 'senior') {
      setLevel('Sênior');
    }
    if (job.level === 'specialist') {
      setLevel('Especialista');
    }
  };

  useEffect(() => {
    getImage();
    editObjective();
    editPreference();
    editLevel();
  }, []);

  return (
    <Container>
      <Content>
        <Image>
          <img src={woman} alt="" />
        </Image>
        <Information>
          <Header>
            <Text>
              <Name>
                <h2>{about.name}</h2>
              </Name>
              <MinorInfo>
                <Age>
                  <span>Idade:</span>
                  <h3>{about.age}</h3>
                </Age>
                |
                <City>
                  <span>Cidade:</span>
                  <h3>{about.city}</h3>
                </City>
                |
                <Email>
                  <span>Email:</span>
                  <h3>{email}</h3>
                </Email>
              </MinorInfo>
              <Tags>
                <Position>
                  <h4>{job.position}</h4>
                </Position>
                <Level>
                  <h4>{level}</h4>
                </Level>
                <Objective>
                  <h4>{objective}</h4>
                </Objective>
                <Preference>
                  <h4>{preference}</h4>
                </Preference>
              </Tags>
            </Text>
            <SocialIcons>
              <a href={social.linkedin} target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="Ícone do Linkedin" />
              </a>
              <a href={social.github} target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Ícone do Github" />
              </a>
            </SocialIcons>
          </Header>
          <Description>
            <p>{about.description}</p>
          </Description>
          <Languages>
            {technologies &&
              technologies?.map((language) => {
                return <h4>{language.name}</h4>;
              })}
          </Languages>
        </Information>
      </Content>
    </Container>
  );
};
