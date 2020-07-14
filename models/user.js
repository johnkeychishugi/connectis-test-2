import Sequelize from 'sequelize';
import db from '../config/database';
import role from '../models/role';

const user = db.define('user',{
    nom:{
        type: Sequelize.STRING,
        allowNull: false
    },
    prenom:{
        type: Sequelize.STRING,
        allowNull: false
    },
    datenaissance:{
        type: Sequelize.DATE,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    telephone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    datecreation:{
        type: Sequelize.STRING,
        allowNull: true
    },
    photo:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    id_role:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    genre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    carte_identite_recto:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    carte_identite_verso:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    gestionnaire_id:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
},{ 
    timestamps: false
});

user.belongsTo(role,{
    foreignKey: 'id_role',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

export default user;