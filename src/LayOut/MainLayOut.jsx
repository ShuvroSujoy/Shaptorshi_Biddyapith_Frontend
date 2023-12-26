import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';
import Swal from 'sweetalert2'


export const userContent = createContext()
export const handlerContext = createContext()
const MainLayOut = () => {
    const [users, setUsers] = useState(null)
    const auth = getAuth(app);
    const goProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    useEffect(() => {
        const Profile = JSON.parse(localStorage.getItem('profile'))
        setUsers(Profile);
    }, [])

    // sign in google auth start
    const googleSigninHandler = () => {
        signInWithPopup(auth, goProvider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setUsers(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Google SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'

            })
            .catch((error) => {
                const errorMessage = error.message;
                setUsers(errorMessage)
            })
    }
    // sign in google auth end



    // sign in Github auth start

    const GithubSigninHandler = () => {
        signInWithPopup(auth, gitProvider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setUsers(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Github SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'

            })
            .catch((error) => {
                const errorMessage = error.message;
                setUsers(errorMessage)
            })
    }
    // sign in Github auth end


    // Email and Password Sign Up start 
    const onSubmitSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setUsers(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Github SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'
            })
    }
    // Email and Password Sign Up end 

    // Email and Password SignIn start 
    const onSubmitSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                localStorage.setItem('profile', JSON.stringify(user))
                setUsers(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Github SignIn Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/'
            })
    }
    // Email and Password SignIn end 


    // signOut start
    const googleSignOutHandler = () => {
        signOut(auth)
            .then((result) => {
                localStorage.removeItem('profile')
                setUsers(null)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your SignOut Successfull",
                    showConfirmButton: false,
                    timer: 5000
                });
                window.location.href = '/SignIn'
            }).catch((error) => {
                // An error happened.
            });
    }
    // sign)ut end

    // from fillup start


    // from filllup end
    console.log(users);
    return (
        <userContent.Provider value={[users, setUsers]}>
            <handlerContext.Provider value={{ googleSigninHandler, GithubSigninHandler, onSubmitSignUp, onSubmitSignIn, googleSignOutHandler }}>
                <Header />
                <Outlet />
                <Footer />
            </handlerContext.Provider>
        </userContent.Provider>
    );
};

export default MainLayOut;