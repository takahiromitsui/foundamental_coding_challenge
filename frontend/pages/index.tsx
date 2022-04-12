import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import CompanyList from '../components/companies/CompanyList';

const DUMMY_COMPANIES = [
  {
    country: 'Sweden',
    description: 'Secured scalable standardization',
    name: 'Mayer and Sons',
    founding_date: '2021-06-11T02:09:34',
    id: 1,
  },
  {
    country: null,
    description: 'Sharable contextually-based instruction set',
    name: 'Bartoletti and Sons',
    founding_date: null,
    id: 2,
  },
  {
    country: 'Azerbaijan',
    description: null,
    name: 'West, Abernathy and Monahan',
    founding_date: '2021-01-27T00:08:32',
    id: 3,
  },
];

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Foundamental App</title>
        <meta name='description' content='Foundamental App' />
      </Head>
      <CompanyList companies={DUMMY_COMPANIES} />
    </Fragment>
  );
};

export default Home;
