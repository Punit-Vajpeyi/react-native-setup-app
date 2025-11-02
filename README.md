# Sara - React Native Multi-Environment App

A React Native application with support for multiple environments (Development, Staging, Production) on both iOS and Android platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the App](#running-the-app)
- [Building & Distribution](#building--distribution)
- [Version Management](#version-management)
- [Release Notes](#release-notes)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

### General Requirements
- **Node.js**: >= 20.x
- **Yarn**: Package manager (preferred over npm)
- **Git**: Version control

### iOS Development
- **macOS**: Required for iOS development
- **Xcode**: 14.0 or later
- **CocoaPods**: iOS dependency manager
- **Ruby**: 2.6 or later (for Fastlane)
- **Bundler**: Ruby dependency manager
  ```bash
  gem install bundler
  ```
- **Fastlane**: iOS automation tool (installed via Bundler)

### Android Development
- **Android Studio**: Latest stable version
- **Java Development Kit (JDK)**: 17 or later
- **Android SDK**: API Level 33 or later
- **Android NDK**: Version specified in `android/gradle.properties`

### Firebase Setup
- Firebase project with three apps configured:
  - iOS Dev app
  - iOS Stage app
  - iOS Prod app
  - Android Dev app (.dev)
  - Android Stage app (.stage)
  - Android Prod app
- Firebase App Distribution configured with "wemotive" tester group

---

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Sara
   ```

2. **Install Node dependencies**
   ```bash
   yarn install
   ```

3. **Install iOS dependencies**
   ```bash
   cd ios
   bundle install
   bundle exec pod install
   cd ..
   ```

4. **Configure Firebase**
   - Place Firebase configuration files in the appropriate directories:
     - **iOS**: `ios/Firebase/GoogleService-Info-dev.plist`, `GoogleService-Info-stage.plist`, `GoogleService-Info-prod.plist`
     - **Android**: `android/app/src/dev/google-services.json`, `android/app/src/stage/google-services.json`, `android/app/src/prod/google-services.json`

---

## Environment Configuration

The app supports three environments with separate configurations:

### Environment Files

Create the following environment files in the root directory:

**`.env.development`**
```env
ENV=dev
APP_NAME=Sara Dev
API_URL=https://api-dev.sara.health
DEBUG_MODE=true
```

**`.env.staging`**
```env
ENV=stage
APP_NAME=Sara Stage
API_URL=https://api-staging.sara.health
DEBUG_MODE=false
```

**`.env.production`**
```env
ENV=prod
APP_NAME=Sara
API_URL=https://api.sara.health
DEBUG_MODE=false
```

### Bundle Identifiers

- **Production**: `health.sara.app`
- **Development**: `health.sara.app.dev`
- **Staging**: `health.sara.app.stage`

All three apps can be installed simultaneously on the same device.

---

## Running the App

### Development Mode

**Android**
```bash
yarn android:dev      # Development environment
yarn android:stage    # Staging environment
yarn android:prod     # Production environment
```

**iOS**
```bash
yarn ios:dev         # Development environment
yarn ios:stage       # Staging environment
yarn ios:prod        # Production environment
```

### Starting Metro Server
```bash
yarn start
```

---

## Building & Distribution

### Prerequisites for Distribution

1. **Firebase CLI** (for Android)
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Firebase App Distribution** configured for both platforms

3. **App Signing** (Production builds)
   - iOS: Configure signing certificates in Xcode
   - Android: Configure `release.keystore` for production builds

### Distribution Commands

The distribution process automatically:
- Increments the version number (1.0.0 → 1.0.1 → 1.0.2)
- Generates release notes from git commits
- Builds the release binary
- Uploads to Firebase App Distribution to "wemotive" tester group

**Android**
```bash
yarn android:dev:distribute      # Build & distribute Dev to Firebase
yarn android:stage:distribute    # Build & distribute Stage to Firebase
yarn android:prod:distribute     # Build & distribute Prod to Firebase
```

**iOS**
```bash
yarn ios:dev:distribute         # Build & distribute Dev to Firebase
yarn ios:stage:distribute       # Build & distribute Stage to Firebase
yarn ios:prod:distribute        # Build & distribute Prod to Firebase
```

### Manual Build (without distribution)

**Android**
```bash
yarn android:dev:release        # Build Dev release APK
yarn android:stage:release      # Build Stage release APK
yarn android:prod:release       # Build Prod release APK
```

**iOS**
```bash
yarn ios:dev:distribute         # Build & distribute Dev IPA
yarn ios:stage:distribute       # Build & distribute Stage IPA
yarn ios:prod:distribute        # Build & distribute Prod IPA
```

---

## Version Management

### Automatic Version Incrementing

Version numbers are automatically incremented on each distribution build:

- **Format**: `MAJOR.MINOR.PATCH` (e.g., 1.0.0, 1.0.1, 1.0.2)
- **Increment Type**: Patch version (third number)
- **Scope**: Each distribution command increments the version

### Version Files

**iOS**: Version managed by Fastlane in Xcode project settings

**Android**: Version managed in `android/app/version.properties`
```properties
VERSION_CODE=1
VERSION_NAME=1.0.0
```

### Manual Version Update

**Android**: Edit `android/app/version.properties`

**iOS**: Use Xcode or Fastlane commands:
```bash
bundle exec fastlane run increment_version_number bump_type:patch
```

---

## Release Notes

Release notes are automatically generated from git commit history.

### How Release Notes are Fetched

1. **Git Tags**: The system looks for git tags to determine the last release
2. **Environment-Specific Tags**:
   - Dev: Tags containing `-dev` (e.g., `v1.0.0-dev`)
   - Stage: Tags containing `-stage` (e.g., `v1.0.0-stage`)
   - Prod: Tags without suffixes (e.g., `v1.0.0`)
3. **Commit Range**: Collects all commits since the last relevant tag
4. **Format**: Generates a formatted release notes file with:
   - Version number
   - Date and time
   - List of commit messages
   - Total commit count

### Tag Naming Convention

To ensure proper release note generation, follow this tagging convention:

```bash
# Development releases
git tag v1.0.0-dev
git tag v1.0.1-dev

# Staging releases
git tag v1.0.0-stage
git tag v1.0.1-stage

# Production releases
git tag v1.0.0
git tag v1.0.1

# Push tags
git push origin --tags
```

### Release Notes Files

- **Android**: Generated at `android/app/release-notes.txt`
- **iOS**: Generated at `ios/release-notes.txt`

### Example Release Notes

```
Version: 1.0.1
Date: 2025-11-02 10:30
Changes since v1.0.0-dev

What's New:
- Add user authentication feature
- Fix login screen layout issues
- Update API endpoints for production
- Improve error handling in socket connections

Total commits: 4

Generated with Sara Release Notes Generator
```

---

## Troubleshooting

### iOS Build Issues

**CocoaPods errors**
```bash
cd ios
bundle exec pod deintegrate
bundle exec pod install
```

**Xcode scheme not found**
- Open `ios/Sara.xcworkspace` in Xcode
- Ensure schemes are visible: Product → Scheme → Manage Schemes
- Verify "Sara", "SaraDev", and "SaraStage" are checked as shared

**Clean build**
```bash
cd ios
xcodebuild clean -workspace Sara.xcworkspace -scheme Sara
```

### Android Build Issues

**Gradle build fails**
```bash
cd android
./gradlew clean
./gradlew assembleDebug
```

**Firebase configuration missing**
- Verify `google-services.json` files exist in:
  - `android/app/src/dev/`
  - `android/app/src/stage/`
  - `android/app/src/prod/`

**Version increment fails**
- Check `android/app/version.properties` exists and has correct format
- Ensure file has write permissions

### General Issues

**Metro bundler cache**
```bash
yarn start --reset-cache
```

**Node modules**
```bash
rm -rf node_modules
yarn install
```

**Clear all caches**
```bash
# Clear watchman
watchman watch-del-all

# Clear metro
rm -rf $TMPDIR/metro-*

# Clear haste
rm -rf $TMPDIR/haste-*

# Rebuild
yarn install
cd ios && bundle exec pod install && cd ..
```

---

## Project Structure

```
Sara/
├── android/                    # Android native code
│   ├── app/
│   │   ├── src/
│   │   │   ├── dev/           # Dev flavor resources
│   │   │   ├── stage/         # Stage flavor resources
│   │   │   └── prod/          # Prod flavor resources
│   │   ├── build.gradle       # App-level Gradle config
│   │   ├── version.gradle     # Version management script
│   │   └── version.properties # Current version
├── ios/                       # iOS native code
│   ├── Sara/                  # Main app files
│   │   ├── Info.plist        # Prod configuration
│   │   ├── Info-Dev.plist    # Dev configuration
│   │   └── Info-Stage.plist  # Stage configuration
│   ├── Firebase/             # Firebase config files
│   ├── fastlane/            # Fastlane automation
│   │   └── Fastfile         # Build & distribution lanes
│   └── Podfile              # CocoaPods dependencies
├── .env.development         # Dev environment variables
├── .env.staging            # Stage environment variables
├── .env.production         # Prod environment variables
└── package.json            # Node dependencies & scripts
```

---

## Learn More

- [React Native Documentation](https://reactnative.dev)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)
- [Fastlane Documentation](https://docs.fastlane.tools)
- [Firebase App Distribution](https://firebase.google.com/docs/app-distribution)
- [Android Build Flavors](https://developer.android.com/build/build-variants)
- [Xcode Schemes](https://developer.apple.com/documentation/xcode/managing-schemes)

---

## Support

For issues and questions, please contact the development team or create an issue in the project repository.
