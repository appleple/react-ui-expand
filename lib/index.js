"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ui_expand_1 = require("ui-expand");
var useRef = React.useRef, useEffect = React.useEffect;
var def = {
    buttonClassName: "js-expand-btn",
    style: {}
};
exports.default = (function (props) {
    var expand = useRef(null);
    var option = Object.assign({}, props, def);
    var Button = React.cloneElement(props.button, {
        className: option.buttonClassName
    });
    useEffect(function () {
        if (expand.current) {
            new ui_expand_1.default(expand.current, {
                trigger: "." + option.buttonClassName,
                beforeOpen: function (element, button) {
                    if (props.beforeOpen) {
                        if (element && button) {
                            props.beforeOpen(element, button);
                        }
                    }
                },
                onOpen: function (element, button) {
                    if (props.onOpen) {
                        if (element && button) {
                            props.onOpen(element, button);
                        }
                    }
                },
                beforeClose: function (element, button) {
                    if (props.beforeClose) {
                        if (element && button) {
                            props.beforeClose(element, button);
                        }
                    }
                },
                onClose: function (element, button) {
                    if (props.onClose) {
                        if (element && button) {
                            props.onClose(element, button);
                        }
                    }
                }
            });
        }
    }, []);
    var Rendered = props.children(Button);
    return (React.createElement("div", { className: props.className, ref: expand }, Rendered));
});
//# sourceMappingURL=index.js.map