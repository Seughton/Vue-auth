const jwt = require('jsonwebtoken');

function create(user) {
  console.log('sigining with secret', process.env.TOKEN_SECRET);
  
  return new Promise((resolve, reject) => {
    jwt.sign(user, process.env.TOKEN_SECRET, {
      expiresIn: '1d'
    }, (error, token) => {
      console.log("TOKEN=>",token)
      if(error) return reject(error);
      resolve(token);
    });
  });
}

module.exports = {
  create,
};