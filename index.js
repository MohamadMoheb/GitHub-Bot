const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const FILE_PATH = './data.json';

const makeCommit = n => 
{
    const x = random.int(1,200);
    const y = random.int(0,6);
    const DATE = moment().subtract(1,'y').add(1,'d')
                .add(x,'w').add(y,'d').format();
    const data = 
{
    date: DATE
}
console.log(DATE);

jsonfile.writeFile(FILE_PATH, data, ()=>{
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}, 
    makeCommit.bind(this, --n));
});}

makeCommit(1000)

//node index.js to run github bot