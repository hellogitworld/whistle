var properties = require('../../lib/properties');

module.exports = function(req, res) {
	properties.set('currentRulesFile', req.query.name);
	res.json({ec: 0, em: 'success'});
};
