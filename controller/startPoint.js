const MainPage =  require("../model/Home.json");

const getHomeData = function (req, res){
     res.json(MainPage);
}

module.exports = {getHomeData};