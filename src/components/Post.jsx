import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/gabrielcsg.png"
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Castro</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          placeat ratione tempore dignissimos quibusdam officiis eligendi
          incidunt facilis nulla harum qui repellat ullam architecto accusantium
          est, in exercitationem unde doloribus.
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
