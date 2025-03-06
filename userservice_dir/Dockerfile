# Step 1: Use an official Python image as a base
FROM python:3.9-slim

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy the current directory contents into the container
COPY . .

# Step 4: Install any dependencies (ensure you have a requirements.txt in your project)
RUN pip install --no-cache-dir -r requirements.txt

# Step 5: Expose the port the app will run on (e.g., Flask default is 5000)
EXPOSE 5000

# Step 6: Set the environment variable for Flask app
ENV FLASK_APP=app.py

# Step 7: Command to run the Flask application
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
