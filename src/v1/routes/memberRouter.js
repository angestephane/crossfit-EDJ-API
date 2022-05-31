const express = require('express');
const MemberController = require('../../controllers/memberController')

const router = express.Router();

/**
 * @openapi
 * /api/v1/member:
 *   get:
 *     tags:
 *       - Members
 *     parameters:
 *       - in: params
 *         name: memberId
 *         description: utiliser l'id du membre comme paramètre pour retrouver le membre
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/member"
 *
 */

router.get('/', MemberController.getAllMembers);
router.get('/:memberId', MemberController.getMember);
router.post('/', MemberController.addMember);
router.patch('/:memberId', MemberController.updateMember);
router.delete('/:memberId', MemberController.deleteMember);

module.exports = router;
