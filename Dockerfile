FROM node:8.9.3-alpine

WORKDIR /app

COPY index.js /app
COPY package.json /app

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
