import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author={'Gabriel Castro'} content={'testee'} />
          <Post author={'Gabriel Castro'} content={'testee'} />
        </main>
      </div>
    </div>
  );
}
