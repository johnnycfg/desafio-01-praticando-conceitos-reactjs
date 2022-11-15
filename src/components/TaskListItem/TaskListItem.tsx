import * as Checkbox from '@radix-ui/react-checkbox';

import { Trash } from "phosphor-react";

import styles from "./TaskListItem.module.css";

interface ITask {
  title: string;
  completed: boolean;
  handleChangeTaskStatus: (title: string) => void;
  handleDeleteTask: (title: string) => void;
}

export function TaskListItem({ title, completed, handleChangeTaskStatus, handleDeleteTask }: ITask) {
  return (
    <div className={styles.wrapper}>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={() => handleChangeTaskStatus(title)} 
      />
      <p>{title}</p>
      <button onClick={() => handleDeleteTask(title)}>
        <Trash size="24" />
      </button>
    </div>
  )
}