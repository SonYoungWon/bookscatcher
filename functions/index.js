const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

exports.myFunctionName = functions.firestore
  .document('users/marie')
  .onWrite((change, context) => {
    // ... Your code here
  });
