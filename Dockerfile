FROM alpine:latest


RUN npm install -g

# create destination directory
WORKDIR /

# Bundle app source
COPY . .

EXPOSE 4000