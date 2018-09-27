#!/bin/bash
#
#
if [ ! -d $APPPATH/node_modules ] || [ ! "$(ls -A $APPPATH/node_modules)" ]; then
    npm install
fi
npm start
