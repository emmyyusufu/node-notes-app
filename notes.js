const fs = require('fs');

var fetchNotes = function() {
        try {
            var noteString = fs.readFileSync('notes.json');
            return JSON.parse(noteString);
        } 
        catch(e) {
            return [];
        }
    }
    
var saveNotes = function(notes) {
        fs.writeFileSync('notes.json', JSON.stringify(notes));
    }



var addNote = (title,body) => {
    
    var notes = fetchNotes();
    
    var note = {
        title: title,
        body: body
    }
    
    var duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });
    
    if (duplicateNotes.length === 0) {  
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
       
};


var getAll = () => {
    console.log('Getting all notes');
}

var getNote = () => {
    console.log('Getting all notes');
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var note = { title: title }
    var notesAfterDeletion = notes.filter(function(note) {
        return note.title !== title; 
    });
    notes = notesAfterDeletion;
    saveNotes(notes);
}









module.exports = {
    addNote: addNote,
    removeNote: removeNote
}
