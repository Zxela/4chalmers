FROM node:10-alpine
# Create app directory
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
# Install app dependencies
COPY package*.json ./
# Ensure dependencies are installed as user node
USER node
RUN npm install
# Copy app source code
COPY --chown=node:node . .
#Expose port and start application
EXPOSE 8080
CMD [ "npm", "start" ]