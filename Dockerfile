FROM node:14.17.1

# Copy App Folder
WORKDIR /app
COPY ./ /app

# Build production
# RUN npm cache clean --force
# RUN npm install
# RUN npm run build

# Start the server
CMD ["node", "server"]