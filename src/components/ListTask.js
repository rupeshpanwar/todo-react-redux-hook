import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getTask } from '../store/task/taskAction'

export default function ListTask() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTask())
    }, [])
    return (
        <div>

        </div>
    )
}
