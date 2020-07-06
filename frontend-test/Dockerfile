FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.17.1-alpine As prod-stage

COPY --from=build /app/dist/test-tecnico /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]