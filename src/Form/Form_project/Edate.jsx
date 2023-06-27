import React from 'react'

const Edate = (props) => {
    const month = props.Date.toLocaleString('en-US', { month: 'long' });
    const year = props.Date.getFullYear();
    const day = props.Date.toLocaleString('en-US', { day: '2-digit' });
    return (
        <>
            <td>{day}-{month}-{year}</td>
        </>

    )
}

export default Edate
