# miptleha-http

Command-line http server for static content. Built with pure Node.js without the use third party modules (all code in small [script](miptleha-http.js)).

## Install
globally to run from the command line:

`npm install -g miptleha-http`

or locally:

`npm install --save miptleha-http`

## Usage

`miptleha-http [path] [options]`

`path` Serve the directory as static http (default: present working directory)

## Options

`-p port` Port to use (default: 8080)

`-o` Open browser window after starting server

`-i file` Will be served as the default file to any directory requests (default: `index.html`) 

## References

Project inspired and created from stackoverflow [post](https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http).

I use for my purposes [http-server](https://github.com/http-party/http-server/), but suddenly it stop working (problem with default page).

Another good static http server: [light-server](https://github.com/txchen/light-server).

Sample server in [MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework) with breakdown.


