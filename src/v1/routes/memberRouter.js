const express = require('express');
const MemberController = require('../../controllers/memberController')

const router = express.Router();



router.get('/', MemberController.getAllMembers)

module.exports = router;