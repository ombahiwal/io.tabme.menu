import Stripe from "stripe";
const stripe = new Stripe("sk_test_51HBhc2Cmx7edPwMaiiWooeZExH2E8WAEzLFsovee1J6MBtDuyDOBKFnvnvan0YgH4XHmIf7g5tzvq8wkfQ2xJl7I00ydmg27vn");

export default async(req, res) => {
    const {id, amount} = req.body;
    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency:'EUR',
            description: 'Delicious - Testing of tabme',
            payment_method: id, 
            confirm: true
        });

        console.log(payment);
        return res.status(200).json({
            confirm: "Payment Confirmation abc123"
        });

    }catch(error){
    }
}