import * as firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
firestore
	.collection("users")
	.doc("FcKqheV4qeDcvlAVyfdd")
	.collection("cartitems")
	.doc("NukNR1KzNBwZ39QJWjYh");
firestore.doc("/users/");
