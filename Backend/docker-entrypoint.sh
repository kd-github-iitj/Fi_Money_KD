#!/bin/sh

# Wait for MongoDB to be ready
until nc -z mongo 27017; do
  echo "Waiting for MongoDB..."
  sleep 1
done

# Always seed the database
node seed.js

# Start the backend server
npm start 