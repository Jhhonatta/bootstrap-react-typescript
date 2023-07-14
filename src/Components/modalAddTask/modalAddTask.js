import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from "react/jsx-runtime";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ContainerModal } from "./style";
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
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var ModalAddTask = function () {
  var _a = useContext(UserContext),
    setTask = _a.setTask,
    task = _a.task,
    listTask = _a.listTask,
    setListTask = _a.setListTask;
  var _b = useState(false),
    showModal = _b[0],
    setShowModal = _b[1];
  var _c = useState(1),
    numberTask = _c[0],
    setNumberTask = _c[1];
  var handlerControl = function (event) {
    event.preventDefault();
    setNumberTask(numberTask + 1);
    setListTask(
      __spreadArray(
        __spreadArray([], listTask, true),
        [
          {
            id: numberTask,
            tasks: task,
          },
        ],
        false
      )
    );
    setShowModal(false);
  };
  return _jsxs(_Fragment, {
    children: [
      _jsx(
        Button,
        __assign(
          {
            variant: "primary",
            onClick: function () {
              return setShowModal(true);
            },
            style: { backgroundColor: "rgb(255, 182, 193)", border: "none" },
          },
          { children: "Adicionar tarefa" }
        )
      ),
      _jsx(
        Modal,
        __assign(
          {
            show: showModal,
            onHide: function () {
              return setShowModal(false);
            },
            centered: true,
          },
          {
            children: _jsxs(
              ContainerModal,
              __assign(
                { className: "estouaqui" },
                {
                  children: [
                    _jsx(
                      Modal.Header,
                      __assign(
                        { closeButton: true, className: "" },
                        {
                          children: _jsx(
                            Modal.Title,
                            __assign(
                              { className: "p-0" },
                              { children: "Nova tarefa" }
                            )
                          ),
                        }
                      )
                    ),
                    _jsx(Modal.Body, {
                      children: _jsxs(
                        Form,
                        __assign(
                          { onSubmit: handlerControl },
                          {
                            children: [
                              _jsx(Form.Group, {
                                children: _jsx(Form.Control, {
                                  type: "text",
                                  placeholder: "Digite sua nova tarefa",
                                  onChange: function (event) {
                                    return setTask(event.target.value);
                                  },
                                }),
                              }),
                              _jsx(
                                Form.Group,
                                __assign(
                                  {
                                    className:
                                      "p-0 d-flex justify-content-center mt-1",
                                  },
                                  {
                                    children: _jsx(
                                      Button,
                                      __assign(
                                        {
                                          variant: "primary",
                                          type: "submit",
                                          className: "adicionar-button",
                                        },
                                        { children: "Adicionar" }
                                      )
                                    ),
                                  }
                                )
                              ),
                            ],
                          }
                        )
                      ),
                    }),
                  ],
                }
              )
            ),
          }
        )
      ),
    ],
  });
};
export default ModalAddTask;
