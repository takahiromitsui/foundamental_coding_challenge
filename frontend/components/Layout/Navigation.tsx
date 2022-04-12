import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Foundamental</div>
    <nav>
      <ul>
        <li>
          <Link href='/'>Companies</Link>
        </li>
        <li>
          <Link href='/deals'>Deals</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
