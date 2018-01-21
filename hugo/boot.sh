#!/bin/sh
cd `dirname $0`
hugo
hugo server -b http://localhost:1313/

