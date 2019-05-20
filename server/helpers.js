const filterEntry = function(entry) {
	let filteredEntry = {
		id: entry.trackId, //trackId (ID of entity)
		name: entry.trackName, // name of entity
		artwork: entry.artworkUrl100, // URL of the artwork
		genre: entry.primaryGenreName, //Genre of entity
		url: entry.trackViewUrl //trackViewUrl
	};
	return filteredEntry;
};

const sortByMediaType = function(results) {
	let sortedResults = {};
	results.forEach(entry => {
		let type = entry.kind;
		sortedResults[type] = sortedResults[type] || [];
		sortedResults[type].push(filterEntry(entry));
	});
	return sortedResults;
};

module.exports = {
	sortByMediaType: sortByMediaType
};
