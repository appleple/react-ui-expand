import * as React from 'react';
import Expand from 'ui-expand';

const { useRef, useEffect } = React;

type Callback = (element?: HTMLElement, button?: HTMLButtonElement) => void;

type Props = {
  children: (button: JSX.Element) => JSX.Element;
  button: JSX.Element;
  style?: React.CSSProperties;
  className?: string;
  buttonClassName?: string;
  beforeOpen?: Callback;
  onOpen?: Callback;
  beforeClose?: Callback;
  onClose?: Callback;
}

const def = {
  buttonClassName: "js-expand-btn",
  style: {}
};

export default (props: Props) => {
  const expand = useRef<HTMLDivElement>(null);
  const option = Object.assign({}, props, def);
  const Button = React.cloneElement(props.button, {
    className: option.buttonClassName
  });
  useEffect(() => {
    if (expand.current) {
      new Expand(expand.current, {
        trigger: `.${option.buttonClassName}`,
        beforeOpen: (element, button) => {
          if (props.beforeOpen) {
            if (element && button) {
              props.beforeOpen(element, button);
            }
          }
        },
        onOpen: (element, button) => {
          if (props.onOpen) {
            if (element && button) {
              props.onOpen(element, button);
            }
          }
        },
        beforeClose: (element, button) => {
          if (props.beforeClose) {
            if (element && button) {
              props.beforeClose(element, button);
            }
          }
        },
        onClose: (element, button) => {
          if (props.onClose) {
            if (element && button) {
              props.onClose(element, button);
            }
          }
        }
      });
    }
  }, []);

  const Rendered = props.children(Button);

  return (<div className={props.className} ref={expand}>
    {Rendered}
  </div>);
}