import styles from './Task.module.css'
import  Clipboard  from '../assets/Clipboard.svg'
import  Plus  from '../assets/Plus.svg'

export function Task (){
    return(
        <article>
            <div className={styles.content}>
                <header>
                    <form 
                   /*  onSubmit={handleCreateNewTask}  */
                    className={styles.form}>
                    <textarea 
                    name="task"
                    placeholder='Adicione uma nova tarefa'
                    required
                   />
                   <button type='submit'>
                    Criar
                    <img src={Plus} alt="" />
                   </button>
                    </form>
                </header>

                <main>
                    <article>
                        <div className={styles.headerTask}>
                            <p>tarefas criadas <span>0</span></p>
                            <p>Concluido <span>0</span></p>
                        </div>
                    </article>

                    <div className={styles.noTask}>
                        <img src={Clipboard} />
                        <p>Você ainda não tem tarefa registradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </main>
            </div>
        </article>
    )
}