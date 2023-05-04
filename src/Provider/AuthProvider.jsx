import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider
const githubAuthProvider = new GithubAuthProvider


const AuthProvider = ({ children }) => {
    // const user = { displayName: "muri khan" }
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleAuthProvider);
    }
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubAuthProvider);
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;