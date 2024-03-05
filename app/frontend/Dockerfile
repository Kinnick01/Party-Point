FROM node:18-alpine3.14
WORKDIR /frontend
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]