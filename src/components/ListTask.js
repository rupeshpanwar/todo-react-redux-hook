import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTask, deleteTask } from '../store/task/taskAction'


export default function ListTask() {
    const dispatch = useDispatch()

    const [deleteTaskId, setDeleteTaskId] = useState(null)

    const taskListSelector = useSelector((state) => state.task.taskList)

    const getTaskLoadingSelector = useSelector((state) => state.task.loading)

    const loading = useSelector((state) => state.task.loading)

    useEffect(() => {
        dispatch(getTask())
    }, [])

    const removeTaskHandler = (task) => {
        setDeleteTaskId(task.id)
        dispatch(
            deleteTask(task.id)
        )
    }

    return (
        <Container>
            {!getTaskLoadingSelector && taskListSelector.length === 0 && <h1>Task List is empty</h1>}
            {getTaskLoadingSelector && <Spinner animation="border" className="page-loading" />}
            <Row className='justify-content-center mt-5'>
                <Col>
                    <ul className="list-group">
                        {taskListSelector.map(task =>
                        (
                            <li className={`${task.isCompleted ? 'task-completed' : 'task-pending'} list-group-item d-flex justify-content-between align-item-center`} key={task.id} >
                                {task.title}
                                <Button Button size="sm" variant="outline-danger"
                                    onClick={() => removeTaskHandler(task)}>
                                    <i className="fas fa-trash"></i>
                                    {loading && (task.id === deleteTaskId) && <Spinner animation="border" size="sm" />}
                                </Button>
                            </li>
                        )
                        )}
                    </ul>
                </Col>
            </Row >
        </Container >
    )
}
