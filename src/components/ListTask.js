import React, { useEffect } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getTask } from '../store/task/taskAction'


export default function ListTask() {
    const dispatch = useDispatch()

    const taskListSelector = useSelector((state) => state.task.taskList)

    useEffect(() => {
        dispatch(getTask())
    }, [])
    return (
        <Container>
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
