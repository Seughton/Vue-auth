const client = require('../models/database')
const express = require('express');

let addUser = async(profile) => {
  return await client.query('INSERT INTO users (id, display_name, email, photo, locale) VALUES ($1,$2,$3,$4,$5)', 
  [
    profile.id,
    profile.displayName,
    profile.emails[0].value,
    profile.photos[0].value,
    profile._json.locale
  ])
  
}
let findByEmail = (email) => {
  return client.query('SELECT * FROM users WHERE email = $1', [email])
}
let updateUser = (profile,id) => {
  return client.query(`UPDATE users SET display_name = $1, email = $2, photo = $3, locale = $4 WHERE id = $5`,
  [
    profile.displayName,
    profile.emails[0].value,
    profile.photos[0].value,
    profile._json.locale,
    id
  ])
}

module.exports = {addUser,findByEmail,updateUser}