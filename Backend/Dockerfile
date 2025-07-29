# Use Node.js 18 LTS
FROM node:18

WORKDIR /app

# Install netcat for health check
RUN apt-get update && apt-get install -y netcat-openbsd

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Add entrypoint script
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

# Expose port (default 5000, can be overridden)
EXPOSE 5000

ENTRYPOINT ["/app/docker-entrypoint.sh"] 