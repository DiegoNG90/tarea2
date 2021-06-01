import styled from 'styled-components';
import {Button} from "react-bootstrap"
// TaskList
export const TaskItem = styled.div`
    border: 2px solid black;
    border-radius: 15px;
    padding: 5px;
    cursor: pointer;
    margin-bottom: 10px;
`
export const Box = styled.div`
    display: flex;
    flex: row wrap;
    ${(props) => props.width && `width: ${props.width}`};
    ${(props) => props.justify && `justify-content: ${props.justify}`};
`
export const TaskText = styled.p`
    margin-left: 5px;
    width: 100%;
`
export const TaskButton = styled(Button)`
    margin-right: 2px;
    max-height: 3rem;
`