import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import HomePage from "../Pages/homePage";
import Dashboard from "../Pages/dashboard";
import { Route, Routes } from "react-router-dom";
var Way = function () {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(Dashboard, {}) })] }));
};
export default Way;
