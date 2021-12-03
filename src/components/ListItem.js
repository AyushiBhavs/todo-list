import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Draggable } from 'react-beautiful-dnd';

export default function ListItem(props) {

  return (
    <>
      <Draggable draggableId={props.userName}>{(provided) => (
        <ListGroup.Item as="li"ywaa
          className="d-flex justify-content-between"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          {props.userName}
          <span onClick={() => props.removeItem(props.userName)}>x</span>
        </ListGroup.Item>)}
      </Draggable>
    </>
  )
}
