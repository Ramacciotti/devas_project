import React from 'react';
import { useEffect, useState } from 'react';
import { api } from '../../utils/Api';
import { Post } from '../post';
import { Container } from './styles';
import { IUser } from '../../interfaces/IAccount';

export const PostFeed: React.FC = () => {
  const [users, setusers] = useState<IUser[]>();

  async function fetchData() {
    const response = await api.get('/user/read');
    const data = await response.data;
    setusers(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {users &&
        users?.map((user) => {
          return (
            <section key={user.email}>
              <Post email={user.email} about={user.about} social={user.social} job={user.job} technology={user.technology} />
            </section>
          );
        })}
    </Container>
  );
};
