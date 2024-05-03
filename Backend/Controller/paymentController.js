const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY);
const { v4: uuidv4 } = require('uuid');
const User = require('../model/User') ;


const paymenthandler = async (req, res) => {
    const { product, token } = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);

    const idempotencyKey = uuidv4();
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const charge = await stripe.paymentIntents.create({
            amount: product.price * 100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, { idempotencyKey: idempotencyKey });
         
        const user =  await User.findOne({email : token.email}).exec();
        if(!user)
        {
           return res.sendStatus(401);
        } ///unauthorized
        console.log(user); 

                // Update user's role to ADMIN
           user.roles = { Admin : 5150 };
           await user.save();
        
           console.log(user);
           
        
        res.status(200).json(charge);
       

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while processing the payment.' });
    }
}

module.exports ={ paymenthandler};
