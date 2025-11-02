#!/bin/bash

# Script to copy the correct Firebase GoogleService-Info.plist based on the build configuration
# This script should be added as a build phase in Xcode

ENVIRONMENT=""

# Determine environment based on the configuration
if [ "${CONFIGURATION}" == "Debug" ]; then
    ENVIRONMENT="dev"
elif [[ "${CONFIGURATION}" == *"Stage"* ]]; then
    ENVIRONMENT="stage"
elif [[ "${CONFIGURATION}" == *"Release"* ]] || [[ "${CONFIGURATION}" == *"Prod"* ]]; then
    ENVIRONMENT="prod"
else
    ENVIRONMENT="dev"
fi

echo "🔧 Configuration: ${CONFIGURATION}"
echo "🌍 Environment: ${ENVIRONMENT}"

# Path to the source plist
SOURCE_PLIST="${PROJECT_DIR}/Firebase/GoogleService-Info-${ENVIRONMENT}.plist"
DEST_PLIST="${BUILT_PRODUCTS_DIR}/${PRODUCT_NAME}.app/GoogleService-Info.plist"

# Copy the plist
if [ -f "$SOURCE_PLIST" ]; then
    echo "✅ Copying GoogleService-Info.plist from ${ENVIRONMENT} environment"
    cp "$SOURCE_PLIST" "$DEST_PLIST"
else
    echo "❌ Error: GoogleService-Info.plist not found for ${ENVIRONMENT} environment"
    echo "Expected location: $SOURCE_PLIST"
    exit 1
fi

echo "✅ Firebase configuration copied successfully"
