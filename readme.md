# How to start use?
````
npx react-native init AwesomeApp --template https://github.com/CrisangerA/react-native-template-clean-arch.git
````

# Why this template? What needs does it solve?
This is a template for react native applications, the main motivation for this template is to use as many native features as possible for the requirements of modern applications such as scalability and maintainability over time. The reason for using native platform features is because they offer better performance than features that run on the JS thread.

Among other things the project includes this plugin https://www.npmjs.com/package/eslint-plugin-hexagonal-architecture that will help you to build the rest of your application with the onion architecture concept https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html.

## Configuration
Global configuration of styles, api routes, navigation and dependency injection are located in src/config.
* Navigation
  - Define type of root navigation
  - If you created a new screen describe it here. Only Screens not Modals
* Style
  - Colors
  - Font Sizes
  - Spacings

## Strucure folders
![Folders](https://user-images.githubusercontent.com/46910469/202018217-40fb3fba-a2f6-4916-b5a5-08713a125d15.png)

## Extra
- Hermes Engine
- Dependency Injection
- [React Native Turbo Modules (New Architecture)](https://reactnative.dev/docs/the-new-architecture/landing-page)
- [Animations between screens](https://wix.github.io/react-native-navigation/docs/style-animations/)
- [Eslint Plugin Hexagonal Architecture](https://www.npmjs.com/package/eslint-plugin-hexagonal-architecture)

## Features
Verify the versions in the package.json
- React Native 70.x
- Typescript
- [React Native Navigation](https://wix.github.io/react-native-navigation/docs/before-you-start/)
- [Tsrynge](https://github.com/Microsoft/tsyringe) Lightweight dependency injection container for JavaScript/TypeScript
- [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [Firebase](https://rnfirebase.io/)
- [React Hook Form](https://react-hook-form.com/get-started#ReactNative)
- [React Query](https://tanstack.com/query/v4/docs/installation)

- [][React Native Keychain](https://github.com/oblador/react-native-keychain) key Keychain Access for React Native

## Implemented software principles
* Single responsibility
* Liskov substitution
* Interface segregation
* Dependency inversion
* Pattern repository

## Screenshots - [Uplabs design](https://www.uplabs.com/posts/login-07f92b8f-d3d4-420f-8f2f-acc38566f989)
![MacBook Pro 16_ - 1](https://user-images.githubusercontent.com/46910469/202013754-936f02d3-33fe-4f57-aa9e-bfb6ea2f4f34.png)


### Troubleshoot
* For Firebase you only need generate google-services.json credentials. See the docs

* The test are made in Linux - Ubuntu 20.04. If you have a problem related with CMAKE as me, You should install this packages: 
  - [sudo apt-get install -y libicu-dev](https://stackoverflow.com/questions/72937332/task-reactandroidhermes-engineconfigurebuildforhermes-failed-react-native-new)
  - [sudo apt-get install -y build-essential](https://stackoverflow.com/questions/6141608/cmake-make-program-not-found)
