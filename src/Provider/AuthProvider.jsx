// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/config.firebase";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const createUser = (email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, email, password);
    // }

    // const signIn = (email, password) => {
    //     setLoading(true);
    //     return signInWithEmailAndPassword(auth, email, password);
    // }

    // const handleUpdateProfile = (name, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: photo
    //     })
    // }

    // const logOut = () => {
    //     setLoading(true);
    //     return signOut(auth);
    // }

    // useEffect(() => {
    //     const unSubscribes = onAuthStateChanged(auth, currUser => {
    //         // const userEmail = currUser?.email || users?.email;
    //         // const loggedUser = { email: userEmail };
    //         setUsers(currUser);
    //         setLoading(false);
    //     })

    //     return () => {
    //         unSubscribes();
    //     }
    // }, [])
    

    const login = () => {
        // Implement your login logic here (setting tokens, etc.)
        setIsLoggedIn(true);
    };

    const logout = () => {
        // Implement your logout logic here (clearing tokens, etc.)
        setIsLoggedIn(false);
    };

    const authInfo = {
        // users,
        // createUser,
        // signIn,
        // handleUpdateProfile,
        // logOut,
        // loading,
        login,
        logout,
        isLoggedIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;