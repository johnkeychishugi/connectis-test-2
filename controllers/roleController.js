import role from '../models/role';

const roleController  = {
    getRoles: (req,res)=>{
        role.findAll().then(roles =>{
            if(roles){
              res.status(200).json({
                status : 200,
                message : 'Roles are retrieved successfully',
                roles : roles
            
              });
            }else{
              res.status(404).json({
                status : 404,
                error: 'Role not found'
              });
            }
          })
    }
}

export default roleController;