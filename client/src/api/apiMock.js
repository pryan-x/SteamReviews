import Axios from 'axios'
const BASE_URL = `https://5dced5a475f9360014c2643f.mockapi.io/`

export const apiMock = Axios.create({
	baseURL: BASE_URL
})
