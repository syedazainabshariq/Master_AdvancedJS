# 🚀 Advanced JavaScript - Day 6: JavaScript Design Patterns

Welcome to **Day 6** of the **7-Day Advanced JavaScript Challenge**! Today’s focus is on **Design Patterns** — powerful tools to write cleaner, modular, and scalable code.

---

## 🔹 What are Design Patterns?

Design patterns are **proven solutions to common programming problems**. They improve:

- Code **readability**
- Code **reusability**
- Code **maintainability**

---

## 🔸 Types of JavaScript Design Patterns

### ✅ Creational Patterns
- **Constructor Pattern** – Used to create objects with similar properties.
- **Factory Pattern** – Abstracts object creation logic.
- **Singleton Pattern** – Ensures only one instance of an object exists.

### ✅ Structural Patterns
- **Module Pattern** – Encapsulates private and public methods/variables.
- **Decorator Pattern** – Adds behavior to objects dynamically.

### ✅ Behavioral Patterns
- **Observer Pattern** – A subject notifies multiple observers about events.
- **Mediator Pattern** – Centralizes communication between components.

---

## 🧠 Code Examples

### ✅ Singleton Pattern

```javascript
const Singleton = (function () {
  let instance;

  function createInstance() {
    return { name: "I am the instance" };
  }

  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();
console.log(a === b); // true

const Counter = (function () {
  let count = 0;

  return {
    increment: function () { count++; },
    getCount: function () { return count; }
  };
})();

Counter.increment();
console.log(Counter.getCount()); // 1
```

### 🧪 Mini Quiz
Q.1 What is the main goal of using design patterns?

Q.2 Which pattern ensures only one instance is created?

Q.3 What's the difference between Factory and Constructor pattern?

Q.4 Name one structural design pattern.

Q.5 Which pattern helps in publishing and subscribing to events?
