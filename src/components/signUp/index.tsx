import React, { useState, useContext } from 'react';
import { Container, Content, Boxes, Title, Section, Fields, Description } from './styles';
import { UserContext } from '../../components/user';
import w1 from '../../assets/w1.svg';
import w2 from '../../assets/w2.svg';
import w3 from '../../assets/w3.svg';
import w4 from '../../assets/w4.svg';
import { AboutProps, SocialProps, JobProps, TechnologiesProps } from '../../interfaces/IAccount';
import axios from 'axios';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [about, setAbout] = useState<AboutProps>({
    name: name,
    age: age,
    city: city,
    description: description,
    image: Number(image),
  });

  const [github, setGithub] = useState<string>('');
  const [linkedin, setLinkedin] = useState<string>('');
  const [site, setSite] = useState<string>('');
  const [social, setSocial] = useState<SocialProps>({
    github: github,
    linkedin: linkedin,
    site: site,
  });

  const [position, setPosition] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [preference, setPreference] = useState<string>('');
  const [objective, setObjective] = useState<string>('');
  const [expectation, setExpectation] = useState<string>('');
  const [job, setJob] = useState<JobProps>({
    position: position,
    level: level,
    preference: preference,
    objective: objective,
    expectation: expectation,
  });

  const [language, setLanguage] = useState<string>('');

  const [technologies, setTechnologies] = useState<TechnologiesProps>({ name: language });

  const { registerUser } = useContext(UserContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  };

  return (
    <Container>
      <Content>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} method="POST">
          <Boxes>
            <Section>
              <Title>
                <h2>1. Login e Cadastro</h2>
              </Title>
              <Description>
                <p>Digite com qual email e senha você gostaria de logar na plataforma.</p>
              </Description>
              <Fields>
                <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input name="password" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Fields>
            </Section>
            <hr />
            <Section>
              <Title>
                <h2>2. Sobre</h2>
              </Title>
              <Description>
                <p>Fale um pouco sobre você!</p>
              </Description>
              <Fields>
                <input name="name" type="text" placeholder="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} required />
                <input name="age" type="text" placeholder="Idade" value={age} onChange={(e) => setAge(e.target.value)} required />
                <input name="city" type="text" placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)} required />
                <textarea name="description" placeholder="descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <select id="image" onChange={(e) => setImage(e.target.value)} defaultValue="1" value={image}>
                  <option value="" selected hidden>
                    Qual das imagens abaixo você quer que a represente?
                  </option>
                  <option value="1">Mulher 1</option>
                  <option value="2">Mulher 2</option>
                  <option value="3">Mulher 3</option>
                  <option value="4">Mulher 4</option>
                </select>
                <div>
                  <img src={w1} alt="Mulher 1" />
                  <img src={w2} alt="Mulher 2" />
                  <img src={w3} alt="Mulher 3" />
                  <img src={w4} alt="Mulher 4" />
                </div>
              </Fields>
            </Section>
            <hr />
            <Section>
              <Title>
                <h2>3. Social</h2>
              </Title>
              <Description>
                <p>Quais são suas redes sociais?</p>
              </Description>
              <Fields>
                <input name="github" type="text" placeholder="Github" value={github} onChange={(e) => setGithub(e.target.value)} required />
                <input name="linkedin" type="text" placeholder="Linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required />
                <input name="site" type="text" placeholder="Site" value={site} onChange={(e) => setSite(e.target.value)} required />
              </Fields>
            </Section>
            <hr />
            <Section>
              <Title>
                <h2>4. Trabalho</h2>
              </Title>
              <Description>
                <p>Nos conte que tipo de trabalho você está procurando atualmente</p>
              </Description>
              <Fields>
                <input name="cargo" type="text" placeholder="Cargo" value={position} onChange={(e) => setPosition(e.target.value)} required />
                <select id="objective" onChange={(e) => setObjective(e.target.value)} defaultValue="career_transition" value={objective}>
                  <option value="" selected hidden>
                    Qual é o seu principal objetivo atualmente?
                  </option>
                  <option value="career_transition">Transição de Carreira</option>
                  <option value="looking_oportunity">Procurando Nova Oportunidade</option>
                  <option value="first_oportunity">Primeira Oportunidade</option>
                  <option value="return_market">Voltar ao Mercado de Trabalho</option>
                </select>
                <select id="level" value={level} onChange={(e) => setLevel(e.target.value)} defaultValue="trainee">
                  <option value="" selected hidden>
                    Qual é o nível da vaga que voce está buscando?
                  </option>
                  <option value="internship">Estágio</option>
                  <option value="trainee">Trainee</option>
                  <option value="junior">Junior</option>
                  <option value="pleno">Pleno</option>
                  <option value="senior">Senior</option>
                  <option value="specialist">Especialista</option>
                </select>
                <select id="preference" onChange={(e) => setPreference(e.target.value)} defaultValue="online" value={preference}>
                  <option value="" selected hidden>
                    Qual regime de trabalho mais te interessa?
                  </option>
                  <option value="company">Presencial</option>
                  <option value="online">Online</option>
                  <option value="hybrid">Híbrido</option>
                </select>
                <input name="expectation" type="text" placeholder="Salário" value={expectation} onChange={(e) => setExpectation(e.target.value)} required />
              </Fields>
            </Section>
            <hr />
            <Section>
              <Title>
                <h2>5. Tecnologias</h2>
              </Title>
              <Description>
                <p>Quais são as linguagens que você conhece?</p>
              </Description>
              <Fields>
                <input name="languages" type="text" placeholder="Linguagem" value={language} onChange={(e) => setLanguage(e.target.value)} required />
              </Fields>
            </Section>
            <Section>
              <button type="submit">Cadastrar</button>
            </Section>
          </Boxes>
        </form>
      </Content>
    </Container>
  );
};
