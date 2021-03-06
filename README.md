# miptleha-http

Command-line http server for static content (now with php support). Built with pure Node.js without the use third party modules (all code in small [script](miptleha-http.js)).

## Install
globally to run from the command line:

`npm install -g miptleha-http`

or locally:

`npm install --save miptleha-http`

## Usage

`miptleha-http [path] [options]`

`path` Serve the directory as static http (default: present working directory)

`-p port` Port to use (default: 8080)

`-d` Do not open browser window after starting server

`-i file` Will be served as the default file to any directory requests (default: `index.html`)

Without parameters, the server will be launched in the current folder and default browser will open index.html.

## Test

The project contains a test that verifies the functionality of the module for static HTML with individual styles and scripts, as well as the execution of php scripts. To run the tests, first download the project yourself locally and run the tests:
```
git clone https://github.com/miptleha/miptleha-http.git
cd miptleha-http
npm test
```

## References

Project inspired and created from stackoverflow [post](https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http).

I use for my purposes [http-server](https://github.com/http-party/http-server/), but suddenly it stop working (problem with default page).

Another good static http server: [light-server](https://github.com/txchen/light-server).

Sample server in [MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework) with breakdown.


