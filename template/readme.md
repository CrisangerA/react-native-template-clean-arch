# How to start use? 💻
````
npx react-native init AwesomeApp --template https://github.com/CrisangerA/react-native-template-clean-arch.git
````
I recomend this library after init project. [React Native Rename](https://github.com/junedomingo/react-native-rename)
````
$ npx react-native-rename AwesomeApp
````

### ⌨️ For create new Component:
````
yarn component (-s|-c) (core|layout|global) nameOfYourComponent
````
Type of component
- -s simple: a single file with logic and styles
- -c complex file into a folder
Scope of component
- core: base components for the graphical interface, overwriting of components of the main library. For example buttons, text, card and others.
- layout: components that belong to the style of the application, inherits from core and global. For example the page component that is used with each page. A shared header, Titles and others.
- global: at the developer's discretion. to separate the components of each page by folder or for components that are used a lot between pages. See the auth/ and @forms/ examples.

### ⌨️ For create new Context:
````
yarn context nameOfYourContext
````
### ⌨️ For create new Modules:
````
yarn module nameOfYourModule
````
### ⌨️ For create new Hook:
````
yarn hook nameOfYourHook
````

Among other things the project includes this plugin https://www.npmjs.com/package/eslint-plugin-hexagonal-architecture that will help you to build the rest of your application with the onion architecture concept https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html.

__*If you have not yet heard of clean architecture or know anything about the concept, I invite you to first understand what this topic is about, since this is the main architecture under which the template is built.*__

#### Clean Architecture Resourses. Video and Blog:
- [The Clean Architecture — Beginner’s Guide](https://betterprogramming.pub/the-clean-architecture-beginners-guide-e4b7058c1165)
- [Mejora tu código aplicando Clean Architecture](https://www.youtube.com/watch?v=bdnpXzgj1oY)
- [Clean Architecture: La mejor forma de escalar y mantener tu código](https://www.youtube.com/watch?v=y3MWfPDmVqo)

## Components
Components located at ./src/ui/components/layout
* Box
* Margin
* ModalBottomSheet
* Not Records
* Padding
* Page

Components located at ./src/ui/components/core
* Card
* CardTitle
* Button
* ScrollView
* Text

## Hooks
* useQuery. Implementation of React Query
````ts
interface Props {
  key: QueryKey;
  service: () => Promise<any>;
  options?: UseQueryOptions | any;
}
````

* useNavigation. Implementation of React Native Navigation (Wix)
````ts
interface INavigationContext {
  componentId: string;
  goTo: (screen: string, props?: any) => void;
  showModal: (name: string, props?: any) => void;
  dismissModal: () => void;
}
````

## Remove Firebase
If you want remove firebase uninstall this two packages: 
- @react-native-firebase/app
- @react-native-firebase/auth

and implement the necesary login in this files:
- ./index.js
- ./src/modules/authentication/infrastructure/firebase.repository.ts

Your new implementation in infra should inherit authrepository located in the domain

## Troubleshoot
* For Firebase you only need generate google-services.json credentials. See the docs

* The test are made in Linux - Ubuntu 20.04. If you have a problem related with CMAKE as me, You should install this packages: 
  - [sudo apt-get install -y libicu-dev](https://stackoverflow.com/questions/72937332/task-reactandroidhermes-engineconfigurebuildforhermes-failed-react-native-new)
  - [sudo apt-get install -y build-essential](https://stackoverflow.com/questions/6141608/cmake-make-program-not-found)
