import * as React from 'react';
import { render } from 'react-dom';

import Expand from '../src';

const Demo = () => {
  return (<Expand 
    className="demo" 
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