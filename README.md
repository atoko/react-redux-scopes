# React-Redux-Scope


## Installation
`npm install react-redux-scope`

## Example
```javascript
import React from 'react'
import { container, inputScope } from 'react-redux-scope'

const scopes = {
    input_1: new inputScope("Input Label")
}

class ConnectedInput extends generateContainer("Name", scopes) { 
    render() {
        let { input_1 } = this.props;
    	return <input { ...input_1 } />
    }
}

export default ConnectedInput

```

## API

### inputScope
### serviceScope
### scope

### generateContainer
