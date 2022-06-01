const express = require('express');
const RecordController = require('../../controllers/recordController')

const router = express.Router();

/**
 * @openapi
 * /api/v1/record:
 *   get:
 *     tags:
 *       - Records
 *     summary: Afficher la liste de tous les reccords
 *     parameters:
 *       - in: params
 *         name: recordId
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
//Endpoint retournant tous les records
router.get('/', RecordController.getAllRecords);

//Endpoint retournant un record spécifique
router.get('/:recordId', RecordController.getRecord)

/**
 * @openapi
 * /api/v1/record:
 *   post:
 *     tags:
 *       - Records
 *     summary: Ajouter un nouveau record
 *     requestBody:
 *      description: Optional description in *Markdown*
 *      required: false
 *      content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/record'
 *
 *     responses:
 *       201:
 *         description: record crée
 *         schema:
 *              record:
 *                type: objet
 *                properties:
 *                  workout:
 *                    type: string
 *                    example: 4a3d9aaa-608c-49a7-a004-66305ad4ab50
 *
 */

//Endpoint pour ajouter un nouveau record
router.post('/', RecordController.createRecord);

//Endpoint pour modifier un record
router.patch('/:recordId', RecordController.updateRecord);

//Endpoint pour supprimer un record
router.delete('/:recordId', RecordController.deleteRecord);

module.exports = router;
