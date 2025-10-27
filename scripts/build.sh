#!/bin/bash
set -e

# Load and export environment variables from dokploy.env
set -a  # automatically export all variables
source ./env/dokploy.env
set +a  # stop automatically exporting

# Set build-time environment variables
export PUBLIC_BUILD_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
export PUBLIC_VERSION="$(git rev-parse --short HEAD)"

# Run the build
pnpm run build
