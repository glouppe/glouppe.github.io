#!/bin/bash

rm -rf glouppe.github.io
git clone git@github.com:glouppe/glouppe.github.io.git
bundle exec jekyll build -d glouppe.github.io
cd glouppe.github.io
git add .
git commit -a -m "update"
git push origin master