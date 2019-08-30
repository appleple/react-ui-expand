import * as React from 'react';
declare type Callback = (element?: HTMLElement, button?: HTMLButtonElement) => void;
declare type Props = {
    children: (button: JSX.Element) => JSX.Element;
    button: JSX.Element;
    style?: React.CSSProperties;
    className?: string;
    buttonClassName?: string;
    beforeOpen?: Callback;
    onOpen?: Callback;
    beforeClose?: Callback;
    onClose?: Callback;
};
declare const _default: (props: Props) => JSX.Element;
export default _default;
