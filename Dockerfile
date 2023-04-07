FROM node:16.14.0 AS dev
WORKDIR /app
COPY yarn.lock .
COPY package.json . 
RUN yarn 
COPY . ./
RUN yarn tsc
ENV PORT 3000
EXPOSE ${PORT}


FROM node:16.14.0 AS build
WORKDIR /app
COPY yarn.lock .
COPY package.json . 
RUN yarn 
COPY . ./
ENV NODE_ENV production
RUN yarn tsc


FROM node:16.14.0 AS prod
WORKDIR /app
COPY yarn.lock .
COPY package.json . 
RUN yarn --prod
COPY --from=build ./app/dist ./
ENV PORT 3000
EXPOSE ${PORT}
CMD ["node", "./server.js"]