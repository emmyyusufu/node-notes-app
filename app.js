console.log("Starting Awesome Notes App");

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');


// Apply yargs effect to argv
 const argv = yargs.argv;


var command = argv._[0];

console.log('Command entered: ', command)



if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
            console.log('--')
            console.log('Title: ' + note.title);
            console.log('Body: ' + note.body);
    } else if (note === undefined) {
        console.log('Note title taken')
    }
} else if (command === 'list') {
    console.log('Listing out notes!');
    notes.getAll();
} else if (command === 'read') {
    console.log('Getting notes set for your reading');
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log("Don't recognise this command!");
}
    
