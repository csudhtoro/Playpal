import firebase_app from "@/shared/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(email, password, displayName, photoURL) {
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("userName:", displayName);
  console.log("userPhoto:", photoURL);

  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);

    await sendEmailVerification(result.user);
  } catch (e) {
    console.error("Error creating user:", e.message);
  }

  try {
    // Update user profile with displayName and photoURL
    updateProfile(result.user, {
      displayName: displayName,
      photoURL: photoURL
    }).then(() => {
      console.log("User profile updated!");
    });
  } catch (e) {
    console.error("Error updating profile:", e.message);
    error = e;
  }
  return { result, error };
}
