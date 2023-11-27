import { Header } from './components/Header.tsx'
import { Input } from './components/Input.tsx';
import { Button } from './components/Button.tsx';

import './Global.module.css'

import styles from './App.module.css';



export function App(){
  return (
    <div>
      <Header/>
      <div className={styles.InputBox}>
      <Input/>
      <Button/>
      </div>
    </div>
  )
}