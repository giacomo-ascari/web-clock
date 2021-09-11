FROM node:16-alpine

ENV PORT=2607

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD npm start