const bcrypt = require('bcrypt')

const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

exports.encrypt = async phrase => await bcrypt.hashSync(phrase, salt)
exports.compare = async (testPhrase, actualPhrase) => await bcrypt.compare(testPhrase, actualPhrase)
