var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ContainerListTask } from "./style";
import CardTask from "../cardTask/cardTask";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ListGroup } from "react-bootstrap";
var DashboardListTask = function () {
    var listTask = useContext(UserContext).listTask;
    return (_jsx(ContainerListTask, __assign({ className: "d-flex justify-content-center pt-2 vh-100" }, { children: listTask.length > 0 ? (_jsx(ListGroup, __assign({ className: "w-75 mb-2 list-task" }, { children: _jsx(ListGroup.Item, __assign({ className: "list-group" }, { children: listTask.map(function (item, index) { return (_jsx(CardTask, { task: item.tasks, number: index + 1, indice: index }, index)); }) })) }))) : null })));
};
export default DashboardListTask;
