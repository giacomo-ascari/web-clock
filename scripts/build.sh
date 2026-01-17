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

# Build images
podman build --tag $APP_IMAGE -f app.Containerfile

echo "Done"