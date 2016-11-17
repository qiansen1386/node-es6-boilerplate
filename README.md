# Express boilerplate in ES2015

> Warning: Please DONT use it.

A general Express boilerplate in ES2015+.  
For personal use only, licensed under WTFPL(GPL-compatible). 

## Purpose

Why "import" is not supportted by Nodejs? => Whenever u doubt the future, look for Babel.

## Development Environment

Windows 10 64bit 
Git bash
VS code + ESLint extension
Nodejs 6.9.1

> NOTE: Register current npm bin folder into PATH before making use of tools like babel/eslint, 
by executing `source npm-register.sh` in your git bash.

## Entries

### 1. index
index is the entry of most of RESTful/~~gRPC~~ apis. 

### 2. admin (TBC)
admin.js is a administration Portal. By design, configuration should be done in eitehr config file or GUI.

### 3. ping (TBC)
A service which will perform a series of system integration tests(SIT) if last result expires.  
For our status-checking service(pingdom) / client user to check status of service, or even HA service keeper.

## Configuration references

```JSON
 //Server Configuration:
 "server": {
    "domain": "localhost",
    "port": 3000 
  },
```

## licensed
![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/WTFPL_logo.svg/140px-WTFPL_logo.svg.png)
