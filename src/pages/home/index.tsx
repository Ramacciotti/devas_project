import React from 'react';
import { Banner } from '../../components/banner';
import { PostFeed } from '../../components/postFeed';
import { Container } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Banner />
      <PostFeed />
    </Container>
  );
};
