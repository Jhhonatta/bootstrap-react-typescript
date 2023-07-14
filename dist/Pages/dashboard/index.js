import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContainerDashboard } from "./style";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import ModalAddTask from "../../Components/modalAddTask/modalAddTask";
import DashboardListTask from "../../Components/containerListTask/containerListTask";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var Dashboard = function () {
  var exit = useContext(UserContext).exit;
  return _jsxs(
    ContainerDashboard,
    __assign(
      { className: "vh-100" },
      {
        children: [
          _jsxs(
            Navbar,
            __assign(
              { expand: "sm", className: "p-3 m-0 navbar" },
              {
                children: [
                  _jsx(
                    Navbar.Brand,
                    __assign(
                      { className: "mr-0 col-6 navbar-brand" },
                      { children: "Notepad" }
                    )
                  ),
                  _jsx(Navbar.Toggle, { "aria-controls": "navbar-nav" }),
                  _jsx(
                    Navbar.Collapse,
                    __assign(
                      { id: "navbar-nav" },
                      {
                        children: _jsxs(
                          Nav,
                          __assign(
                            {
                              className: "w-100 d-flex justify-content-between",
                            },
                            {
                              children: [
                                _jsx(ModalAddTask, {}),
                                _jsx(
                                  Button,
                                  __assign(
                                    {
                                      onClick: exit,
                                      className: "custom-button",
                                    },
                                    { children: "Sair" }
                                  )
                                ),
                              ],
                            }
                          )
                        ),
                      }
                    )
                  ),
                ],
              }
            )
          ),
          _jsx(DashboardListTask, {}),
        ],
      }
    )
  );
};
export default Dashboard;
