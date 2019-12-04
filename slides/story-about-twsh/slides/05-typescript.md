<!-- classes: title personal-programming -->

## Good point of TypeScript

1. Coding with confidence
2. Easy to mentainance
3. If you can write JavaScript, you can write TypeScript
4. Excellent code completion

---

### Coding with confidence

By protected by type,

you can write source code with confidence,

because you know the type of variable `foo`,

the return value of function `bar` and

the arguments the function `baz` needs.

---

#### When JavaScript

```javascript
import { someFunction } from './util'

const Foo = { id: 1, name: 'foo' }
const Bar = { id: 2, name: 'bar' }
const Baz = { id: 3, name: 'baz' }

const originalPeople = [Foo, Bar, Baz];
const returnValue = someFunction(originalPeople);

console.log(returnValue) // do you imagnie?
```

---

#### When TypeScript

```typescript
import { Person, someFunction } from './util'

const Foo: Person = { id: 1, name: 'foo' }
const Bar: Person = { id: 2, name: 'bar' }
const Baz: Person = { id: 3, name: 'baz' }

const originalPeople = [Foo, Bar, Baz];
// typescript let you know what type someFunction returns
const returnValue = someFunction(originalPeople);

console.log(returnValue) // you can imagine
```

[Playground Link](http://www.typescriptlang.org/play/#code/C4TwDgpgBAChBOBnA9gOygXigbwFBQKgEsATALilQFcBbAIwX0NQEMaILFh4jUBzXAF8A3LlwBjNFygp2AMSqpxmKAApIyMABsOsBClQBtALoBKCnCRoTmAHxQN2iADp4EElXEQAPJYMnbVVUWcXFaKi0WYGR4ABooMPg3VGAANRYtKghTOxwmAiIAMzVE5LSMrOdWdkwMLAByQuRkepy8Qg6oN2AqeHQQsJoIqJj8qEEx7t7+0PDI6PhnSSUo1VKIFPTM7KF4k1NRCSlgKDlmi300FWxicigARnjq3Ubm+vHRZekAIRZ4C6s6CwN1IFAATE82C86H93iIjqgfiwAF4AgzXW4UADMkPYFHqMORcMOXxOMSIfF4GTgmh0aOsxhUhjOyHivziUF+yOMJOOXQgPT6WyyKlkEAUSlU5MprC0NKcByAA)

---

### Easy to mentainance

By protected by type,

you can easily modify source code for new feature or refactor,

because typescript tell you the right type.

[Playground Link](http://www.typescriptlang.org/play/#code/C4TwDgpgBAChBOBnA9gOygXigbwFBQKgEsATALilQFcBbAIwX0NQEMaILFh4jUBzJgRZ8OlWg3hQA9FKgsSJCCVwBfANy5cMqAGMAFi35KowZFHgRgVeOi49+uHWi5QU7AGJVUOzFAAUkMhgADaicEhoANoAugCUnNy8fJgAfFCBIRAAdBYkVDoQADx2SSl+fiw6OrRUwSym8AA0utYWqMAAaizBVBCxqTiCxABm-tXwbZ3dvVnC0GkAzAAM-XiE6+aW1ugABgAk2JXVNLX1yPAqzQfjk1092azsKjtDKkMWVjZyVTV1DarNADkgNiGi0sjm6RY8DYlgQcgUSkczmAUHcyGQFHCKHQWGwxHIUAAjM1HqJAcMMYDmnMKAsACxQdTI1AuABC0KxCBxvnxpAoACZSbCKIC6NDqXIRIKiUyNE5WaiOQAvLkRXE4Al04XsUXi5WS2lQAUANjlmgVLnORD4vG6cCCoTVOJivki6OQzQ5TSgKuiYMtqI+2zuvV8bggnm8fmtttYwQdmVBQA)

---

### If you can write JavaScript, you can write TypeScript

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

https://www.typescriptlang.org/

Syntatically, any regular JavaScript is valid TypeScript

---

### Excellent code completion

As you see, typescript language server drive your programming expericnce greater by code hints and completion

---

Let's Start TypeScript !!
