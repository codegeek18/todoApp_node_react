FROM node

WORKDIR /usr/app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build
COPY ormconfig.json ./dist/
WORKDIR ./dist

EXPOSE 3500

CMD node src/index.js