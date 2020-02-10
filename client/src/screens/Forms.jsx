import React from 'react'

const Forms = () => {
    return(
        <form onSubmit={ this.handleSubmit }>
            <input type='text' placeholder='Game Title' onSubmit={ this.handleSubmit } onChange={ props.onChange }/>
            <input type="submit" value="Post"></input>
        </form>
    )
}