const express =require('express');
const router = express.Router();

const DestCtrl = require ('../controllers/destinatario.controller');
const destinatario = require('../models/destinatario');

const BankCtrl = require ('../controllers/banco.controller');


router.get('/',DestCtrl.getDestinatarios);
router.post('/',DestCtrl.createDestinatario);
router.get('/:id',DestCtrl.getDest);
router.put('/:id',DestCtrl.editDestintario);
router.delete('/:id',DestCtrl.DeleteDestintario);

router.get('/api/bancos', BankCtrl.getBancos);

module.exports = router;