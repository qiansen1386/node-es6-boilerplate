# NodeJs boilerplate in ES2015

> Usage: Please DO NOT use it. Take it as a reference design and craft your own masterpiece.

Yet another general NodeJs boilerplate in ES2015+.  
For personal use only, licensed under WTFPL(GPL-compatible). 

## Purpose

a. "import" is not supportted by Nodejs right now => Whenever u doubt the future, look for Babel(JS).
b. Snapshot all best practices: [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development),  [The Twelve-Factor App](https://12factor.net/)

## Development Environment

Windows 10 64bit 
Git bash / Bash On Windows
VS code + ESLint extension
Nodejs 6.9.1(latest stable)

> NOTE: Register current npm bin folder into PATH before making use of tools like babel/eslint, 
by executing `. npm-register.sh` or `source npm-register.sh` in your shell.
If u are using BashOnWin then edit the `npm-register.sh` first according to instruction.

## Entries

### 1. index
index is the entry of most of RESTful/~~gRPC~~ apis. 

### 2. admin (TBC)
admin.js is a administration Portal. By design, configuration should be done in eitehr config file or GUI.

### 3. ping (TBC)
A service which should perform a series of system integration tests if last result expires.  
For status-checking service(pingdom) / client user to check status of service, or even HA service keeper.

## Configuration references

According to [The Twelve-Factor App - III. Config](https://12factor.net/config), configuration should strictly been separated from code. Because An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc).

So we put all the settings to environment variables and manage them using [dotenv](https://www.npmjs.com/package/dotenv) lib.

> Note: `.env` files should not be committed.

```ini
SERVER_PORT=3000
SERVER_HOST=localhost
SERVER_SECURE_PORT=443
```

## Commands

> See more @ [package.json](./package.json)

* `npm run dev` launch node dev server.
* `. killallnode.sh` kill all running node instances.

## licensed
![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/WTFPL_logo.svg/140px-WTFPL_logo.svg.png)
