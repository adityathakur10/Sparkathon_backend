const {StatusCodes}=require('http-status-codes')

const add=(req,res)=>{
    try {
        const {a,b}=req.body;
    
        if(a<0||b<0 || typeof a!=='number' || typeof b!=='number'){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"both numbers should be positive numbers"
            })
        }
        const result=a+b;
        return res.status(StatusCodes.OK).json({
            success:true,
            result
        })
    } catch (error) {
        console.error("Error in add function:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"error in add function"
        })
    }
    
    
}
const hello=(req,res)=>{
    return res.status(StatusCodes.OK).json({
        success:true,
        message:"Hello World"
    })
}
module.exports={add,hello}