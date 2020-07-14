import produit from '../models/produit';

const produitController  = {
     getProduits: (req,res)=>{
        produit.findAll().then(produits =>{
            if(produits){
              res.status(200).json({
                status : 200,
                message : 'Products are retrieved successfully',
                produits : produits
            
              });
            }else{
              res.status(404).json({
                status : 404,
                error: 'Product not found'
              });
            }
          })
    },
}

export default produitController;