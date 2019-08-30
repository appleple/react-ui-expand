# react-ui-expand

![](./assets/example.gif)

## Install

```
$ npm install react-ui-expand --save
```

## Usage

```js
import * as React from 'react';
import { render } from 'react-dom';

import Expand from 'react-ui-expand';

const Demo = () => {
  return (<Expand 
    className="hoge" 
    button={<button>Open!!</button>}
    >
    {(button) => {
      return(<div>{button}
        This Element will expand to fullscreen!!
      </div>);
    }}
  </Expand>)
};

render(<Demo/>, document.getElementById('demo'));
```

## Props

Common props you may want to specify include:

- `beforeOpen` - subscribe to before open events
- `onOpen` - subscribe to open events
- `beforeClose` - subscribe to before close events
- `onClose` - subscribe to close events
- `className` - apply a className to the control
- `button` - jsx element to trigger events 
- `children` - callback function to return jsx element which includes the button element
