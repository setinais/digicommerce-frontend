FROM node:lts-alpine as build
LABEL stage=intermediate
WORKDIR /home/node/app
COPY ./code/package*.json ./code/yarn*.lock ./
ENV NODE_ENV=development
RUN yarn install && yarn cache clean --force
COPY ./code ./
ENV NODE_ENV=production
RUN yarn build

FROM nginx:1.23.1-alpine as production
LABEL maintainer="DigiCommerce"
ENV NGINX_ROOT=/app
WORKDIR /app
COPY --from=build /home/node/app/build ./
COPY ./nginx/docker-entrypoint.d/*.sh /docker-entrypoint.d/
COPY ./nginx/*.template /etc/nginx/templates/
RUN rm /etc/nginx/conf.d/default.conf && chmod +x /docker-entrypoint.d/*.sh
CMD [ "nginx", "-g", "daemon off;" ]
