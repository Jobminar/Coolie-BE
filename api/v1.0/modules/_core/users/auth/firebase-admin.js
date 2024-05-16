// firebaseAdmin.js
import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK
const serviceAccount = require("./path-to-your-firebase-adminsdk-json-file.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
