import Sequelize from 'sequelize'

const hostname  = 'localhost';
const username = 'postgres';
const password = 'loro1234';
const database = 'Bath&Body';
const port  =5432;
const dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: port,
    dialect: dialect,
    operatorAliases: false
    
})

export default sequelize;