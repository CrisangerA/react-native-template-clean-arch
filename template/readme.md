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