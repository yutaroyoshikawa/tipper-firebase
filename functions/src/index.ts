import * as functions from "firebase-functions";
import {app, initializeApp, credential} from "firebase-admin";

initializeApp({
  credential: credential.applicationDefault(),
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const onCreateUser = functions.handler.auth.user.onCreate(
    async (user) => {
      await app().firestore().collection("users").doc(user.uid).create({});
      await app().auth().setCustomUserClaims(user.uid, {
        userType: "user",
      });
    }
);

export const mp4ToHls = functions.handler.storage.object.onFinalize((item) =>
  // eslint-disable-next-line no-console
  console.log(item.bucket)
);
