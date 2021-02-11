import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
    let { path, redirectTo, component: C, isAdmin, token, ...rest } = props;

    useEffect(() => {
        isAdmin = props.isAdmin;
    }, [props]);

    // token ?
    //     <Route path={path} render={() => <C {...rest}/>}/> :
    //     <Redirect to={redirectTo}/>

    console.log("isAdmin", isAdmin);
    console.log("token", token);
    if (token) {
        return <Route path={path} render={() => <C {...rest} />} />;
    } else if (token && isAdmin === false) {
        console.log("failed");
        return <Redirect to={redirectTo} />;
    }
}
