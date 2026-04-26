#!/bin/bash
# Deployment script for WorldGuessr on ispmanager

echo "Installing dependencies..."
npm install

echo "Building the application..."
npm run build

echo "Starting the application..."
npm start