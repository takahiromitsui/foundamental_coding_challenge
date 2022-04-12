import Navigation from './Navigation';
import styles from './Layout.module.css';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = (props: LayoutProps) => (
  <div>
    <Navigation />
    <main className={styles.main}>{props.children}</main>
  </div>
);
export default Layout;
