const fs = require('fs');
const util = require('util');
const uuid = require('uuid');

const readASync = util.promisify(fs.readFile);
const writeASync = util.promisify(fs.writeFile);

class Add {
    read(){
        return readASync("db/db.json", "UTF-8")

    }
    write(payload){
        return writeASync("db/db.json", JSON.stringify(payload))
    }
    readAll(){
        return this.read().then(notes => [...JSON.parse(notes)])
        
    }
    addNew(payload) {
        let newNote = {
            id: uuid(),
            title: payload.title,
            text: payload.text
        }
        return this.readAll()
        .then(notes=> [...notes, newNote])
        .then(notes=> this.write(notes))
        .then(()=> this.read())
    }
    deleteNote(id) {
        return this.readAll()
        .then(notes => notes.filter(note=> note.id !== id))
        .then(notes => this.write(notes))
        .then(() => this.read())
    }
}

module.exports = new Add();