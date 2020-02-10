const axios = require('axios');

const getSingleGameSpy = async (req, res) => {
	console.log(`this is `, req)
	try {
		const appid = req.params.id
		const resp = await axios.get(`https://steamspy.com/api.php?request=appdetails&appid=${appid}`)
		console.log(resp.data)
		res.json(resp.data);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

const getAllSteamGames = async (req, res) => {
	try {
		const resp = await axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2?applist');
		// const resp = await axios.get('https://steamspy.com/api.php?request=all');
		console.log(resp.data)
		res.json(resp.data);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

const getSingleGameSteam = async (req, res) => {
	console.log(`this is `, req)
	try {
		const appid = req.params.id
		const resp = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${appid}`)
		console.log(resp.data)
		res.json(resp.data);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

module.exports = {
	getSingleGameSpy,
	getSingleGameSteam,
	getAllSteamGames,
}
