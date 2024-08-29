# No build here, only dev environment
FROM node:20
EXPOSE 3000

# Setup /app/ with current code
WORKDIR /app
