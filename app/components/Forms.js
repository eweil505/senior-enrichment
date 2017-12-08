
import React from 'react'

export const Input = (props) => {
    const {handleChange, value} = props;
    return <input type="text" value={value} onChange={handleChange} />
}

