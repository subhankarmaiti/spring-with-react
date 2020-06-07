# Webapp with Spring Boot and React

Spring boot and react setup to deploy the application to real time server. It gets up and run quickly and very useful for continuous deployment with github function.

## Goal:

- Easily deploy to test and production
- use the create-react-app feature
  - Hot reload during development
  - Built in ES6 to ES5 transpile
  - Optimized production build

## Getting started

#### Step 1 (Create Project)

create a spring boot project with https://start.spring.io/ and add all the dependency you need.

#### Step 2 (Create Controller)

Currently spring boot project comes with no default controller. lets create a basic hello controller inside the directory /src/main/java/com/subhankar/springreact.

```java
package com.subhankar.springreact;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, you hit the server at " + new Date() ;
    }
}
```

#### Step 3 (Run)

Now you can run the application using command

```
$ mvn spring-boot:run
```

If you get an error like "mvn not found".
Open up google and search "How to install maven" and install :)

#### Step 4 (Check)

Hope you have successfully made the last step.
open http://localhost:8080/api/hello in your browser.
you will get something like--

```
Hello, you hit the server at Sun Jun 07 23:33:44 IST 2020
```

#### Step 5 (Adding react)

If you are using node 10 or more use `npx create-react-app app` command to generate react app inside the root directory of the project.

Otherwise,

- install create-react-app locally by `npm i -g create-react-app`. use `sudo` for linux and mac.
- Use `create-react-app app` to generate react app inside the root directory of the project.

#### Step 6 (Adding proxy to react)

First install `http-proxy-middleware` by running the command `npm i http-proxy-middleware` inside the `/app` directory.

To make rest api call simple create a `setupProxy.js` file inside the react `/app/src` directory with the below content.

```javascript
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
```

#### Step 7 (Optional)

Install axios by running the command `npm i axios`
replace the below code in `App.js` file.

```javascript
import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
export default class App extends Component {
  state = {
    message: '',
  };
  componentDidMount() {
    axios.get('/api/hello').then(({ data }) => {
      this.setState({ message: data });
    });
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{this.state.message}</p>
        </header>
      </div>
    );
  }
}
```
