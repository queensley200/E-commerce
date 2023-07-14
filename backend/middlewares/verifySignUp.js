const express = require('express');
const HttpStatus = require('http-status-codes');


const db = require("../model");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail= (req,res,next)=>{

    User.findOne({
        // USERNAME
        username:req.body.username 
    }).exec((err,user)=>{
        if (err){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'server error', error: error.message });
        }
        if(user){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Failed! Username already Exist'})
        }
    })

    // EMAIL
    User.findOne({
        email : req.body.email
    }).exec((err,user)=>{
        if (err){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'server error', error: error.message });
        }
        if(user){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Failed! Email already Exist'})
        }
        
    })

    // PHONE NUMBER
    User.findOne({
        mobile : req.body.mobile
    }).exec((err,user)=>{
        if (err){
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'server error', error: error.message });
        return;
        }
        if(user){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Failed! Phone number  already Exist'})
            return;
        }
        next();
    })
};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles){
        for (let index = 0; index < req.body.roles; index++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(HttpStatus.BAD_REQUEST).json({message: `Failed roles ${req.body.role[i]} does not exist!`});   

            }
            return;
        }
       
    }
    next();
};

const verifySignUp ={
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
}

module.exports = verifySignUp;