import React from 'react';
import PropTypes from 'prop-types';
import {TaskButton, TaskText, Box, TaskItem} from '../layout/styledComponents'

const TaskList = ({task, cantidad}) => {
    
    return ( 
        <>
        {task.map(t => {
        return (
            //Se puede meter en un componente nuevo?
            <TaskItem key={t.id}>
                <Box justify="center" width="100%">
                    <h2 style={{fontSize: "2rem"}}>{t.title}</h2>
                </Box>
                <Box justify="space-around" width="100%">
                    <TaskText >{t.description}</TaskText>
                    <Box justify="flex-end" width="30%">
                        <TaskButton variant="success">✅</TaskButton>
                        <TaskButton variant="danger" >❌</TaskButton> {/* onClick={()=> deleteTask(t.id)} */}
                    </Box>
                </Box>
            </TaskItem>
        )
        })}
        </>
    );
}

TaskList.propTypes = {
    createTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    cantidad: PropTypes.number
}
 

export default TaskList;