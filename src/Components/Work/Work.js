import React,{useState} from 'react';
import './Work.css';
import shortId from 'short-id';

import Counter from '../Counter';
import TaskList from '../TaskList'; 
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Work = () => {
    /*STATE*/
        //Array de tareas
        // Esquema de la task: Obj {id: string, title: string, description: string}
        const [task, setTask] = useState([]);
        //Toggle para mostrar el form
        const [showForm, setShowForm] = useState(true);
        // const [counter, setCounter] = useState(0);

    /* HANDLERS */

        // const addTask = (task) => {
            // setTask([...task, task])
        //}
        // const delteTask = (task) => {
            //
        //}

        // const deleteTask = (id) => {
        //     setTask(task.id === id && task.filter(item => item.id !== id));   
        // }

        const createTask = (e) => {
            //e → referencia del formulario que disparó el evento
            e.preventDefault();
            // console.log(e.target.elements[0].value)
            let [title, description] = e.target.elements;
            title = title.value.trim();
            description =  description.value.trim();
            setTask(
                [...task,
                {id: shortId.generate(), title, description}])

            //Para limpiar los imputs luego de ccargar las tareas:
            e.target.reset()
            console.log(task);

        }
        // const handleCounter = () => { 
        //     setCounter(task.length)
        // }

        const handleToggleForm = () => {
            setShowForm(!showForm);

        }
    return (
        <Container>
            <Row className="justify-content-center">
                <Button id="btn-toggle" style={{width: "55%", margin: "3rem 0rem"}} size="lg" type="button" variant={showForm? "danger":"success"} onClick={handleToggleForm}>{showForm? "Ocultar formulario": "Ver Formulario"}</Button>
                {showForm && (
                <Col md={6} xs={12} lg={6} xl={6}>
                    <h3>Tasks</h3>
                    <Form onSubmit={createTask}>
                        <Form.Group>
                            <Form.Label>Titulo de la tarea</Form.Label>
                            <Form.Control 
                            placeholder="Tarea"
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Descripcion de la tarea</Form.Label>
                            <Form.Control
                            rows={4}
                            as="textarea" placeholder="Descripcion de la tarea"></Form.Control>
                        </Form.Group>
                        <Button className="m-4" type="submit" variant="success"> Crear tarea</Button>
                    </Form>
                </Col> )}
                <Col md={6} xs={12} lg={6} xl={6}>
                    <Counter cantidad={task.length}/>
                    <TaskList task={task}  cantidad={task.length}/> { /*deleteTask={deleteTask} */ }
                </Col>
            </Row>
        </Container>
    )
}



export default Work;
