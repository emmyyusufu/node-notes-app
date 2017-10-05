// attach fs, lodash, yargs module content to fs, _, yargs variable
// lodash is for modular utilities, yargs is for parsing cmd line commands.
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// requiring my own files. Require files using url path, add functions to module.exports.* in concerned file
const notes = require('./note-functions');

// apply yargs formating to argv
const argv = yargs.argv;

// grab command line commands with nodejs's process.argv array
const command = argv._[0];





if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
}   
else if (command === 'list') {
    var everyNote = notes.listAll();
    console.log(`Printing ${everyNote.length} note(s).`);
    everyNote.forEach((note) => {
        notes.logNote(note);
    });
    
}   
else if (command === 'read') {
    var toRead = notes.readNote(argv.title);
    notes.logNote(toRead);
}   
else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    if (noteRemoved) {
        console.log('Successfully removed');
    } else {
        console.log('Nothing removed');
    }
}   
else {
    console.log('command not recognized');
}



