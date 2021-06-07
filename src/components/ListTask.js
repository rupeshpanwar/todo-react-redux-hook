import React, { useEffect } from 'react'
import { Col, Container, Row, Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTask } from '../store/task/taskAction'


export default function ListTask() {
    const dispatch = useDispatch()

    const taskListSelector = useSelector((state) => state.task.taskList)

    const getTaskLoadingSelector = useSelector((state) => state.task.loading)

    useEffect(() => {
        dispatch(getTask())
    }, [])
    return (
        <Container>
            {getTaskLoadingSelector && <Spinner animation="border" className="page-loading" />}
            <Row className='justify-content-center mt-5'>
                <Col>
                    <ul className="list-group">
                        {taskListSelector.map(task =>
                        (
                            <li className="list-group-item d-flex justify-content-between" key={task.id}>
                                {task.title}
                                <Button size="sm" variant="outline-danger">
                                    <i className="fas fa-trash"></i>
                                </Button>
                            </li>
                        )
                        )}
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
