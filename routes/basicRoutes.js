// const express = require('express');
// const router= express.Router(); 
// router.use(express.json()); 
// router.use(express.urlencoded({extended:true})); 


// const data = [
//     {
//       EmployeeName: "JayaSurya",
//       EmployeeDesignation: "Developer",
//       EmployeeLocation: "Bangalore",
//       Salary: 70000
//     },
//     {
//       EmployeeName: "Karthik",
//       EmployeeDesignation: "FullStack Developer",
//       EmployeeLocation: "Chennai",
//       Salary: 60000
//     },
//     {
//       EmployeeName: "RahulRakesh",
//       EmployeeDesignation: "DSA Developer",
//       EmployeeLocation: "Tanjore",
//       Salary: 95000
//     },
//     {
//       EmployeeName: "Binolin",
//       EmployeeDesignation: "Sr.SoC Engineer",
//       EmployeeLocation: "Reethapuram",
//       Salary: 92000
//     },
//     {
//       EmployeeName: "Jacson",
//       EmployeeDesignation: "IT Sales Manager",
//       EmployeeLocation: "Mumbai",
//       Salary: 88000
//     },
//     {
//       EmployeeName: "Sivaraman",
//       EmployeeDesignation: "Sr.Automation Engineer",
//       EmployeeLocation: "Delhi",
//       Salary: 92000
//     },
//     {
//       EmployeeName: "Sreevari",
//       EmployeeDesignation: "React.js Developer",
//       EmployeeLocation: "Delhi",
//       Salary: 92000
//     }
//   ];
// function basicroutes(nav){


// router.get('/',(req,res)=>{
//     console.log(data,"data here.......");
//     // res.send(data);
//     res.render("home",
//     {
//         data,
//         nav
//     });
// })

// router.get('/addform',(req,res)=>{
//     res.render("employeeform",{nav})
// })

// router.get('/signupform',(req,res)=>{
//     res.render("signup")
// })

// router.get('/update/:ind',(req,res)=>{
//     res.render("updateform",{nav,
//         id:req.params.ind,
//             data
//         })
// })


// router.post('/add',(req,res)=>{
//     data.push(req.body);
//     // res.send(data);
//     res.redirect('/employee');
// })

// router.get('/remove/:ind',(req,res)=>{
//     data.splice(req.params.ind,1);
//     res.redirect('/employee')
// })

// return router;
// }



// module.exports=basicroutes;




const express = require('express');
const router= express.Router(); 
router.use(express.json()); 
router.use(express.urlencoded({extended:true})); 


const data = [
  {
          EmployeeName: "JayaSurya",
          EmployeeDesignation: "Developer",
          EmployeeLocation: "Bangalore",
          Salary: 70000
        },
        {
          EmployeeName: "Karthik",
          EmployeeDesignation: "FullStack Developer",
          EmployeeLocation: "Chennai",
          Salary: 60000
        },
        {
          EmployeeName: "RahulRakesh",
          EmployeeDesignation: "DSA Developer",
          EmployeeLocation: "Tanjore",
          Salary: 95000
        },
        {
          EmployeeName: "Binolin",
          EmployeeDesignation: "Sr.SoC Engineer",
          EmployeeLocation: "Reethapuram",
          Salary: 92000
        },
        {
          EmployeeName: "Jacson",
          EmployeeDesignation: "IT Sales Manager",
          EmployeeLocation: "Mumbai",
          Salary: 88000
        },
        {
          EmployeeName: "Sivaraman",
          EmployeeDesignation: "Sr.Automation Engineer",
          EmployeeLocation: "Delhi",
          Salary: 92000
        },
        {
          EmployeeName: "Sreevari",
          EmployeeDesignation: "React.js Developer",
          EmployeeLocation: "Delhi",
          Salary: 92000
  }
  ];
function basicroutes(nav){


router.get('/',(req,res)=>{
    console.log(data,"data here.......");
    // res.send(data);
    res.render("home",
    {
        data,
        nav
    });
})

router.get('/addform',(req,res)=>{
    res.render("employeeform",{nav})
})

router.get('/signupform',(req,res)=>{
    res.render("signup")
})

router.get('/update/:ind',(req,res)=>{
    res.render("updateform",{nav,
        id:req.params.ind,
            data
        })
})

router.post('/update/:ind', (req, res) => {
  const index = req.params.ind;
  data[index] = req.body; 
  res.redirect('/employee');
});

router.post('/add',(req,res)=>{
    data.push(req.body);
    // res.send(data);
    res.redirect('/employee');
})

router.get('/remove/:ind',(req,res)=>{
    data.splice(req.params.ind,1);
    res.redirect('/employee')
})

return router;
}



module.exports=basicroutes;
