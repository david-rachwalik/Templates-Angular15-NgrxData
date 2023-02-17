# Templates-Angular15-NgrxData

## Web App ([repo](https://github.com/david-rachwalik/Templates-Angular15-NgrxData))

Template for Angular web application with NgRx Data

### Project Tech Stack

_Languages:_ HTML, CSS, JavaScript, SCSS, TypeScript

Angular 15, NGRX (redux data store)

### Project Commands Used

Generate a new Angular application ([tutorial](https://angular.io/tutorial/toh-pt5), [layouts](https://indepth.dev/posts/1235/how-to-reuse-common-layouts-in-angular-using-router-2), [RxJS](https://www.learnrxjs.io))

```bash
ng new <app-name>
```

Install [NGRX](https://ngrx.io) [Store](https://ngrx.io/guide/store) for state management

```bash
ng add @ngrx/store --skip-confirmation --no-minimal --statePath=store
ng add @ngrx/store-devtools --skip-confirmation
ng add @ngrx/effects --skip-confirmation
ng add @ngrx/entity --skip-confirmation
ng add @ngrx/data --skip-confirmation
```

Install [ngrx-entity-relationship](https://www.npmjs.com/package/ngrx-entity-relationship) to ease relationships with entities ([NGRX example on StackBlitz](https://stackblitz.com/github/satanTime/ngrx-entity-relationship-angular?file=src/app/app.component.ts))

```bash
npm i ngrx-entity-relationship
```

---

### Angular 'generate' Commands Used

Generate a new Angular component

```bash
ng g c <component-name>
```

Generate a new Angular module

```bash
ng g m <module-name>
```
