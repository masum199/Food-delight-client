import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)

const auth =getAuth(app)

const provider = new GoogleAuthProvider()
const provider2 = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
   const googleLogin = () =>{
    return signInWithPopup(auth,provider)
   }
   const githubLogin = () =>{
    return signInWithPopup(auth,provider2)
   }

const authInfo = {
    user,
    createUser,
    signIn,
    googleLogin,
    githubLogin
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


