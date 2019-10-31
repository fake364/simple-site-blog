FROM node:latest
RUN mkdir /server
WORKDIR /server
EXPOSE 3000
COPY . /server
RUN npm install

CMD [ "npm", "start" ]
