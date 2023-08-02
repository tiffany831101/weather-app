FROM node:18 as build

WORKDIR /page

COPY . .

RUN npm install

RUN npm run build

FROM nginx

COPY --from=build /page/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

