import React, { useState } from 'react';
import { Container, Content, Boxes, Title, Section, Fields, Description } from './styles';
import w1 from '../../assets/w1.svg';
import w2 from '../../assets/w2.svg';
import w3 from '../../assets/w3.svg';
import w4 from '../../assets/w4.svg';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Panel: React.FC = () => {
  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [image, setImage] = useState<number | null>(null);
  const [github, setGithub] = useState<string | null>(null);
  const [linkedin, setLinkedin] = useState<string | null>(null);
  const [position, setPosition] = useState<string | null>(null);
  const [level, setLevel] = useState<string | null>(null);
  const [preference, setPreference] = useState<string | null>(null);
  const [objective, setObjective] = useState<string | null>(null);
  const [expectation, setExpectation] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const history = useHistory();

  const handleDelete = () => {
    const email = localStorage.getItem('email');
    const formatedEmail = email?.slice(1, -1);

    const password = localStorage.getItem('password');
    const formatedPassword = password?.slice(1, -1);

    axios
      .delete(`http://localhost:8080/user/delete/${formatedEmail}/${formatedPassword}`)
      .then((response) => {
        console.log('SUCESSO: ', response);
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('logged');
        alert('Conta deletada com sucesso!');
        history.push('/home');
        window.location.reload();
      })
      .catch((error) => {
        console.log('ERROR: ', error);
        alert('Ops! Ocorreu um erro ao deletar a sua conta.');
        window.location.reload();
      });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = localStorage.getItem('email');
    const formatedEmail = email?.slice(1, -1);

    const password = localStorage.getItem('password');
    const formatedPassword = password?.slice(1, -1);

    axios
      .put('http://localhost:8080/user/update', {
        email: formatedEmail,
        password: formatedPassword,
        about: {
          name: name,
          age: age,
          city: city,
          description: description,
          image: image,
        },
        social: {
          github: github,
          linkedin: linkedin,
        },
        job: {
          position: position,
          level: level,
          preference: preference,
          objective: objective,
          expectation: expectation,
        },
        technology: {
          name: language,
        },
      })
      .then((response) => {
        console.log('SUCESSO: ', response);
        alert('Conta atualizada com sucesso!');
        window.location.reload();
      })
      .catch((error) => {
        console.log('ERROR: ', error);
        alert('Ops! Ocorreu um erro ao atualizar a sua conta.');
        window.location.reload();
      });
  };

  return (
    <Container>
      <Content>
        <h2>Painel</h2>
        <p>Bem vinda Deva! Aqui você poderá atualizar algumas de suas informações.</p>
        <form id="form" onSubmit={handleSubmit} method="PUT">
          <Boxes>
            <Section>
              <Title>
                <h2>Sobre</h2>
              </Title>
              <Description>
                <p>
                  Fale um pouco sobre você! Quais são seus pontos fortes? Quais experiências profissionais você viveu? Use o espaço de descrição ao seu favor!
                </p>
              </Description>
              <Fields>
                <input name="name" type="text" placeholder="Nome Completo" onChange={(e) => setName(e.target.value)} />
                <input name="age" type="text" placeholder="Idade" onChange={(e) => setAge(Number(e.target.value))} />
                <input name="city" type="text" placeholder="Cidade" onChange={(e) => setCity(e.target.value)} />
                <textarea name="description" placeholder="descrição" onChange={(e) => setDescription(e.target.value)} maxLength={466} minLength={200} />
                <select
                  id="image"
                  onChange={(e) => {
                    const selected = e.target.value;
                    setImage(Number(selected));
                  }}
                  defaultValue="1"
                >
                  <option value="" selected hidden>
                    Qual das imagens abaixo você quer que a represente?
                  </option>
                  <option value="1">Imagem 1</option>
                  <option value="2">Imagem 2</option>
                  <option value="3">Imagem 3</option>
                  <option value="4">Imagem 4</option>
                </select>
                <div>
                  <img src={w1} alt="Mulher 1" />
                  <img src={w2} alt="Mulher 2" />
                  <img src={w3} alt="Mulher 3" />
                  <img src={w4} alt="Mulher 4" />
                </div>
              </Fields>
            </Section>

            <Section>
              <Title>
                <h2>Social</h2>
              </Title>
              <Description>
                <p>Deixe aqui seu github e seu linkedin para que colegas e recrutadores possam te encontrar!</p>
              </Description>
              <Fields>
                <input name="github" type="text" placeholder="Github" onChange={(e) => setGithub(e.target.value)} />
                <input name="linkedin" type="text" placeholder="Linkedin" onChange={(e) => setLinkedin(e.target.value)} />
              </Fields>
            </Section>

            <Section>
              <Title>
                <h2>Trabalho</h2>
              </Title>
              <Description>
                <p>Que tipo de trabalho você está procurando atualmente? Cite suas preferências abaixo!</p>
              </Description>
              <Fields>
                <input
                  name="cargo"
                  type="text"
                  placeholder="Qual é a sua profissão? Ex: Analista de sistemas, Desenvolvedor frontend, etc..."
                  onChange={(e) => setPosition(e.target.value)}
                />
                <select
                  id="objective"
                  onChange={(e) => {
                    const selected = e.target.value;
                    setObjective(selected);
                  }}
                  defaultValue="career_transition"
                >
                  <option value="" selected hidden>
                    Qual é o seu principal objetivo atualmente?
                  </option>
                  <option value="career_transition">Transição de Carreira</option>
                  <option value="looking_oportunity">Procurando Nova Oportunidade</option>
                  <option value="first_oportunity">Primeira Oportunidade</option>
                  <option value="return_market">Voltar ao Mercado de Trabalho</option>
                </select>
                <select
                  id="level"
                  onChange={(e) => {
                    const selected = e.target.value;
                    setLevel(selected);
                  }}
                  defaultValue="trainee"
                >
                  <option selected hidden>
                    Qual é o seu nível de conhecimento?
                  </option>
                  <option value="internship">Estágio</option>
                  <option value="trainee">Trainee</option>
                  <option value="junior">Junior</option>
                  <option value="pleno">Pleno</option>
                  <option value="senior">Senior</option>
                  <option value="specialist">Especialista</option>
                </select>
                <select
                  id="preference"
                  onChange={(e) => {
                    const selected = e.target.value;
                    setPreference(selected);
                  }}
                  defaultValue="online"
                >
                  <option value="" selected hidden>
                    Qual regime de trabalho mais te interessa?
                  </option>
                  <option value="company">Presencial</option>
                  <option value="online">Online</option>
                  <option value="hybrid">Híbrido</option>
                </select>
                <input name="expectation" type="text" placeholder="Qual seria o seu salário ideal?" onChange={(e) => setExpectation(e.target.value)} />
              </Fields>
            </Section>

            <Section>
              <Title>
                <h2>Tecnologias</h2>
              </Title>
              <Description>
                <p>
                  Escreva, <strong>separando por vírgula</strong>, quais linguagens / ferramentas / bibliotecas você conhece
                </p>
              </Description>
              <Fields>
                <input
                  name="languages"
                  type="text"
                  placeholder="Ex: Html, Css, Javascript, Java, C#, Php, Mysql..."
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </Fields>
            </Section>

            <Section>
              <button type="submit">Atualizar</button>
              <button type="button" onClick={handleDelete}>
                Deletar Conta
              </button>
            </Section>
          </Boxes>
        </form>
      </Content>
    </Container>
  );
};
