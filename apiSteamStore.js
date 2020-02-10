import Axios from 'axios'
const BASE_URL = `https://api.steampowered.com/ISteamApps/GetAppList/v2?applist`

export const apiStore = Axios.create({
	baseURL: BASE_URL
})
