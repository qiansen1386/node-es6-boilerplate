#!/bin/sh
# If use Ubuntu Bash on Windows(make sure a linux-ver Node has installed)
# export PATH="$PATH:$(npm bin)"
# If use git bash/mitty. npm bin will return a win-format path
export PATH="./node_modules/.bin:$PATH"
