FROM node:8.9
ENV NODE_ENV production
ENV APPPATH /usr/src/app/

RUN apt-get update --fix-missing && apt-get install -y dos2unix
RUN npm install -g webpack webpack-cli

ADD ./start.sh /opt/dev-tools/
RUN chmod +x /opt/dev-tools/start.sh

RUN dos2unix /opt/dev-tools/start.sh
WORKDIR $APPPATH
