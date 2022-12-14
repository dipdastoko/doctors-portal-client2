import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to the firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const destination = location?.state?.from.pathname || '/';
                navigate(destination);

            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    };

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setAuthError('');
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from.pathname || '/';
                navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe
    }, [auth]);

    useEffect(() => {
        fetch(`https://hidden-atoll-00158.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
    }, [user.email]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://hidden-atoll-00158.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout
    }
}
export default useFirebase;