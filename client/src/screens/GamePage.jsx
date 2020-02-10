import React from 'react'
import Axios from 'axios'
import { spaceArr, listKeys, makeImgArr, checkSale, setPrice } from './Utility/Methods'
// import { NavLink } from 'react-router-dom'
// import { getSingleGameSpy } from '../api/apiCalls'



class GamePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            game: {},
            spyData: {},
            price: ''
        }
    }

    fetchGameValues = async (appid) => {
        let data
        try {
            data = await Axios.get(`https://fathomless-shelf-02833.herokuapp.com/api/game/${appid}`)
        } catch (error) {
            throw error
        }

        let spy
        try {
            spy = await Axios.get(`https://fathomless-shelf-02833.herokuapp.com/api/gamespy/${appid}`)
        } catch (error) {
            throw error
        }

        this.setState({
            game: data.data[appid].data,
            spyData: spy.data,
            price: setPrice(spy.data.price, data.data[appid].data.is_free),
            date: data.data[appid].data.release_date.date
        })
    }

    componentDidMount() {
        this.fetchGameValues(this.props.match.params.appid)
    }

    render() {
        const { game, spyData, price, date } = this.state
        // console.log(game.price_overview)
        //  style={{backgroundImage: `url(${game.background})`, width: '100%', height: '100%'}}
        return (
            <div style={{ backgroundImage: `url(${game.background})`, width: '100%', height: '100%' }}>
                <div className='page-container'>
                    <div className='wrapper'>
                        <div className='title-wrapper'>
                            <div className='title-img-container'>
                                <h1 className='game-page title'>{game.name}</h1>
                                <div className='img-wrapper'>
                                    <img className='page-img' src={game.header_image} alt='img' />
                                </div>
                            </div>
                        </div>
                        <section className='game-info-container'>
                            <div className='game-info'>
                                <div className='details-container'>
                                    <p className='game-details'>Developed by:</p>
                                    <div className='game-details child'>
                                        <div className='detail-arr'>
                                            {spaceArr(game.developers)}
                                        </div>
                                    </div>
                                </div>
                                <div className='details-container'>
                                    <p className='game-details'>Published by: </p>
                                    <div className='game-details child'>
                                        <div className='detail-arr'>
                                            {spaceArr(game.publishers)}
                                        </div>
                                    </div>
                                </div>
                                <div className='details-container'>
                                    <p className='game-details'>Release Date: </p>
                                    <p className='game-details child'>
                                        {date}
                                    </p>
                                </div>
                                <div className='details-container'>
                                    <p className='game-details'>Price: </p>
                                    <p className='game-details child'>
                                        {price}
                                    </p>
                                </div>
                                <p className='game-details'>
                                    {checkSale(game.price_overview)}
                                </p>

                            </div>
                        </section>
                        <div className='tags'>
                            <h2>Descriptive Tags:</h2>
                            <div className='tags-wrapper'>
                            <div className='tag-container'>
                                {listKeys(spyData.tags, 10, 0)}
                            </div>
                            <div className='tag-container'>
                                {listKeys(spyData.tags, 20, 10)}
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='link-container'><a className='steam-link' href={`https://store.steampowered.com/app/${this.props.match.params.appid}`}>Click here to buy or visit the steam page!</a></div>
                    
                    {/* <NavLink>
                        <button>Write a Review!!</button>
                    </NavLink> */}
                    <article className='game-about-container'>
                        <div className='about-wrapper'>
                            <p className='about'>ABOUT:</p>
                        </div>
                
                        <p className='game-about'  dangerouslySetInnerHTML={{ __html: game.about_the_game }} />
                    </article>
                    <div className='screenshots'>
                        {makeImgArr(game.screenshots)}
                    </div>
                </div>
            </div>
        )
    }
}

export default GamePage