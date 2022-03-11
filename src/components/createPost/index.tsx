import React, { useState } from 'react';
import { Container, Header } from './styles';
import axios from 'axios';
import { useHistory } from 'react-router';

const initialValue = {
  id: '',
  image: '',
  name: '',
  city: '',
  age: '',
  description: '',
  linkedin: '',
  github: '',
};

export const CreatePost: React.FC = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev: any) {
    const { name, value } = ev.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(e: any) {
    e.preventDefault();

    axios.post('http://localhost:8080/post', values).then((response) => {
      history.push('/home');
    });
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Header>
          <input id="name" name="name" type="text" onChange={onChange} placeholder="Nome Completo" />
          <input id="city" name="city" type="text" onChange={onChange} placeholder="Cidade" />
          <input id="age" name="age" type="number" onChange={onChange} placeholder="Idade" />
        </Header>
        <textarea id="description" name="description" onChange={onChange} placeholder="Descrição" />
        <div>
          <input id="linkedin" name="linkedin" type="text" onChange={onChange} placeholder="Linkedin" />
          <input id="github" name="github" type="text" onChange={onChange} placeholder="Github" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};
