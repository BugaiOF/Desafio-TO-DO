
import styles from './Task.module.css'

export function TaskTable (){
    return(
        <div className={styles.tasks}>
            <div className={styles.tasksHeader}>
                <div className={styles.created}>Tarefas Criadas
                </div>
                <div className={styles.doneTasks}> Concluidas</div>
            </div>
            <div>
                
            </div>
        </div>
    )
}