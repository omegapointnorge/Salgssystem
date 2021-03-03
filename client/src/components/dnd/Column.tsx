import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'
import { styled } from 'src/stiches.config'
import Status from '../../constants/Status'


interface ColumnProps {
  col: {
    id: string
    list: any[],
  },
  slettCase: (kolonneId: Status, kortId:string) => void
}

const StyledColumn = styled('div', {
  padding: '24px 16px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: 8,

  h2: {
    margin: 0,
    padding: '0 16px'
  }
})

const StyledList = styled('div', {
  backgroundColor: '#ddd',
  borderRadius: 8,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  marginTop: 8
})

const Column: React.FC<ColumnProps> = ({ col: { list, id }, slettCase }) => {
  return (
    <Droppable droppableId={id}>
      {provided => (
        <StyledColumn>
          <h2>{id}</h2>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((caseObject, index) => (
              <Item key={caseObject.ID} caseObject={caseObject} index={index}  slettCase={slettCase}/>
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  )
}

export default Column
