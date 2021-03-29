import * as functions from "firebase-functions";
import { app } from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const onCreateUser = functions.handler.auth.user.onCreate(
  (user, ctx) => {
    app().auth().setCustomUserClaims(user.uid, {
      userType: "user",
    });
    app().firestore().collection("users").doc(user.uid).create({});
  }
);
