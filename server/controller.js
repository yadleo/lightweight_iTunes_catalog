const axios = require('axios');
const helpers = require('./helpers');

module.exports = {
	read: function(req, res) {
		let { term } = req.query;

		axios
			.get(`https://itunes.apple.com/search?term=${term}`)
			.then(result => {
				const sortedResults = helpers.sortByMediaType(result.data.results);
				res.status(200).send(sortedResults);
			})
			.catch(err => {
				if (err.response) {
					res.status(err.response.status).send(err.response.data);
				} else if (err.request) {
					res.status(404).send(err.request);
				} else {
					res.status(400).send(err.message);
				}
			});
	}
};
