# Use the official Node.js 14 image as base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Expose the port that your app runs on
EXPOSE 3001

# Command to run your app
CMD ["node", "day5.js"]
