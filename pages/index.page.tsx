import { Container } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import React from 'react';
import Filters from './component/Filter';
import CustomTable from './component/Table';
import { cardProps } from './database/dbprops';

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const props = await cardProps(query);

  return {
    props: { biatlonist: props },
    // will be passed to the page component as props
  };
};
1;

export interface propsHomeI {
  _id: string;
  place: number;
  name: string;
  shooting: string;
  hits: number;
  rateoffire: string;
  time: string;
}

const Home: React.FC<{ biatlonist: string }> = ({ biatlonist }) => {
  const biatlons: Array<propsHomeI> = JSON.parse(biatlonist);

  return (
    <Container>
      <Filters />
      <CustomTable biatlons={biatlons} />
    </Container>
  );
};

export default Home;
