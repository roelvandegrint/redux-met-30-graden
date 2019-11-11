# MessagesApp - Demo 4

## Introduction

This demo introduces another core concept of Redux, implemented through NgRx: Effects.

### Effects
Since reducers are pure functions (functions which always return the same result based upon the same input), there can be no side-effects to them. This means that for example getting data from a server, which could result in different data each time, cannot be done inside of a reducer function.

Side-effects in Redux (Effects in NgRx) solve this problem by handling an action, performing the side-effect causing operation separately and dispatching a new action to the store, triggering the reducers again. Now the reducers are called with the result of the effect, leaving the reducer pure.

Effects can become very elaborate but mainly have the same structure:

1. The effect is triggered by and action dispatched to the store (in the demo it's a load action dispatched from the message-box component)
2. The effect performs some action (calls the service to load data from the server)
3. The effect dispatches another action (in the demo with the result from the service call)

The sequence of operations in NgRx is:
1. An action is dispatched
2. The action is handled by all reducers, each reducer decides if it handles the action based on the type property
3. The action is handled by all effects, each effect decides if it handles the action based on the type property
4. The effect dispatches another action
5. The new action is handled by all reducers

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run the data api server
In a separate console, go to the demo-server folder and run 'npm start'.
