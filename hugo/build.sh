#!/bin/sh
cd `dirname $0`
hugo
cp -r public/* ../docs/

