# Use a small Python image
FROM python:3.11-slim

# Set working directory inside the container
WORKDIR /app

# Copy all files from your local folder to the container
COPY . .

# Expose port 8000
EXPOSE 8000

# Start the Python HTTP server
CMD ["python", "-m", "http.server", "8000"]
