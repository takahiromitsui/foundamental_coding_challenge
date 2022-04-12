import CompanyItem from './CompanyItem';

import { CompanyType } from '../../types/types';

import styles from './CompanyList.module.css';

type CompanyListProps = {
  companies: CompanyType[];
};

const CompanyList = (props: CompanyListProps) => (
  <ul className={styles.list}>
    {props.companies.map((company) => (
      <CompanyItem
        key={company.id}
        id={company.id}
        name={company.name}
        country={company.country}
        description={company.description}
        founding_date={company.founding_date}
      />
    ))}
  </ul>
);
export default CompanyList;
