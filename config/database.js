import Sequelize from 'sequelize';

const db = new Sequelize('radiusdb','freerad','connectis01',{
    host: '172.18.2.105',
    dialect: 'postgres',
    operatorAliases : false
});

export default db;