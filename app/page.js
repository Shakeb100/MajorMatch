import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Major Match</h1>
      <nav>
        <Link href="/login">Login</Link> | 
        <Link href="/Register">Register</Link>
      </nav>
    </div>
  );
}
