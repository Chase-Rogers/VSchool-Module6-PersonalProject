import React, { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth.js";
import AddExercise from "./components/AddExercise";
import GenerateRoutine from "./components/GenerateRoutine";
import ExerciseRoutine from "./components/ExerciseRoutine";
import ProtectedRoute from "./components/protectedRoute";
import { UserContext } from "./context/UserProvider.js";

export default function App() {
    const { user, token, isAdmin, logout } = useContext(UserContext);

    useEffect(() => {}, [isAdmin]);

    console.log(user.isAdmin);

    return (
        <div className="app">
            {token && <Navbar logout={logout} />}
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => {
                        if (token && isAdmin === true) {
                            return <Redirect to="/AddExercise" />;
                        } else if (token && isAdmin === false) {
                            return <Redirect to="/generateRoutine" />;
                        } else {
                            return <Auth />;
                        }
                    }}
                />
                <ProtectedRoute
                    path="/AddExercise"
                    component={AddExercise}
                    redirectTo="/"
                    token={token}
                    isAdmin={isAdmin}
                />
                <ProtectedRoute
                    path="/generateRoutine"
                    component={GenerateRoutine}
                    redirectTo="/"
                    token={token}
                    isAdmin={isAdmin}
                />
                <ProtectedRoute
                    path="/exerciseRoutine"
                    component={ExerciseRoutine}
                    redirectTo="/"
                    token={token}
                    isAdmin={isAdmin}
                />
            </Switch>
        </div>
    );
}
