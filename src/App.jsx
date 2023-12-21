import './global.css'
import { Header } from './Components/Header'
import styles from './Components/App.module.css'
import Sidebar from './Components/Sidebar.jsx'

export function App() {
  return (
    <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
          <p>Teste onde deveria ter post</p>
          </main>
        </div>
    </div>
  )
}
