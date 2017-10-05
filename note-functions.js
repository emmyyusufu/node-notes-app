const fs = require('fs');

const fetchNotes = () => {
    try {
        noteString = fs.readFileSync('notes-file.json');
        return JSON.parse(noteString);
    } catch(e) {
        return [];
    }
}
const saveNotes = (notes) => {
    fs.writeFileSync('notes-file.json', JSON.stringify(notes));
}
const logNote = (notes) => {
    console.log('A Note');
    console.log('-------------------');
    console.log('Title ' + notes.title);
    console.log('Body ' + notes.body);
}

// every file when using node has access to module variable
var addNote = (title, body) => {
    console.log('adding');

    notes = fetchNotes();

    note = {
        title: title,
        body: body
    }

    
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};

var listAll = () => {
    console.log('listing all notes');
    return fetchNotes();
}

var readNote = (title) => {
    var notes = fetchNotes();
    var noteToBeRead = notes.filter((note) => {
        return note.title === title;
    });
    return noteToBeRead[0];
}

var removeNote = (title) => {
    console.log('Starting note removal');
    
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });
    saveNotes(filteredNotes);
    if (notes.length !== filteredNotes.length) {
        return filteredNotes;
    }
}    

module.exports = {
    addNote: addNote,
    listAll: listAll,
    readNote: readNote,
    removeNote: removeNote,
    logNote: logNote
}