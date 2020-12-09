FROM node:15.3.0-alpine3.10
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]