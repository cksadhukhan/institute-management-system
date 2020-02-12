// importing department model
const Department = require('../models/department');
const SuperAdmin = require('../models/superadmin')

// create department
exports.create = (req, res) => {
    SuperAdmin.findOne({username:"superadmin"}).then(data => {
        const newDept = new Department({
            deptName: req.body.deptName,
            deptCode: req.body.deptCode,
            createdBy: data._id
        });
        newDept
        .save()
        .then(dept => res.json({
            "success": true, 
            dept
        }))
        .catch(err => console.log(err));
    }).catch(err => console.log(err))
};

// modify department
exports.modify = (req, res) => {
    const result = {}
    Department.findById('5e306a125df70c20c10e4af3')
    .then(data => 
        SuperAdmin.findById(data.createdBy)
    .then(newData =>{
        result.id = data._id,
        result.deptName = data.deptName,
        result.deptCode = data.deptCode,
        result.createdBy = newData.name,
        result.createdOn = data.createdOn,
        result.isActive = data.isActive,
        result.role = newData.roles,
        res.json(result)
    }
        )
    )
};

// read department data
exports.read = (req, res) => {
    Department.findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
};

// delete department
exports.delete = (req, res) => {
    res.send('NOT IMPLEMENTED: department delete');
};