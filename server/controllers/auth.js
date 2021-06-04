const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, user[i].passwordHash)
        if (existing && users[i].username === username) {
          let objToReturn = {...users[i]}
          delete objToReturn.passwordHash
          res.status(200).send(objToReturn)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const { username, email, firstName, lastName, password } = req.body
        
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
        
        let newUser = {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          passwordHash: passwordHash
        }


        console.log('Registering User')
        console.log(req.body)

        users.push(newUser)
        let userToReturn = {...newUser}
        delete userToReturn.passwordHash
        res.status(200).send(req.body)
    }
}