exports.new = (req, res) => {
  res.render('sessions/new')
}

exports.create = (req, res) => {
  console.log('create session')
  console.log('Params -> ', req.body)
  res.render('sessions/new')
}
