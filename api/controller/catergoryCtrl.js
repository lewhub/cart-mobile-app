var Catagory = require("../models/Catagory.js")

module.exports = {
  index: function(req, res){
    Catagory.find({}).exec(function(err, catagories){
      if (err) throw err
      res.json({success: true, message: "All catagories", catagories: catagories})
    })
  }
}
