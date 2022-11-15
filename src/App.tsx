import { Header } from './components/Header/Header';
import { PlusCircle } from 'phosphor-react';
import styles from './App.module.css';
import './styles/global.css';

import ClipboardImg from './assets/Clipboard.svg';
import { TaskListItem } from './components/TaskListItem/TaskListItem';


function App() {
  const taskListEmpty = false;

  return (
   <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.addTask}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>

        <div className={styles.taskList}>
          <div className={styles.taskListHeader}>
            <div className={styles.taskListHeaderCreated}>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div className={styles.taskListHeaderCompleted}>
              <p>Tarefas concluídas</p>
              <span>0</span>
            </div>
          </div>

          <div className={styles.taskListItems}>
            {taskListEmpty ? (
              <>
                <img src={ClipboardImg} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </>
            ) : (
              <>
                <TaskListItem />
              </>
            )}
          </div>
        </div>
      </div>
   </div>
  )
}

export default App
