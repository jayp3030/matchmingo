# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory to /app/server/src
WORKDIR /app/server/src

# Copy package.json and package-lock.json to /app/server/src
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code to /app/server/src
COPY . .

# Expose port 3000
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
