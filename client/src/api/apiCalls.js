import { apiMock } from './apiMock'
import { apiStore } from './apiSteamStore'
// import { apiGame } from './apiSteamGame'
import { apiSpy } from './apiSpy'


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

export const getSingleGameSpy = async (gameId) => {
	try {
		const resp = await apiSpy.get(`${gameId}`)
		return resp.data
	} catch (error) {
		throw error
	}
}


export const getAllSteamData = async () => {
	try {
		const resp = await apiStore.get('')
		return resp.data
	} catch (error) {
		throw error
	}
}