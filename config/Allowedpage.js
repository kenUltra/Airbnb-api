const AllowedSite = ["https://airbnb.com", "https://airbnb-api-l62o.onrender.com", "https://airbnb-simple.onrender.com"]

const ops ={
    origin: (origin, callBack)=>{
        if(AllowedSite.indexOf(origin) !== -1 || !origin ){
            callBack(null, true)
        }else{
            callBack(new Error("You're not allowed to use our backend Api"))
        }
    },
    optionsSuccessSatus: 200
}

module.exports = ops;