import React from 'react'
import Item from '../Item/Item'
import { Droppable } from 'react-beautiful-dnd'
import Status from '../../../constants/Status'
import styles from "./Column.module.css";

interface ColumnProps {
  col: {
    id: string
    list: any[],
  },
  slettCase: (kolonneId: Status, kortId:string) => void
}

const Column: React.FC<ColumnProps> = ({ col: { list, id }, slettCase }) => {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <div className={styles.kolonne}>
          <h2 className={styles.header}>{id}</h2>
          <div className={styles.content} {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((caseObject, index) => (
              <Item key={caseObject.ID} caseObject={caseObject} index={index}  slettCase={slettCase}/>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default Column
