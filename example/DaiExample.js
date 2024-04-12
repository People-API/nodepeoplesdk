// import the People Node SDK
var { Person, Memory } = require('peoplesdk');
var fs = require('fs');

// First, let's dump themirrazz' brain

// isolate the context
(function () {
    // initialize the person object
    var person = new Person({
        // find easier by filtering via birthdate
        birthdate: new Date('02/14/2008'),
        // new feature in People API PTB, only supports YouTube and Twitter
        social_handles: {
            youtube: 'https://www.youtube.com/@themirrazz',
            twitter: 'https://x.com/@themirrazzreal' // requires an 'x.com' URL
        }
    });
    // dump memory but not async
    var dump = person.memory.dump({ sync: true });
    fs.writeFile('./b8da99e5af1368abbc.pplmmri', dump);
    
    // let him know
    var memory = new Memory({
        type: 'text',
        data: 'I have literally hacked into your brain!! Mwa-ha-ha-ha-ha!',
        voice_label: "eggman lol"
    });

    // this alert is etched in their mind forever
    person.memory.append(memory);

    // instantly highlight this
    person.thoughts.highlightMemory(memory);
})();