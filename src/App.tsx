import { Header } from './components/Header/Header';
import { PlusCircle } from 'phosphor-react';
import styles from './App.module.css';
import './styles/global.css';

import ClipboardImg from './assets/Clipboard.svg';
import { TaskListItem } from './components/TaskListItem/TaskListItem';
import { ChangeEvent, useState } from 'react';


interface ITask {
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskValue, setNewTaskValue] = useState('');

  const isTaskListEmpty = tasks?.length > 0;
  const tasksAmount = tasks.length;
  const completedTasksAmount = tasks.filter(task => task.completed).length;

  function handleNewTaskValueChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskValue(event.target.value);
  }

  function handleAddNewTask() {
    setTasks([...tasks, {title: newTaskValue, completed: false}]);
    setNewTaskValue('')
  }

  function handleChangeTaskStatus(taskTitle: string) {
    const newTasksArray = tasks.map(task => {
      if (taskTitle === task.title) {
        return { title: task.title, completed: !task.completed }
      }

      return task;
    })

    setTasks(newTasksArray)
  }

  function handleDeleteTask(taskTitle: string) {
    const newTasksArray = tasks.filter(task => {
      if (taskTitle !== task.title) {
        return true
      }

      return false;
    })

    setTasks(newTasksArray)
  }
  

  return (
   <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.addTask}>
          <input 
            type="text" 
            placeholder="Adicione uma nova tarefa"  
            value={newTaskValue}
            onChange={handleNewTaskValueChange}
          />
          <button onClick={handleAddNewTask}>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>

        <div className={styles.taskList}>
          <div className={styles.taskListHeader}>
            <div className={styles.taskListHeaderCreated}>
              <p>Tarefas criadas</p>
              <span>{tasksAmount}</span>
            </div>
            <div className={styles.taskListHeaderCompleted}>
              <p>Tarefas concluídas</p>
              <span>{`${completedTasksAmount} de ${tasksAmount}`}</span>
            </div>
          </div>

          <div className={styles.taskListItems}>
            {!isTaskListEmpty ? (
              <>
                <img src={ClipboardImg} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </>
            ) : (
              <>
                {tasks && tasks.map((task, index) => {
                  return (
                    <TaskListItem 
                      key={index} 
                      title={task.title} 
                      completed={task.completed} 
                      handleChangeTaskStatus={handleChangeTaskStatus}
                      handleDeleteTask={handleDeleteTask}
                    />
                  )
                })}
              </>
            )}
          </div>
        </div>
      </div>
   </div>
  )
}

export default App
