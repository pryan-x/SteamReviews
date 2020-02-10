import { apiMock } from './apiMock'


export const getGameData = async () => {
	try {
		const resp = await apiMock.get('/games')
		return resp.data
	} catch (error) {
		throw error
	}
}

export const PostGameData = async (data) => {
	try {
		const resp = await apiMock.post(`/games, {appid: ${data}}`)
		return resp
	} catch (error) {
		throw error
	}
}

export const getSingleGameData = async (gameId) => {
	try {
		const resp = await apiMock.get(`/games/${gameId}`)
		return resp.data
	} catch (error) {
		throw error
	}
}

