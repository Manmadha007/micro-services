# Step 1: Use an official OpenJDK image as a base
FROM openjdk:11-jre-slim

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the Spring Boot JAR file (assumes you've built the JAR file)
COPY target/payment-service.jar /usr/src/app/payment-service.jar

# Step 4: Expose the port the app will run on (e.g., Spring Boot default is 8080)
EXPOSE 8080

# Step 5: Command to run the Spring Boot application
CMD ["java", "-jar", "payment-service.jar"]
