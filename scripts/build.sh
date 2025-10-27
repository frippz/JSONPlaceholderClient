#!/bin/bash
set -e

# Set build-time environment variables
source ./env/dokploy.env
export PUBLIC_BUILD_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
export PUBLIC_VERSION="$(git rev-parse --short HEAD)"

# Run the build
pnpm run build
