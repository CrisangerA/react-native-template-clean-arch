# How to start use?
[Complete Docs](https://github.com/CrisangerA/react-native-template-clean-arch)
I recomend this library after init project. [React Native Rename](https://github.com/junedomingo/react-native-rename)

#### Clean Architecture Resourses. Video and Blog:
- [The Clean Architecture — Beginner’s Guide](https://betterprogramming.pub/the-clean-architecture-beginners-guide-e4b7058c1165)
- [Mejora tu código aplicando Clean Architecture](https://www.youtube.com/watch?v=bdnpXzgj1oY)
- [Clean Architecture: La mejor forma de escalar y mantener tu código](https://www.youtube.com/watch?v=y3MWfPDmVqo)


### For create new Component:
````
yarn component nameOfYourComponent
````
### For create new Context:
````
yarn context nameOfYourContext
````
### For create new Modules:
````
yarn module nameOfYourModule
````
### For create new Hook:
````
yarn hook nameOfYourHook
````

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