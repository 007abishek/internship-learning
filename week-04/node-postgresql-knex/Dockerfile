# Use Node base image
FROM node:18-alpine

# Create app directory inside container
WORKDIR /app

# Copy dependency files first (cache optimization)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project
COPY . .

# Expose API port
EXPOSE 8081

# Start the server
CMD ["npm", "run", "dev"]
