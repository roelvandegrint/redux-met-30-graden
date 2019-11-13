# MessagesApp - Demo 3

## Introduction

This demo introduces two core concepts of Redux, implemented through NgRx: The Store, Actions and Reducers.

### Store
The store is the central repository for the state object in Redux. The state object is just a JavaScript object, which represents the current state of the application at any given point in time. The store is updated through reducers, which process actions. Both of which will be described next

### Actions
Actions are instructions dispatched to the store. An action is a simple javascript object which has a single requirement: it must have a type parameter, which is a string. Besides 'type', an action can have any other properties you want. The type will be used in by each reducer to decide if it needs to handle the specific action. The rest of the information can be used by reducers to update state.

#### Example of an NgRx Action:

```
{
  type: 'add todo item',
  description: 'buy milk'
}
```

### Reducers
Reducers are pure functions which update (a slice of) state. Reducers always received the current state and an action, and return the new state value. Reducers can be combined to slice state in to multiple small pieces, so multiple reducers in the end combine into a single new state object. State in NgRx is immutable, which means the state that comes into a reducer function should never be updated, rather a new copy of the state object should be returned by cloning it.

#### Example of an NgRx Reducer:

```
const TodoReducer = (state: ToDo, action) => {
  switch(action.type) {
    case 'create todo':
      return { description: action.description, completed: false };
    case 'update todo':
      return { 
        ...state,
        description: action.description
      };
    case 'complete todo item':
      return {
        ...state,
        completed: true
      }
  }
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
