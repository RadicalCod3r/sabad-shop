// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, setDoc, doc, getDoc, collection, writeBatch } from "firebase/firestore"
import { convertArrayToObject } from "../redux/shop/shop.utils";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqp95S7FwSwO-y8lr7Yj63lCPLrwdXeMU",
  authDomain: "sabad-db.firebaseapp.com",
  projectId: "sabad-db",
  storageBucket: "sabad-db.appspot.com",
  messagingSenderId: "487071279586",
  appId: "1:487071279586:web:8d277856ebf8ed111d71bb",
  measurementId: "G-HZ2WQ1H7JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = doc(db, `users/${userAuth.uid}`);
    const userSnap = await getDoc(userRef);

    if(!userSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error);
        }
    }

    return userRef;
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
}

export const addDocumentItemsToProducts = async (docItems) => {
    const collectionRef = collection(db, 'products');
    const batch = writeBatch(db);
    docItems.forEach((item) => {
        const newDocRef = doc(collectionRef);
        batch.set(newDocRef, item);
    });

    return await batch.commit();
}

export const addCategoryAndItems = async (collectionId, itemsToAdd) => {
    const collectionRef = collection(db, 'categories');
    const batch = writeBatch(db);
    const newDocRef = doc(collectionRef, collectionId);
    batch.set(newDocRef, itemsToAdd);
    return await batch.commit();
}

export const convertProductsSnapshotToMap = (snapshot) => {
    const transformed = snapshot.docs.map(doc => {
        const { title, 
                imageUrl,
                priceBeforDiscount, 
                sellCounter,
                discountPersent,
                price } = doc.data();
        return {
            id: doc.id,
            title,
            imageUrl,
            priceBeforDiscount,
            sellCounter,
            discountPersent,
            price
        }
    });
    return transformed;
}

export const convertCategoriesSnapshotToMap = (snapshot) => {
    const transformed = snapshot.docs.map(doc => {
        const {
            id,
            name,
            count,
            imageUrl,
            items
        } = doc.data();

        return {
            id,
            name,
            count,
            imageUrl,
            routName: encodeURI(name.toLowerCase()),
            items
        };
    });

    return convertArrayToObject(transformed, 'name');
}