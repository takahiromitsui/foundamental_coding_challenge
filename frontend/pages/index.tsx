import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import CompanyList from '../components/companies/CompanyList';
import { CompanyType } from '../types/types';

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

const Home: NextPage = (props: any) => {
  return (
    <Fragment>
      <Head>
        <title>Foundamental App</title>
        <meta name='description' content='Foundamental App' />
      </Head>
      <CompanyList companies={props.companies} />
    </Fragment>
  );
};
// cannot fetch localhost:20002
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:20002/companies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let companies;
  if (response.ok) {
    companies = await response.json();
  } else {
    companies = DUMMY_COMPANIES
  }
  return {
    props: {
      companies: companies.map((company: CompanyType) => ({
        id: company.id,
        name: company.name,
        country: company.country,
        founding_date: company.founding_date,
        description: company.description,
      })),
    },
    revalidate: 1,
  };
};

export default Home;
