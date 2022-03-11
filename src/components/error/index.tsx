import React from 'react';
import { Container, Description } from './styles';

interface IProps {
  message: string;
}

export const Error: React.FC<IProps> = (props: IProps) => {
  const { message } = props;

  return (
    <Container>
      <Description>{message}</Description>
    </Container>
  );
};
