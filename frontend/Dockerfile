FROM node:14.12.0-alpine as build

WORKDIR /frontend
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci --silent
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]