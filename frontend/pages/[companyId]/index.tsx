import Head from 'next/head';
import { Fragment } from 'react';

import CompanyEdit from '../../components/companies/CompanyEdit';

import { CompanyType } from '../../types/types';

const NewCompanyPage = () => {
  // eslint-disable-next-line
  const editCompanyHandler = async (enteredCompanyData: CompanyType) => {
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify(enteredCompanyData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await response.json();
  };
  return (
    <Fragment>
      <Head>
        <title>Edit Company</title>
        <meta name='description' content='Edit your new Company' />
      </Head>
      <CompanyEdit onEditCompany={editCompanyHandler} />
    </Fragment>
  );
};

export default NewCompanyPage;