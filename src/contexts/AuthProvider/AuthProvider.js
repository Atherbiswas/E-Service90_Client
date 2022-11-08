import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //google sign in
    const providerLogIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    //user register with email and 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //user login
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //user logout
    const logoutUser = () => {
        return signOut(auth)
    }

    //update p[rofile
    const upateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //useEffects
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside user state change', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginUser,
        logoutUser,
        upateUserProfile,
        providerLogIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;