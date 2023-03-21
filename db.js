const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)

/**
 * users: email/password/id
 * sessions: userId/sessionId/status/device/location/platform/createAt/updateAt/token
 */

db.defaults({users: [], sessions: []}).write() // đoạn này để set default trong file json ta có một mạng posts rỗng

module.exports = db