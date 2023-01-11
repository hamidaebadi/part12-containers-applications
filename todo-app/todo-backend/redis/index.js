const redis = require('redis')
const { promisify } = require('util')
const { REDIS_URL } = require('../util/config')
const {Todo} = require('../mongo')

let getAsync
let setAsync

if (!REDIS_URL) {
  const redisIsDisabled = () => {
    console.log('No REDIS_URL set, Redis is disabled')
    return null
  }
  getAsync = redisIsDisabled
  setAsync = redisIsDisabled
} else {
  const client = redis.createClient({
    url: REDIS_URL
  })
  
  Todo.count({}, (err, count) => {
    client.set('added_todos', count)
  })
  
  getAsync = promisify(client.get).bind(client)
  setAsync = promisify(client.set).bind(client)    
}

module.exports = {
  getAsync,
  setAsync
}