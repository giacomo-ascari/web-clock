#!/usr/bin/env bash

# Load environment variables
if test -f .env; then
    echo ".env file found."
else
    echo ".env file not found. Please create a .env file based on .env.example."
    exit 1
fi

source .env

APP_IMAGE="$APP_NAME-image"
APP_CONTAINER="$APP_NAME-container"

# Create or recreate pod
if podman pod exists $POD_NAME; then
    echo "Pod already exists. Re-creating pod..."
    podman pod rm -f $POD_NAME
else
    echo "Creating pod..."
fi

podman pod create --name $POD_NAME -p $APP_PORT:80 --restart=unless-stopped

# Run containers
echo "Running pod..."
podman run --pod $POD_NAME --name $APP_CONTAINER -dt $APP_IMAGE

echo "Done"