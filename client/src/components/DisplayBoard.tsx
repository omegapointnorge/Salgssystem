import React from 'react'

type Props = {numberOfUsers: number, getAllUsers: any}

export const DisplayBoard = ({numberOfUsers, getAllUsers}: Props) => {
    
    return(
        <div className="display-board">
            <h4>Users Created</h4>
            <div className="number">
            {numberOfUsers}
            </div>
            <div className="btn">
                <button type="button" className="btn btn-warning">Get all Users</button>
            </div>
        </div>
    )
}