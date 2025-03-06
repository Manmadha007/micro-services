# Step 1: Use an official Node.js image as a base
FROM node:16-slim

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json for dependency installation
COPY package.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files into the container
COPY . .

# Step 6: Expose the port the app will run on (Express default is 3000)
EXPOSE 3000

# Step 7: Command to run the Node.js application
CMD ["node", "server.js"]
