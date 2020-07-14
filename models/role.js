import Sequelize from 'sequelize';
import db from '../config/database';

const role = db.define('st_role',{
    nom:{
        type: Sequelize.STRING,
        allowNull: true
    },
},{
    timestamps: false
});

export default role;