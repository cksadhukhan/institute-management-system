const express = require('express');
const router = express.Router();

const superadmin = require('../controllers/superadmin');

router.post('/register', superadmin.register);
router.post('/login', superadmin.login);
router.get('/update', superadmin.update);
router.get('/delete', superadmin.delete);

router.get('/about', (req, res) => {
	res.send('Superadmin about');
});

module.exports = router;