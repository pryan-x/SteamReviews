import Axios from 'axios'
const BASE_URL = `https://steamspy.com/api.php?request=appdetails&appid=`

export const apiSpy = Axios.create({
	baseURL: BASE_URL
})
