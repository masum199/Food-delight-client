import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)

const auth =getAuth(app)

const provider = new GoogleAuthProvider()
const provider2 = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState('')

    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
   const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,provider)
   }
   const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,provider2)
   }

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
          setUser(loggedUser)
          setLoading(false)
          return () =>{
              unsubscribe()
          }
      })
  },[])



   const logOut = () => {
    setLoading(true)
   return signOut(auth)
}

const authInfo = {
    user,
    createUser,
    signIn,
    googleLogin,
    githubLogin,
    logOut
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


