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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Card, Row, Col } from "react-bootstrap";
import { StyleCard } from "./style";
import ButtonDelete from "../buttonDelete/buttonDelete";
var CardTask = function (_a) {
    var task = _a.task, number = _a.number, indice = _a.indice;
    return (_jsx(StyleCard, { children: _jsx(Card, __assign({ className: "mt-1 card-complete" }, { children: _jsxs(Card.Body, { children: [_jsxs(Row, { children: [_jsx(Col, __assign({ xs: 8 }, { children: _jsxs(Card.Title, __assign({ className: "text-start" }, { children: ["Tarefa - ", number] })) })), _jsx(Col, __assign({ xs: 4, className: "text-end" }, { children: _jsx(ButtonDelete, { index: indice }) }))] }), _jsx(Card.Text, __assign({ className: "text-start" }, { children: task }))] }) })) }));
};
export default CardTask;
