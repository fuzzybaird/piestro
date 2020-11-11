const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const dbfile = process.env.DBFILE || 'db.json'
const adapter = new FileSync(dbfile)
const db = low(adapter)
if(!db.has('client.name').value()){
    const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
    const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey    
    db.defaults({ client: { name: randomName }, shows: [] }).write()
}
module.exports = db