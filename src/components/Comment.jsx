import { AlignCenterHorizontalSimple, ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
    <div className={styles.comment}>
        <img src='https://avatars.githubusercontent.com/u/52969396?v=4' alt='' />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Jordan Zanoni</strong>
                        <time title='04 de maio as 17:25h' dateTime='2023-05-04 17:25h'>Cerca de 1h atras</time>
                    </div>
                    <button title='delete comment'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div> );
}