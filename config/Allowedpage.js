const AllowedSite = ["https://airbnb.com", "https://onrender.com/front-end", "http://localhost:2023", "http://127.0.0.1:3000"]

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