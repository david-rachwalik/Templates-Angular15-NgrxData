# Demo of '[NGRX Data](https://ngrx.io/guide/data)' package

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
