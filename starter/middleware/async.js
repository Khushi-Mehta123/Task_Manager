
const asyncWrapper = (fn) => {
    async function run(req,res,next){
        try{
            await fn(req,res,next)
        }
        catch(err){
            next(err)
        }
    }
    return run
}
    // return async (req,res,next) =>{
    //     try {
    //         await fn(req,res,next)
    //        } catch (error) {
    //         next(error)
    //        }
    // }

module.exports = asyncWrapper