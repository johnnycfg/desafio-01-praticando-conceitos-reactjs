import * as Checkbox from '@radix-ui/react-checkbox';

import { Trash } from "phosphor-react";

import styles from "./TaskListItem.module.css";

export function TaskListItem() {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <Trash size="24" />
      </button>
    </div>
  )
}