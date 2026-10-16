const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/foods
    axios.get('http://localhost:3000/api/foods')
        .then(function(response){
            res.render('index', { foods : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}
    
exports.add_food = (req, res) =>{
    res.render('add_food');
}

exports.update_food = (req, res) =>{
    axios.get('http://localhost:3000/api/foods', { params : { id : req.query.id }})
        .then(function(fooddata){
            res.render("update_food", { food : fooddata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}