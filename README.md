# dynamic-react-navbar

> some navbars for react-js

[![NPM](https://img.shields.io/npm/v/dynamic-react-navbar.svg)](https://www.npmjs.com/package/dynamic-react-navbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dynamic-react-navbar
```

## Usage

```jsx
import React, { Component } from 'react'

import Navbar from 'dynamic-react-navbar'
import 'dynamic-react-navbar/dist/index.css'

class Example extends Component {
  render() {
    const links = [
      { caption: 'Home', path: '/', key: '1' },
      { caption: 'About', path: '/about', key: '2' },
      { caption: 'Contact', path: '/Contact', key: '3' },
    ];
    return <Navbar links={links} />
  }
}
```

## License

MIT © [mjkatgithub](https://github.com/mjkatgithub)
