import userModel from "../models/userModel.js"

// add items to user cart

const addToCart = async (req, res) => {
         try {
            let userId = await userModel.findOne({_id:req.body.userId})
            let cartData = await userData.cartData;
            if(!cartData[req.body.itemId])
            {
                cartData[req.body.itemId] = 1;
            }
                  else
                  {
                    cartData[req.body.itemId] += 1;
                  }
                  await userModel.findByIdUpdate(req.body.userId,{cartData});
                  res.json({success:true,message:"Added To Cart"});

}    catch (error) {
    console.log(error);
    res.json({success:false,message:"Error Occured"});
    

}
}

// remove items from user cart

const removeFromCart = async (req, res) => {

}

// fetch user cart data
const getCart = async (req, res) => {

}

export {addToCart,removeFromCart,getCart}