import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        isAdmin: localStorage.getItem("isAdmin") || false,
        issues: [],
        issueComments: [],
        errMsg: "",
    };

    const [userState, setUserState] = useState(initState);

    function signup(credentials) {
        axios
            .post("/auth/signup", credentials)
            .then((res) => {
                const { user, token } = res.data;
                localStorage.setItem("token", token);
                // localStorage.setItem("isAdmin", user.isAdmin)
                localStorage.setItem("user", JSON.stringify(user));
                setUserState((prevUserState) => ({
                    ...prevUserState,
                    user,
                    token,
                }));
            })
            .catch((err) => handleAuthErr(err.response.data.errMsg));
    }

    function login(credentials) {
        axios
            .post("/auth/login", credentials)
            .then((res) => {
                const { user, token } = res.data;
                console.log("user", user);
                localStorage.setItem("token", token);
                localStorage.setItem("isAdmin", user.isAdmin);
                localStorage.setItem("user", JSON.stringify(user));
                setUserState((prevUserState) => ({
                    ...prevUserState,
                    user,
                    token,
                }));
            })
            .catch((err) => handleAuthErr(err.response.data.errMsg));
    }

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isAdmin");
        setUserState({
            user: {},
            token: "",
            isAdmin: false,
            issues: [],
        });
    }

    function handleAuthErr(errMsg) {
        setUserState((prevState) => ({
            ...prevState,
            errMsg,
        }));
    }

    function resetAuthErr() {
        setUserState((prevState) => ({
            ...prevState,
            errMsg: ``,
        }));
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr,
                initState,
                setUserState,
                userState,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
}
