import React from 'react'
import Sidebar from '../../components/Sidebar'

function Main(props) {
    return (
        <div>
            <Sidebar children={props.children} />
        </div>
    )
}

export default Main
