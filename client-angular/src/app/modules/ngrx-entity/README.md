# Pizza App

_Oct 26, 2017_

Learn how to use the new ngrx entity package to build CRUD with less code. In this video, I show you how to create a feature module with ngrx, then use entity adapter methods in the reducer.

## References

- [Learn @ngrx/entity and Feature Modules [Fireship]](https://www.youtube.com/watch?v=8Wy1AqY5gqE&ab_channel=Fireship) (video)
- [NgRx](https://ngrx.io): Reactive State for Angular ([docs](https://ngrx.io/docs), [Entity](https://ngrx.io/guide/entity))

### Commands Used

Generate module

```bash
ng g m modules/pizza --module=app --route=pizza --routing
```

Generate component

```bash
ng g c modules/pizza/pages/pizza-order --module=pizza
```

---

### [Entity Interfaces](https://ngrx.io/guide/entity/interfaces)

EntityState: The Entity State is a predefined generic interface for a given entity collection with the following interface

```javascript
interface EntityState<V> {
  ids: string[] | number[];
  entities: { [id: string | id: number]: V };
}
```
