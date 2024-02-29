
const subscriberRequest = async(req,res)=>{
    try {
        const {email}=req.body;
        console.log("email",email)
        const doexist = await pool.query("SELECT EXISTS(SELECT 1 FROM subscriber WHERE email = $1)",[email]);
        const exist= doexist.rows[0].exists;
        // console.log(exist)
        if(!exist){
            const response = await pool.query("INSERT INTO subscriber (email) VALUES($1)",[email]);
            res.json({status:true,message:"Succesfully Subscribed !"});
        }else{
            res.json({status:false,message:"Already Subscribed !"})

        }
       
        
    } catch (error) {
        res.json({status:false,message:"error"});
        
    }
}

module.exports={subscriberRequest};