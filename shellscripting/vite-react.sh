#!/bin/bash
echo 'Making React Dev Environment for you'
npm create vite@latest  proj1  -y
echo 'go in project folder'
cd proj1
echo 'Installing all dependencies'
npm i
echo 'Starting the server'
npm run dev