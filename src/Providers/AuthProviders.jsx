import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../firebase/firebase';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const googleSignIn = () => signInWithPopup(auth, googleProvider)
const githubSignIn = () => signInWithPopup(auth, githubProvider)
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null) ;
    const createUser = (email, password) => {
       setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const update = (updateUser) => {
        setLoading(true)
        console.log(updateUser);
        return updateProfile(auth.currentUser, updateUser)
    }
useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, loggedUser => {
       console.log('user changed');
       setUser(loggedUser)
       setLoading(false)

    })
    return () => unsubscribe()
},[])
    const authInfo = {
        user,
        loading,
        googleSignIn,
        githubSignIn,
        createUser,
        logIn,
        logOut,
        update
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;