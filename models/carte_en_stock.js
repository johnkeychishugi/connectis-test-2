import Sequelize from 'sequelize';
import user from '../models/user';
import produit from '../models/produit';
import db from '../config/database';

const carte_stock = db.define('co_carte_stock',{
    produit_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    utilisateur_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    quantite:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
    
},{
    timestamps: false,
    freezeTableName: true,
});

carte_stock.belongsTo(user,{
    foreignKey: 'utilisateur_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

carte_stock.belongsTo(produit,{
    foreignKey: 'produit_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

export default carte_stock;