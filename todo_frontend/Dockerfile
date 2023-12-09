FROM node:12
WORKDIR /todo_frontend
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "serve"]
