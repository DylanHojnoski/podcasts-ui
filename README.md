# PodcastsUi

<img width="3405" height="2060" alt="image" src="https://github.com/user-attachments/assets/a6ef1123-f941-4139-9c39-54cdb436abd1" />

You can find the deployed site here: https://dylanhojnoski.github.io/podcasts-ui/explore

Frontend to listen to podcasts which relies on this backend: https://github.com/DylanHojnoski/rss-agg

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploy to GitHub Pages 

```
ng build --configuration production --base-href "https://DylanHojnoski.github.io/podcasts-ui/"
npx angular-cli-ghpages --dir=dist/podcasts-ui
```
