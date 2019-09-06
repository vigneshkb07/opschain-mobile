FROM node:10.12.0

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./.babelrc ./
RUN npm install

EXPOSE 80
CMD npm start