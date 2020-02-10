import Axios from 'axios'
const BASE_URL = `https://store.steampowered.com/api/appdetails?appids=`

export const apiGame = Axios.create({
	baseURL: BASE_URL
})
