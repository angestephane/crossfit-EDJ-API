const express = require('express');
const MemberController = require('../../controllers/memberController')

const router = express.Router();



router.get('/', MemberController.getAllMembers);
router.get('/:memberId', MemberController.getMember);
router.post('/', MemberController.addMember);
router.patch('/:memberId', MemberController.updateMember);
router.delete('/:memberId', MemberController.deleteMember);

module.exports = router;