FROM node:16.14.0
WORKDIR /app
COPY yarn.lock .
COPY package.json .
RUN yarn 
COPY . ./
ENV PORT 3000
EXPOSE ${PORT}
CMD ["yarn", "dev"]