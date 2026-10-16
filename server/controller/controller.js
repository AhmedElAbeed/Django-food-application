var fooddb = require('../model/model');

// create and save new food
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new food
    const food = new fooddb({
        name : req.body.name,
        recette : req.body.recette,
        taste: req.body.taste,
        status : req.body.status
    })

    // save food in the database
    food
        .save(food)
        .then(data => {
            //res.send(data)
            res.redirect('/add-food');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all foods/ retrive and return a single food
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        fooddb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found food with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving food with id " + id})
            })

    }else{
        fooddb.find()
            .then(food => {
                res.send(food)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving food information" })
            })
    }

    
}

// Update a new idetified food by food id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    fooddb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update food with ${id}. Maybe food not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update food information"})
        })
}

// Delete a food with specified food id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    fooddb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "food was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete food with id=" + id
            });
        });
}