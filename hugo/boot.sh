#!/bin/sh
cd `dirname $0`
hugo
hugo server -w

