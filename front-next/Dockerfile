FROM node:18-alpine 

RUN mkdir /app
ADD . /app

WORKDIR /app
RUN yarn install && yarn build

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]