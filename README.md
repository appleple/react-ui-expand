# ui-expand

![](./assets/example.gif)

## Install

```
$ npm install react-ui-expand --save
```

## Usage

```js
import * as React from 'react';
import { render } from 'react-dom';

import Expand from '../src';

const Demo = () => {
  return (<Expand 
    className="hoge" 
    button={<button>Open!!</button>}
  >{(button) => {
    return(<div>
      {button}
      This Element will expand to fullscreen!!
    </div>);
  }}
  </Expand>)
};

render(<Demo/>, document.getElementById('demo'));
```

## Props

### beforeOpen

### onOpen

### beforeClose

### onClose

### CDN

```html
<script src="https://unpkg.com/ui-expand@0.0.3/js/ui-expand.min.js"></script>
```

## Usage

```html
<div class="js-expand">
  <button class="js-expand-btn">expand</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, delectus vitae voluptas, corrupti ea expedita velit veniam accusamus repellat ex non esse ipsa harum laudantium veritatis excepturi, sapiente qui. Excepturi.</p>
  </div>
</div>
```

```js
new Expand('.js-expand', {
  trigger: '.js-expand-btn' //it should be inside `.js-expand`
});
```

## Event

```js
new Expand('.js-expand', {
  trigger: '.js-expand-btn',
  beforeOpen: (element, trigger) => { //before expand

  },
  onOpen: (element, trigger) => { // after expand

  },
  beforeClose: (element, trigger) => { // before close

  },
  onClose: (element, trigger) => { // after close

  }
});
```