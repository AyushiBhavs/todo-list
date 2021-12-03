import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import ListItem from './ListItem'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


export default function ListCard() {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])

  const AddItem = () => {
    if (!inputValue) {
      alert("please enter your Name")
    }
    else {
      setItems([...items, inputValue])
      setInputValue("")
    }

  }

  const removeItem = (itemDeleted) => {
    setItems(items.filter((inputValue) => itemDeleted !== inputValue));
    //console.log(inputValue)
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = removeItem(
      items.inputValue,
      result.source.index,
      result.destination.index
    );

    setItems({ quotes });
    console.log(quotes,"ayushi")
  }



  return (
    <>

      <Card>
        <Card.Body>
          <Card.Title className="text-center mt-3">Todo List</Card.Title>
          <Form className="d-flex justify-content-md-center mr-3">
            <Form.Group>
              <Form.Label><b>Add Todo</b></Form.Label>
              <Form.Control
                type="text"
                className="input"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Add Name" />
            </Form.Group>
            <Button variant="primary" onClick={AddItem}>
              Add
            </Button>
          </Form>


          <DragDropContext>
            <Droppable droppableId="ListGroup">{(provided) =>
            (<ListGroup as="ul"
              className="mt-3" ref={provided.innerRef}
              {...provided.droppableProps}>
              {items.map((ele, ind) => {
                return <ListItem userName={ele} id={ind} removeItem={removeItem} />
              })}
              {provided.placeholder}
            </ListGroup>)}
            </Droppable>
          </DragDropContext>




        </Card.Body>
      </Card>

    </>
  )
}
