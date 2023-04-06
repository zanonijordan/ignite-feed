import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export const Post = () =>{
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src='https://avatars.githubusercontent.com/u/52969396?v=4' />
                    <div className={styles.authorInfo}>
                        <strong>Jordan Zanoni</strong>
                        <span>Web Develober</span>
                    </div>
                </div>
                <time title='04 de maio as 17:25h' dateTime='2023-05-04 17:25h'>Publicado ha 1h</time>
            </header>
            <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href=''>jane.design/doctorcare</a></p>

            <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>
                <textarea placeholder='Deixe um comentario'/>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )

}