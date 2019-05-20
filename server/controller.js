const axios = require('axios');

module.exports = {
	read: function(req, res) {
		let { term } = req.query;

		axios
			.get(`https://itunes.apple.com/search?term=${term}`)
			.then(data => {
				res.status(200).send(data.data);
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
