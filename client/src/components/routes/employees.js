const router = require("express").Router();
const { employeeModel } = require("../db");

router.get("/getAllEmployees", (req, res) => employeeModel.find({}).then(results => res.send(results)).catch(err => next(err)));


router.get("/getEmployee/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const found = await employeeModel.findById(id);
        res.send(found);
    } catch(err) {
        return next(err);
    }
});

router.post("/createEmployee", async (req, res, next) => {
    if (!req.body.name) return next({ status: 400, message: "Missing name"})
    try { 
        const result = await employeeModel.create(req.body);
        res.status(201).send(result);
    } catch(err) { 
        return next(err);
    }
});


router.patch("/updateEmployee/:id", async (req, res, next) => { 
    try {
        await employeeModel.findByIdAndUpdate(req.params.id, req.query)
        const newEmployee = await employeeModel.findById(req.params.id);
        res.send(newEmployee);
    } catch(err) {
        return next(err);
    }
})

const deleteMiddleware = (req, res, next) => {
    console.log("Delete an Employee?");
    next();
}

router.delete("/removeEmployee/:id", deleteMiddleware, (req, res, next) => {
    const {id}  = req.params;
    console.log("ID:", id);
    employeeModel.findByIdAndDelete(id).then(result => res.send(result)).catch(err => next(err));
});


module.exports = router;