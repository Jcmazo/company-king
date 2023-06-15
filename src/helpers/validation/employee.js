const validateFields = (req,res,next) =>{
  const { name, email, age } = req.body;

  if(!name || !email || !age ){
    return res.status(400).json({message: 'Field name, email, age must be provided'})
  }
  return next()
}


module.exports = { validateFields }