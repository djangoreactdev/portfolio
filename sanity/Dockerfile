
FROM node:18-alpine 

RUN mkdir /app
ADD . /app

WORKDIR /app
RUN yarn install && yarn build

EXPOSE 3333

CMD ["yarn", "start"]