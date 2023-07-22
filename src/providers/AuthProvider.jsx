import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import app from '../firebase/firebase.config'
import { toast } from 'react-hot-toast';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

     const signIn = (email, password) => {
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
     };

    const handleGoogleSignIn = () => {
        setLoading(true);
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setUser(loggedUser);
          toast.success("Logged in successfully!!!");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const handleGithubSignIn = () => {
        setLoading(true);
      signInWithPopup(auth, githubProvider)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setUser(loggedUser);
          toast.success("Logged in successfully!!!");
        })
        .catch((error) => {
          console.log(error);
        });
    };

     const logOut = () => {
        setLoading(true);
       return signOut(auth);
     };

       useEffect(() => {
         const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
           /* console.log('logged in user inside auth state change',loggedUser); */
           setUser(loggedUser);
           setLoading(false);
         });
         return () => {
           unsubscribe();
         };
       }, []);

     const authInfo = {
       user,
       createUser,
       signIn,
       handleGoogleSignIn,
       handleGithubSignIn,
       logOut,
       loading
     };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;