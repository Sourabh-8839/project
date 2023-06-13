
const Products = require('../models/dataStore');

exports.getDetails=async(req,res)=>{

    const allProduct = await Products.findAll();

    res.send(allProduct);


}

exports.sendProducts =async(req,res)=>{

    const {productName,price} = req.body;

    console.log(req.body);

    const p = await Products.create({
        productName:productName,
        price:price
    });

    res.send(p);

}


exports.deleteProducts=async(req,res)=>{

    const proId = req.params.pId;

    console.log(proId);
    await Products.destroy({where:{
        id:proId
    }});

    res.send('Delete Products');
}

