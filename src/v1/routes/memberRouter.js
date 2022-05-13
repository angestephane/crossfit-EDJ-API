const express = require('express');
const MemberController = require('../../controllers/memberController')

const router = express.Router();



router.get('/', MemberController.getAllMembers)
router.get('/:memberId', MemberController.getMember)
router.post('/', MemberController.addMember);

module.exports = router;