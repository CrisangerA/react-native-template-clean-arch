# How to start use?
````
npx react-native init AwesomeApp --template https://github.com/CrisangerA/react-native-template-clean-arch.git
````
I recomend this library after init project. [React Native Rename](https://github.com/junedomingo/react-native-rename)

### For create new components:
````
yarn component nameOfYourComponent
````
### For create new modules:
````
yarn module nameOfYourModule
````

# Why this template? What needs does it solve?
The main function of this template is to meet the requirements of modern applications in terms of scalability and maintainability over time. That is why it was implemented with the concept of clean architecture (Onion architecture).

The main motivation for this template is to use as many native features as possible for the requirements of modern applications such as scalability and maintainability over time. The reason for using native platform features is because they offer better performance than features that run on the JS thread.

Among other things the project includes this plugin https://www.npmjs.com/package/eslint-plugin-hexagonal-architecture that will help you to build the rest of your application with the onion architecture concept https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html.

#### Clean Architecture Resourses. Video and Blog:
- [The Clean Architecture — Beginner’s Guide](https://betterprogramming.pub/the-clean-architecture-beginners-guide-e4b7058c1165)
- [Mejora tu código aplicando Clean Architecture](https://www.youtube.com/watch?v=bdnpXzgj1oY)
- [Clean Architecture: La mejor forma de escalar y mantener tu código](https://www.youtube.com/watch?v=y3MWfPDmVqo)

## Configuration
Global configuration of styles, api routes, navigation and dependency injection are located in src/config.
* navigation.ts
  - Define type of root navigation
  - If you created a new screen describe it here. Only Screens not Modals
* style.ts
  - Colors
  - Font Sizes
  - Spacings
* di.ts
  - Configuration of dependency injection. Check it when your run the command: yarn module

* api.routes.ts
  - Endpoinds of your API's

## Strucure folders
![Folders (2)](https://user-images.githubusercontent.com/46910469/203866311-20f5fd19-2c83-4d28-8dbd-de91710d344d.png)


## Extra
- Hermes Engine
- Dependency Injection
- [React Native Turbo Modules (New Architecture)](https://reactnative.dev/docs/the-new-architecture/landing-page)
- [Animations between screens](https://wix.github.io/react-native-navigation/docs/style-animations/)
- [Eslint Plugin Hexagonal Architecture](https://www.npmjs.com/package/eslint-plugin-hexagonal-architecture)

## Features
Verify the versions in the package.json
- Bash Scripts
- React Native 70.x
- Typescript
- [React Native Navigation](https://wix.github.io/react-native-navigation/docs/before-you-start/)
- [Typed-Inject](https://github.com/nicojs/typed-inject) Lightweight dependency injection container for JavaScript/TypeScript
- [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [Firebase](https://rnfirebase.io/)
- [React Hook Form](https://react-hook-form.com/get-started#ReactNative)
- [React Query](https://tanstack.com/query/v4/docs/installation)

Pending from implementation
- [ ] [React Native Keychain](https://github.com/oblador/react-native-keychain) key Keychain Access for React Native

Pending from installation
- [ ] [Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/)
- [ ] Detox E2E Testing

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

if you want remove firebase uninstall this two packages: 
- @react-native-firebase/app
- @react-native-firebase/auth
and implement the necesary login in this files:
- ./index.js
- ./src/ui/pages/home.tsx
- ./src/modules/authentication/infrastructure/firebase.repository.ts
