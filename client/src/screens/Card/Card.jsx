import React from 'react'
import { NavLink } from 'react-router-dom'


class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkDelete: false,
            itemToDeleteName: props.game.name,
        }
    }

    openDeleteMenu = () => {
        this.setState({
            checkDelete: true,
        })
    }

    startDelete = () => {
        this.props.openDeleteMenuParent(this.props.game.id, this.props.game.name)
        this.openDeleteMenu()
    }

    closeDeleteMenu = () => {
        this.setState({
            checkDelete: false,
        })
    }

    handleBothDeletes = () => {
        this.props.handleDeleteParent()
        this.closeDeleteMenu()
    }

    handleClose = () => {
        this.props.closeDeleteMenuParent()
        this.closeDeleteMenu()
    }

    renderDeleteMenu = () => {
        if(this.state.checkDelete === false) {
            return <button className='delete-prompt-button' onClick={this.startDelete}>x</button>
    }
        if (this.state.checkDelete) {
            return (
                <div className='delete-menu'>
                    <h3 className='delete-prompt'>Are you sure you would like to delete {this.props.game.name}?</h3>
                    <div className='buttons'>
                        <button className='confirm buttonCheck' onClick={this.handleBothDeletes}>Yes</button>
                        <button className='reject buttonCheck' onClick={this.handleClose}>No</button>
                    </div>
                </div>
            )
        } else {
            return this.renderGameCards
        }
    }


    render() {
        return (
                // <div>{console.log(props.game.id)}</div>
                <div className='card-container'>
                    <div className='card-wrapper'>
                    <NavLink activeClassName='active' to={`/screens/GamePage/${this.props.game.id}/${this.props.game.appid}`} >
                            <img className='card-img' src={`https://steamcdn-a.akamaihd.net/steam/apps/${this.props.game.appid}/header.jpg?t=1573485591`} alt={`img ${this.props.game.appid}`} />
                        <div className='title-container'>
                            <p className='title'>{this.props.game.name}</p>
                        </div>
                    </NavLink>
                    <div className='showPromptButton'>
                        {this.renderDeleteMenu()}
                    </div>
                    </div>
                </div>
        )
    }
}

export default Card