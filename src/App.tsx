import { IPost, Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrielcsg.png',
      name: 'Gabriel Castro',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      {
        type: 'paragraph',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, placeat atione tempore dignissimos quibusdam officiis eligendi incidunt facilis nulla harum qui repellat ullam architecto accusantium  est, in xercitatio unde doloribus.',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-06-25 00:08:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Bryto',
      role: 'Educador @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      {
        type: 'paragraph',
        content:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, placeat atione tempore dignissimos quibusdam officiis eligendi incidunt facilis nulla harum qui repellat ullam architecto accusantium  est, in xercitatio unde doloribus.',
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-06-26 00:08:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
