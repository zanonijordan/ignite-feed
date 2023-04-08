import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';



export const Post = ({ author, content, publishedAt}) =>{

    console.log();
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      });
    const publishDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarURL} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p><a href=''>{line.content}</a></p>
                    }
                    
                })}
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