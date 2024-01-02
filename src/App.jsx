import './global.css'
import { Header } from './Components/Header'
import styles from './Components/App.module.css'
import Sidebar from './Components/Sidebar.jsx'
import { Post } from './Components/Post.jsx'

export function App() {
  return (
    <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
          <Post/>
          <Post/>
          </main>
        </div>
    </div>
  )
}
