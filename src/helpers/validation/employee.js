const validateFields = (req, res, next) => {
  const { name, email, age ,documentId} = req.body

  if (!name | !email | !age | !documentId){
    return res.status(400).json({ message: 'Field name, email, age, documentIdmust be provided' })
  }
  next()
}

module.exports =  validateFields 