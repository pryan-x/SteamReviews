import React from 'react'
import Match from './Match'
import axios from 'axios'
import { apiMock } from '../api/apiMock'


class AddGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            steamData: {}
        }
    }

    fetchSteamValues = async () => {
        let data = await axios.get('https://fathomless-shelf-02833.herokuapp.com/api/applist')
        const dataJustGames = await axios.get('https://fathomless-shelf-02833.herokuapp.com/api/applistspy')
        console.log(data)
        console.log(dataJustGames)
        const justGames = []
        data.data.applist.apps.map(app => {
            if (dataJustGames[app.appid]) {
                return app
            }
        });
        console.log(justGames)
        // this.setState({
        //     steamData: data.applist.apps
        // })
    }

    handleChange = (event) => {
        let value = event.target.value
        this.setState({
            value: value.toLowerCase().replace(/\W/g, '')
        })
    }

    handleClick = async (appid, name) => {
        apiMock.post('/games', { appid: appid, name: name }
        ).catch(() => {
            this.setState({ errorMsg: 'there was an error!' })
        })
        let path = '/'
        this.props.history.push(path)
        // PostGameData(appid)

        // export const PostGameData = async (data) => {
        //     try {
        //         console.log(data)
        //         const resp = await apiMock.post(`/games, {appid: ${data}}`)
        //         return resp
        //     } catch (error) {
        //         throw error
        //     }
        // }
    }

    renderDropDown = (steamData, input) => {
        if (steamData.length === undefined) return
        if (input.length > 4) {
            let filterArr = steamData.filter((game) => {
                if (game.name.toLowerCase().replace(/\W/g, '').includes(this.state.value)) return true
            })
            if (filterArr.length) {
                if (filterArr.length < 500) {
                    return filterArr.map((match, index) => <Match key={index} match={match} onClick={() => (this.handleClick(match.appid, match.name))} />)
                }
            }
        }
    }

    componentDidMount() {
        this.fetchSteamValues()
    }

    render() {
        return (
            <div className='addGame-container'>
                <input className='addGame=input' type='text' placeholder='Game Title' onChange={this.handleChange} />
                <div className='searchResult-container'>{this.renderDropDown(this.state.steamData, this.state.value)}</div>
            </div>
        )
    }
}

export default AddGame