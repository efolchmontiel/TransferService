const dest = require('../models/destinatario');
const DestinatarioCtrl = {};

DestinatarioCtrl.getDestinatarios = async (req,res) =>{
  const destinatario  =  await dest.find()
  res.json(destinatario);
};

DestinatarioCtrl.createDestinatario = async (req,res) => {
   const destinatario = new dest({
       name: req.body.name,
       rut: req.body.rut,
       email:req.body.email,
       phone:req.body.phone,
       bank:req.body.bank,
       typeAccount:req.body.typeAccount,
       numberAccount:req.body.numberAccount,
       monto:0
   });
   await destinatario.save();
   res.json({
    'status': 'Cliente Guardado'
   }).
   then(result => {
    console.log(result);
    res.status(201).json({
      message: "Handling POST requests to /products",
      createDestintario: result
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
}

DestinatarioCtrl.getDest =  async (req,res) => {
    console.log(req.params.id);
    const destintario = await dest.findById(req.params.id);
    res.json(destintario);
}

DestinatarioCtrl.editDestintario = async (req,res) =>  {
    const id = req.params.id;
    const cliente = {
        name: req.body.name,
        rut: req.body.rut,
        email:req.body.email,
        bank: req.body.bank,
        typeAccount : req.body.typeAccount,
        // numberAccount: req.body.numberAccount,
        monto:  req.body.monto
    };
    await dest.findByIdAndUpdate(id, {$set:cliente}, {new: true})
    ;
    res.json({status:'Cliente Actualizado'});
}

DestinatarioCtrl.DeleteDestintario = async (req,res) =>  {
    await dest.findByIdAndRemove(req.params.id);
    res.json({status:'Cliente Eliminado'});

}

module.exports = DestinatarioCtrl;