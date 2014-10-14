[![Buildstatus](https://travis-ci.org/onnia/hello-node-js.svg)](https://travis-ci.org/onnia/hello-node-js)

This is my readme file! Yey!

Another line to read me file


Instructions for installing travis to your project

Navigate to https://travis-ci.org,
Login with your github credentials,
Sync your reposity with travis
Add .travis.yml file to the root of this directory

with following config:

language: node_js
node_js:
  - "0.11"
  - "0.10"
  - "0.8"
  - "0.6"

Now every time you push to your repo testing is done!

Then add badge to the readme file of your project from icon located right top corner