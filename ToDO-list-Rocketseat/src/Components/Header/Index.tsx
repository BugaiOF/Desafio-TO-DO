import todoLogo  from '../../assets/Logo.svg'

import styles from './Header.module.css'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={todoLogo}/>


            <form className={styles.newTaskForm}>
                <input placeholder='Adicione uma nova tarefa' />
                <button>Criar</button>
            </form>
        </header>
    )
}