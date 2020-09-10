import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const database = firebase.database();

  export { firebase, database as default };

//  //child_removed
//database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});

 //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});

 //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});

//database.ref('expenses')
//.on('value', (snapshot) => {
//    const expenses = [];

//    snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id : childSnapshot.key,
//            ...childSnapshot.val()
//        });
//    });

//    console.log(expenses);
//});



//database.ref('expenses').push({
//    description : 'Rent',
//    note : '',
//    amount : 160000,
//    createdAt : 645684935784
//});
////database.ref('expenses').push({
//    description : 'Food',
//    note : '',
//    amount : 25000,
//    createdAt : 645684935784
//});
//database.ref('expenses').push({
//    description : 'Phone Bill',
//    note : '',
//    amount : 6000,
//    createdAt : 645684935784
//});







//  database.ref().on('value', (snapshot) => {
//      const val = snapshot.val();
//      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//  })

//  
//  database.ref().set({
//      name: 'Arti Makadia',
//      age: 32,
//      stressLevel : 6,
//      job : {
//        title : 'software developer',
//        company : 'Google'
//      },
//      location : {
//          city : 'Sydney',
//          country : 'Australia'
//      }
//  }).then(() => {
//     console.log('Data is Saved');
//  }).catch((e) => {
//      console.log('This is failed.', e);
//  });

//database.ref('isSingle')
//.remove()
//.then(() => {
//    console.log('Data is Removed');
//})
//.catch((e) => {
//    console.log('This is failed.', e);
//});  

//database.ref().update({
//   stressLevel : 9,
//    'job/company' : 'Amazon',
//    'location/city' : 'Melbourne'
//});