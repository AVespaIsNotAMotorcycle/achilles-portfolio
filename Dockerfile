FROM node:18 as build-stage
RUN mkdir /portfolio
RUN mkdir /portfolio/build
RUN apt-get update
ADD ./server.js /portfolio/
ADD ./build/ /portfolio/build
WORKDIR /portfolio/
RUN npm install express

CMD node server.js
