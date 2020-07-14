import Sequelize from 'sequelize';
import db from '../config/database';

const produit = db.define('st_produit',{
    nom:{
        type: Sequelize.STRING,
        allowNull: true
    },
    volume:{
        type: Sequelize.STRING,
        allowNull: true
    },
    unite:{
        type: Sequelize.STRING,
        allowNull: true
    },
    prix:{
        type: Sequelize.STRING,
        allowNull: true
    },
    maxoctet:{
        type: Sequelize.STRING,
        allowNull: true
    },
    validite:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    image:{
        type: Sequelize.TEXT,
        allowNull: true
    }
    
},{
    timestamps: false,
    freezeTableName: true,
});

export default produit;