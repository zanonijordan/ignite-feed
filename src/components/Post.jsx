import { Comment } from './Comment';
import styles from './Post.module.css';

export const Post = () =>{
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' />
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