FROM node:10.12.0

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm install

ENTRYPOINT [ "npm" ]