const express  = require('express')
const mongoose= require('mongoose');

const router = express.Router();

const {Book} = require('../models/model.js')
//Get All contact
router.get('/api/all_contact', async(req,res,next)=>{
    try {
        const {page = 1,limit = 10}=req.query;
        const book  = await Book.find().limit(limit *1).skip((page-1)*limit);
        res.status(200).json({total:book.length,book});
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:error
        });
    }
})

//save contact 

router.post('/api/add_contact',(req,res)=>{
    const contact  =new Book({
    name:req.body.name,
    address:req.body.address,
    email:req.body.email,
    phone:req.body.phone
    });
    contact.save((error,data)=>{
        res.status(200).json({code:200,messahe:'contact added successfully',addContact:data})
    });
});

//get single contact
router.get('/api/one_contact/:id',(req,res)=>{
    Book.findById(req.params.id,(error,data)=>{
        if(!error){
            res.send(data)
        }
        else{
            console.log(error)
        }
    })
}) 
//Update contact
router.put('/api/edit_contact/:id',(req,res)=>{
    const contact  ={
        name:req.body.name,
        address:req.body.address,
        email:req.body.email,
        phone:req.body.phone
        };
        Book.findByIdAndUpdate(req.params.id, {$set:contact}, {new:true},(error,data)=>{
            if(!error){
                res.status(200).json({code:200,messahe:'contact updated successfully',updateContact:data})
            }
            else{
                console.log(error)
            }
    })
}) 

router.delete('/api/delete_contact/:id',(req,res)=>{
    Book.findByIdAndRemove(req.params.id,(error,data)=>{
        if(!error){
            res.status(200).json({code:200,messahe:'contact Deleted successfully',deleteContact:data})
        }
        else{
            console.log(error)
        }

    })

})


module.exports  = router
// {
//     "name":"abhi",
//     "address":"abhi@gmail.com",
//     "email":"abhi@gmail.com",
//     "phone":125896479
// }