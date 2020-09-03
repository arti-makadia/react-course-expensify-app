console.log('test message');

const book = {
    title : 'Ego is the Enemy',
    author : 'Ryan Holiday',
    publisher : {
       name : 'Penguine'
    }
};

const { title, author } = book ;
const { name : publisherName = 'Self-published' } = book.publisher;

console.log(` ${title} is publish by ${publisherName} ` );
console.log(publisherName);


//array destructuring

const item = ['coffee (hot)', '2.0', '2.5', '3.0'];

const [name, , medium] = item ;

console.log(`The medium ${name} costs ${medium}`);