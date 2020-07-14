import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import user from '../models/user';
import role from '../models/role'

dotenv.config();


const userController  = {
     getUsers: (req,res)=>{
        user.findAll().then(users =>{
            if(users){
              res.status(200).json({
                status : 200,
                message : 'Users are retrieved successfully',
                users : users
            
              });
            }else{
              res.status(404).json({
                status : 404,
                error: 'User not found'
              });
            }
          })
    },
    getUser: (req,res)=>{
       let phone = req.body.phone;
      user.findOne({
        where:{
          telephone: phone
        }
      }).then(user =>{
        if(user){
          res.status(200).json({
            status : 200,
            message : 'User is retrieved successfully',
            user : user
        
          });
        }else{
          res.status(404).json({
            status : 404,
            error: 'User not found'
          });
        }
      })
    },

    addUser: (req,res)=>{
      req.body.id_role = parseInt(req.body.id_role);
      req.body.gestionnaire_id = parseInt(req.body.gestionnaire_id);

      let {nom,prenom,datenaissance,email,telephone,datecreation,
           photo,id_role,genre,carte_identite_recto,
           carte_identite_verso,gestionnaire_id} = req.body;
            user.create({
                    nom,
                    prenom,
                    datenaissance,
                    email,
                    telephone,
                    datecreation,
                    photo,
                    id_role,
                    genre,
                    carte_identite_recto,
                    carte_identite_verso,
                    gestionnaire_id
        }).then((data)=>{
         if(data) 
          res.status(200).json({
            status : 200,
            message : 'User created successfully',
            user : data
          });
        }).catch(error=> {
            console.error(error);
        });
    },

    getUsersWithRoles : (req,res) =>{
      user.findAll({
        include :role
      }).then(users =>{
        if(users){
          res.status(200).json({
            status : 200,
            message : 'Users wirh roles are retrieved successfully',
            users : users
        
          });
        }else{
          res.status(404).json({
            status : 404,
            error: 'User not found'
          });
        }
      })
    },
    login : (req,res) => {
      let { email ,password } = req.body;
      
      if(email == 'jkchishugi@gmail.com' && password == '123456'){
        sendToken(email, res, 200,'User is successfully logged in')
      }else{
        res.status(422).json({
          status : 422,
          msg: 'not access'
        });
      }
    }
}

const sendToken = (email,res,status,msg) =>{
  const token = jwt.sign(
    {
      email : email,
    },
    process.env.TOKEN_KEY,
    { 
      expiresIn : '2h'
    }
  )
  return res.status(status).json({
    status : status,
    message : msg,
    data : {token : token}
  })
}

export default userController;