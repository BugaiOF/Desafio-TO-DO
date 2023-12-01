import styles from './Task.module.css'

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

                    <div className={styles.tasks}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, amet! Ipsam quidem voluptas repellat deleniti fuga inventore error incidunt ullam a officia, praesentium commodi molestias eius quasi! Quod, dignissimos neque!</p>
                    </div>
                </main>
            </div>
        </article>
    )
}