import{getAuth, signInWithEmailAndPassword} from "firebase/auth";

export const signIn =(email, password) => {
    return signInWithEmailAndPassword(getAuth(), email, password)
    .then(userCredentials => {
        console.log(userCredentials)
    }).catch(error => {
        console.log(error.message)
    })
}
