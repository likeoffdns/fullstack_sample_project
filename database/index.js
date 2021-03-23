const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres');

(async () => {
	await sequelize.sync({ force: true });

	console.log('\x1b[32m%s\x1b[0m', 'db and tables created!');
})();


module.exports = { sequelize };