FROM node:17-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent

RUN chown node:node node_modules/

COPY . .

EXPOSE 3000

CMD ["npm","start"]