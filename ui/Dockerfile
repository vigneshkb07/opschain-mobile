FROM node:10.12.0

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./
COPY ./public ./public
COPY ./src ./src

RUN npm install

EXPOSE 3000
CMD npm start