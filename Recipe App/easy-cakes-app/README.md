# EasyCakesApp

A simple interactive one page application for making cakes.

I have started a Angular 6 project by using Angular CLI via the the command line interface.
Next I have initiated my project via local server using cmd line  (ng serve) which opens local server (http://localhost:4200/). Then have created two initial components via cmd line (ng generate component “home” & “about us”), with the correct paths to each file in app-routing.modules.ts file.
Next I need to generate a module interface for recipes arrays, I input (ng generate interface [recipe] ) into cmd line to generate a recipe.ts file in app.folder In the recipe.ts file i create an “object” which includes the recipe processes, Title, Image, Ingredients List, Ingredient Name, Quantity Unit of Measurement & Method

In n Angular 6  any object that doesn’t have a set value we can use (?) after it i.e( ingredientsName? :string;)

In the app.component.ts file i have created an “array” for five individual recipes. Using the “constructor( )” function.
In the app.component.html file have used the “*ngFor” repeater directive part of Angular to display multiple elements of the array.

I next add an “AppRoutingModule” via the cmd line (ng generate module app-routing --flat --module=app) I next add routes in this file to the components ,nest add RouterModule.forRoot() which starts it listening for browser location changes. Now in the AppComponent.html file I have commented out the following  elements <app-home> & <app-about> replace with  <router-outlet> element.
Next i add a navigation link (routerLink) to nav a elements in AppComponent.html file.

I have created different SCSS variables & nesting in the main src folder styles.scss file.


======================================================================

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
