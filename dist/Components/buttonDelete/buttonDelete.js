import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
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
var ButtonDelete = function (_a) {
  var index = _a.index;
  var _b = useContext(UserContext),
    listTask = _b.listTask,
    setListTask = _b.setListTask;
  var handlerButtonDelete = function () {
    var newListTask = listTask.filter(function (_, indice) {
      return indice !== index;
    });
    setListTask(newListTask);
    localStorage.setItem("@listTask", JSON.stringify(listTask));
  };
  return _jsx(
    Button,
    __assign(
      { className: "m-0 p-0 button-delete", onClick: handlerButtonDelete },
      { children: _jsx(BsTrash, {}) }
    )
  );
};
export default ButtonDelete;
