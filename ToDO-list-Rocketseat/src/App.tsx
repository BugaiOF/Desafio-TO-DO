import { Header } from './components/Header.tsx'
import { Task } from './components/Task.tsx';

import './Global.module.css'

import styles from './App.module.css';




export function App(){
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
          <main>
            <Task/>
          </main>
        </div>
      </div>
  )
}