

const admin = require('firebase-admin');
const serviceAccount = require('./../configKey.json');
 admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://shopli-cb3a7-default-rtdb.asia-southeast1.firebasedatabase.app",
});


const db = admin.firestore();
module.exports = {admin, db};


