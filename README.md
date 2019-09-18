# miptleha-http

Command-line http server. Supports only static content (both GET and POST methods).

## Install
globally, to run from the command line

`npm install -g miptleha-http`

or locally, to use as Node.JS module

`npm install --save miptleha-http`

## Usage

`miptleha-http [path] [options]`

## Options

`-p port` Port to use (default: 8080)

`-o` Open browser window after starting server

`-i file` Will be served as the default file to any directory requests (default: `index.html`) 

## References

Project is inspired and created from stackoverflow [post](https://stackoverflow.com/questions/5050851/best-lightweight-web-server-only-static-content-for-windows).

I use for my purposes [http-server](https://github.com/http-party/http-server/), but suddenly it stop working (problem with default page).

Another good static http server: [light-server](https://github.com/txchen/light-server).
