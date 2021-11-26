import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDTcfBeLnmujIbWGIcWXSsVke49wn5DhYQ",
	authDomain: "bishop-4ba0f.firebaseapp.com",
	databaseURL: "https://bishop-4ba0f.firebaseio.com",
	projectId: "bishop-4ba0f",
	storageBucket: "bishop-4ba0f.appspot.com",
	messagingSenderId: "714356204357",
	appId: "1:714356204357:web:2d4232637676721008942c",
	measurementId: "G-3LFDFXYSNK"
};

export const createUserProfileDocument = async (userAuth, additionData) => {
	if (!userAuth) return;
	const userRef = fireStore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

// initializeApp
firebase.initializeApp(firebaseConfig);

//auth
export const auth = firebase.auth();
export const fireStore = firebase.firestore();

//Provider
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account"
});

// signinWithGoogle
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
