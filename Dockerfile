FROM node:15.3.0-alpine3.12
WORKDIR /app
EXPOSE 3000
ADD . /app
CMD npm start