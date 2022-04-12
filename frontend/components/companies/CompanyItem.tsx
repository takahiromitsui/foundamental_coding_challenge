import { useRouter } from 'next/router';

import Card from '../UI/Card';

import styles from './CompanyItem.module.css';

import { CompanyType } from '../../types/types';

const CompanyItem = (props: CompanyType) => {
  const router = useRouter();
  const showEditHandler = () => {
    router.push('/' + props.id);
  };
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.content}>
          <h2>{props.name}</h2>
          <address>{props.country}</address>
          <h3>{props.description}</h3>
          <h3>{props.founding_date}</h3>
        </div>
        <div className={styles.actions}>
          <button onClick={() => showEditHandler()}>Edit</button>
        </div>
      </Card>
    </li>
  );
};

export default CompanyItem;
