import React from 'react'
import GameGallery from './screens/GameGallery'
import GamePage from './screens/GamePage'
import AddGame from './screens/AddGame'
import { Route, NavLink, Switch } from 'react-router-dom'
// import { getAllSteamData, getGameData } from './api/apiCalls'
import { getGameData } from './api/apiCalls'
import './GameApp.css'
import './screens/GameGallery.css'
import './screens/GamePage.css'
import './screens/AddGame.css'
import './screens/Card/Card.css'
import './screens/Match.css'
import './screens/hover.css'

class GameApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameData: {},
        }
    }

    fetchGameData = async () => {
        let data = await getGameData()
        this.setState({
          gameData: data
        })
      }
    
    componentDidMount() {
        this.fetchGameData()

    }

    render() {
        return (
            <div>
                <header>
                    <nav className= 'row-container'>
                        <NavLink className='navbar-link NavLink' activeClassName='active' to='/'>Home</NavLink>
                        <div className='row-container logo-container'>
                                <img className='logo-img' alt='steam-logo' src={require('./resources/steam3.svg')} />
                                <h1 className='logo-text'>STEAM REVIEWS</h1>
                        </div>
                        <NavLink className='navbar-link NavLink' activeClassName='active' to='/screens/AddGame'>Add Game</NavLink>
                        {/* <NavLink activeClassName='active' to='/GamePost'>Post a Game</NavLink>
                        <NavLink activeClassName='active' to='/Contact'>Contact us</NavLink> */}
                    </nav>
                </header>

                <main>
                    <Switch>
                        {/* <Route exact path='/' component={<Home/>} /> */}
                        <Route exact path="/" component={props => <GameGallery{...props} gameData={this.state.gameData}/>}/>
                        <Route exact path="/screens/AddGame" component={
                            // props => <
                            AddGame
                            // {...props} steamData={this.state.steamData}/>
                            }/>
                        {/* <Route exact path="/GameGallery" component={props => <GameGallery{...props}/>}/> */}

                        <Route exact path={`/screens/GamePage/:gameid/:appid`} component={GamePage}/>
                        {/* <Route exact path="/TopNews" component={props => <NewsPoster{...props} newsType={this.state.topNews}/>}/>  */}
                    </Switch>
                </main>
            </div>
        )
    }
}

export default GameApp