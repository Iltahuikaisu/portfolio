FROM node:12.18.1-alpine3.10
WORKDIR /mydir
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm","start"]
