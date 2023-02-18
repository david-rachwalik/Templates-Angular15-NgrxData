# Demo of '[NGRX Data](https://ngrx.io/guide/data)' package

NgRx Data:

- automates the creation of actions, reducers, effects, dispatchers, and selectors for each entity type
- provides default HTTP GET, PUT, POST, and DELETE methods for each entity type
- holds entity data as collections within a cache which is a slice of NgRx store state
- supports optimistic and pessimistic save strategies
- enables transactional save of multiple entities of multiple types in the same request
- makes reasonable default implementation choices
- offers numerous extension points for changing or augmenting those default behaviors

NgRx Data is best at managing persisted entity data (e.g. Customers and Orders) that many apps query and save to remote storage.

It is ill-suited to non-entity data. Value types, enumerations, session data and highly idiosyncratic data are better managed with standard NgRx. Real-world apps will benefit from a combination of NgRx techniques, all sharing a common store.

[NGRX](https://ngrx.io): Reactive State for Angular

## References

- [NgRx Docs](https://ngrx.io/docs)

---

### [Entity Interfaces](https://ngrx.io/guide/entity/interfaces)

EntityState: The Entity State is a predefined generic interface for a given entity collection with the following interface

```javascript
interface EntityState<V> {
  ids: string[] | number[];
  entities: { [id: string | id: number]: V };
}
```
