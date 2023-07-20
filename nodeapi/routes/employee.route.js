let mongoose = require('mongoose')
express = require('express')
router = express.Router()

// EMployee Model
let employeeSchema = require('../models/Employee')

// CREATE Employee
router.post('/create-employee',(req, res, next) => {
  employeeSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// READ Employee

router.get('/', async(req,res) => {
 const data = await employeeSchema.find({})
 
 res.json({success:true, data:data})
})

//UPDATE Employee

router
  .get("/update-employee/:id",(req, res, next) => {
    employeeSchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  
  // Update Employee Data
 router
 .put("/update-employee/:id",(req, res, next) => {
    employeeSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Student updated successfully !");
        }
      }
    );
  });

  //Delete Employee 

  router.route('/delete-employee/:id').delete((req,res,next) => {
     employeeSchema.findByIdAndRemove(
      req.params.id,(error, data) => {
        if(error){
          next(error)
        }
        else{
          res.status(200).json({
            msg: data
          })
        }
      }
    );
  })

module.exports = router;

