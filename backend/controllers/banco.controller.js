const bancoCtrl = {};

bancoCtrl.getBancos = async (req,res) =>{
    const URI = 'https://bast.dev/api/banks.php';
    res.json(URI);
  };
  
  module.exports = bancoCtrl;