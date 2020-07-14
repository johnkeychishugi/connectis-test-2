import carte from '../models/carte_en_stock';
import user from '../models/user';
import produit from '../models/produit';

const carteStockController  = {
    getCartes: (req,res)=>{
        carte.findAll({
            include: user
        }).then(cartes =>{
            if(cartes){
              res.status(200).json({
                status : 200,
                message : 'Cartes are retrieved successfully',
                cartes : cartes
            
              });
            }else{
              res.status(404).json({
                status : 404,
                error: 'carte not found'
              });
            }
          })
    },
    getCartesWithProducts: (req,res)=>{
      carte.findAll({
          include: produit
      }).then(cartes =>{
          if(cartes){
            res.status(200).json({
              status : 200,
              message : 'Cartes with products are retrieved successfully',
              cartes : cartes
          
            });
          }else{
            res.status(404).json({
              status : 404,
              error: 'carte not found'
            });
          }
        })
  }

}

export default carteStockController;