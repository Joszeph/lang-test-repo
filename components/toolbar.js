import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';
import LangSwitch from '../components/LangSwitch'

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <LangSwitch />
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => window.location.href = 'https://twitter.com/portexe'}>Twitter</div>
      <div onClick={() => window.location.href = 'https://github.com/portexe'}>GitHub</div>
    </div>
  );
};
