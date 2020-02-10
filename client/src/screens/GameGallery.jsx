import React from 'react'
import Card from './Card/Card'
import { apiMock } from '../api/apiMock'
import { getGameData } from '../api/apiCalls'

class GameGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gameData: props.gameData,
      // setToDelete: false,
      itemToDeleteId: '',
      itemToDeleteName: ''
    }
  }

  openDeleteMenu = (gameId, name) => {
    this.setState({
      itemToDeleteName: name,
      itemToDeleteId: gameId
    })
  }

  closeDeleteMenu = () => {
    this.setState({
      itemToDelete: '',
      itemToDeleteId: ''
    })
  }

  handleDelete = () => {
    apiMock.delete(`/games/${this.state.itemToDeleteId}`).then(() => {
      this.setState({
        itemToDeleteId: '',
        itemToDeleteName: ''
      })
    }).catch(error => console.error(error))

  }

  fetchGameData = async () => {
    let data = await getGameData()
    this.setState({
      gameData: data
    })
  }

  checkUpdate = async () => {
    let data = await getGameData()
    if (data.length !== this.state.gameData.length) {
      this.setState({
        gameData: data
      })
    }
  }

  componentDidMount() {
    this.fetchGameData()
  }

  renderGameCards = () => {
    this.checkUpdate()
    if (this.state.gameData.length) {
      return this.state.gameData.map((game, index) => (
        //delete gameID if not being used later @@@@@@@@@@@@@@@@@
        <Card key={index} game={game} openDeleteMenuParent={this.openDeleteMenu} closeDeleteMenuParent={this.closeDeleteMenu} handleDeleteParent={this.handleDelete} />
      ))
    }
  }

  render() {
    return (
      <div className='gallery-container'>
        {this.renderGameCards()}
      </div>
    )
  }
}

export default GameGallery