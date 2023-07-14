import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Container, Navbar } from "react-bootstrap";
import { ContainerLogin } from "./style";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { GiNotebook } from "react-icons/gi";
import { Check2Square, BagCheckFill } from "react-bootstrap-icons";
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
var HomePage = function () {
  var start = useContext(UserContext).start;
  return _jsxs(
    ContainerLogin,
    __assign(
      { className: "d-flex flex-column h-100 m-0" },
      {
        children: [
          _jsxs(
            Navbar,
            __assign(
              { className: "navbar-inicial  justify-content-center" },
              {
                children: [
                  " ",
                  _jsx(
                    "p",
                    __assign(
                      { className: "title-iniciar m-0" },
                      { children: " Notepad " }
                    )
                  ),
                ],
              }
            )
          ),
          _jsx(
            Container,
            __assign(
              { className: "d-flex align-items-center h-100" },
              {
                children: _jsxs(
                  Container,
                  __assign(
                    { className: "d-md-flex " },
                    {
                      children: [
                        _jsxs(
                          Container,
                          __assign(
                            {
                              className:
                                "container-iniciar  d-flex justify-content-center flex-column h-100",
                            },
                            {
                              children: [
                                _jsxs(
                                  "p",
                                  __assign(
                                    { className: "text-white " },
                                    {
                                      children: [
                                        "Anote suas ideias ",
                                        _jsx(Check2Square, {
                                          className: "check-icon",
                                        }),
                                        " ",
                                      ],
                                    }
                                  )
                                ),
                                _jsxs(
                                  "p",
                                  __assign(
                                    { className: "text-white" },
                                    {
                                      children: [
                                        " ",
                                        "Armazene informa\u00E7\u00F5es tempor\u00E1rias",
                                        " ",
                                        _jsx(Check2Square, {
                                          className: "check-icon",
                                        }),
                                        " ",
                                      ],
                                    }
                                  )
                                ),
                                _jsxs(
                                  "p",
                                  __assign(
                                    { className: "text-white " },
                                    {
                                      children: [
                                        " ",
                                        "Monte sua lista de afazeres",
                                        " ",
                                        _jsx(Check2Square, {
                                          className: "check-icon",
                                        }),
                                        " ",
                                      ],
                                    }
                                  )
                                ),
                                _jsxs(
                                  "p",
                                  __assign(
                                    { className: "text-finish" },
                                    {
                                      children: [
                                        " ",
                                        "Todas as suas tarefas em um s\u00F3 lugar",
                                        _jsx(BagCheckFill, {
                                          className: "check-full",
                                        }),
                                        " ",
                                      ],
                                    }
                                  )
                                ),
                              ],
                            }
                          )
                        ),
                        _jsx(
                          Container,
                          __assign(
                            {
                              className:
                                "d-flex align-items-center justify-content-md-center h-md-100",
                            },
                            {
                              children: _jsxs(
                                Container,
                                __assign(
                                  {
                                    className:
                                      "d-flex align-items-center justify-content-md-center flex-md-column h-100 p-0",
                                  },
                                  {
                                    children: [
                                      _jsx(GiNotebook, {
                                        className:
                                          "icon-iniciar d-none d-md-block",
                                      }),
                                      _jsx(
                                        Button,
                                        __assign(
                                          {
                                            variant: "primary",
                                            className: "button-iniciar",
                                            onClick: start,
                                          },
                                          { children: "Iniciar" }
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
              }
            )
          ),
        ],
      }
    )
  );
};
export default HomePage;
