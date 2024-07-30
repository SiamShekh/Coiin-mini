import { useSelector } from "react-redux";
import { AppRoot } from "../../redux/store/ReduxStore";
import { Navigate } from "react-router-dom";
import React from "react";

const RouteProtector: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const user = useSelector((state: AppRoot) => state.persistedReducer);
    if (user.email) {
        return children;
    } else {
        return <Navigate to={"/"} replace/>
    }
};

export default RouteProtector;