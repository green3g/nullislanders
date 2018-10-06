const bcrypt = require('bcrypt')

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

exports.encrypt = async phrase => await bcrypt.hashSync(phrase, salt)

exports.decrypt = async phrase => await console.log('hi ', phrase)
