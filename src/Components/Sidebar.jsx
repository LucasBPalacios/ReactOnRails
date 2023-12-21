import styles from '../Components/Sidebar.module.css'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1460036521480-ff49c08c2781?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <div className={styles.profile}>
                <strong>Palácios</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar perfil
                </a>
            </footer>
        </aside>
    )
}