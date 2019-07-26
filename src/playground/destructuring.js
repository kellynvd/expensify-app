// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-publisher'} = book.publisher;

// console.log(publisherName);

const item = ['Coffee', '$2.00', '$2.50', '$2.75'];

const [coffe, , mediumPrice] = item;

console.log(`A medium ${coffe} costs ${mediumPrice}`);
