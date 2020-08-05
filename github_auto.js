const { exec } = require('child_process');
const { stdout } = require('process');

/*
    Bellow we export our module which will give access to all functions created inside the module
*/

module.exports = {
    /*
        Bellow is the init function which will be called
        by the user if he or she wants to initialize git in the current project
    */
    init: function() {
        exec('git init', (err,out))
    },

    /*
        Bellow we have the add function tha will haddle 
        which files are to be added to our git hub repo 
        it is set to all by default but you can modify 
        it if you pass a file name when calling ad function
     */
    add: function(files = '.') {
        exec(`git add ${files}`,(err,stdout,stderr) => {
            if(err) {
                console.error(err)
            }else {
                console.log('Successfully added file to git');
            }
        })
    },

     /*
        Bellow we have the commit function tha will haddle 
        the commit message and commiting the current state
        of the project
     */
    commit: function(msg,flags='-m') {
        exec(`git commit ${flags} "${msg}"`,(err,stdout,stderr) => {
            if(err) {
                console.error(err);
            }else {
                console.log('Commit made successfully')
            }
        })
    }

    /*

    */
}

