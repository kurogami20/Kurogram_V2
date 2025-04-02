
export function internalServerError(req,res){
    res.status(500).json({"message":"Cannot fulfill request"})
}