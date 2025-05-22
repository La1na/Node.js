const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/change-password', auth, authController.changePassword);
router.post('/delete-account', auth, authController.deleteAccount);
router.get('/admin', auth, role('admin'), authController.adminAccess);
router.post('/change-email', auth, authController.changeEmail);

module.exports = router;
