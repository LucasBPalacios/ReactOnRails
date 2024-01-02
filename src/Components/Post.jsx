import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/LucasBPalacios.png" />
                    <div className={styles.authorInfo}>
                        <strong>Ana Laura</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="12 de dezembro de 2023" dateTime="2023-12-28 20:00:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera!</p>
                <p>To fazendo curso de react</p>
                <p>I need coffee</p>
                <p><a href="https://github.com/LucasBPalacios/ReactOnRails">Meu github</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong Deixe seu feedback />
                <textarea placeholder='Deixe um comentário' />
                <footer><button type='submit'>Comentar</button></footer>
            </form>
        </article>
    )
}
