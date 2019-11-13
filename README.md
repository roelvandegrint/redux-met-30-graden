# Introduction to Redux and NgRx

## Introduction
Web Applications are everywhere nowadays. Front-End frameworks like Angular, React and Vue provide delopers easy ways to develop single page applications (SPA's), applications that are loaded from the server once and run in the client from that point on. Pages are not loaded from the server by a browser for each new page. Client-side routing takes care of that part, often provided fully by the framework in use, otherwise easily added by importing some module.

These SPA's are made up of components, large and small parts of the application created to support structure, maintainability, reusability and much more. This results in a web of active components on screen in many situations. Data flows through all of these components, being loaded in one place, displayed in another and updated in yet another.

This web of components with complex interactions and data flowing through all of it creates a situation where it can be difficult to reason about the state of the application at any given point in time, when and where changes to the state occur, in which direction data flows through the system, which components should be re-rendered because of the changes, and much more.

## Redux

Enter Redux. Redux is not a system, but a pattern which can be applied to create a unidirectional data-flow. That means data always follows the same path through the codebase, enabling you to reason about the source of a change and finding that source much easier. It also enables the framework to optimize it's rendering strategy based on the patterns immutable state principal.

The pattern consists of two main components: actions and reducers. Actions are the requests for state change and reducers are simple pure functions that perform the change. Side-effects, for example requests to the server for data or changes to data are handled differently by each implementation, making sure the core of the pattern remains actions and reducers.

## NgRx

The NgRx implementation of the pattern, which is the subject of this suite of demos and exercises, uses 'effects' to handle these side-effects and introduces 'selectors', which provide reusable, memoized queries on the state to simplify usage of the data.

## Good luck

In the set of demos in this repository you will find the same application, where for each demo, another piece of the framework is implemented. The initial implementation is implemented without any use of NgRx. The final demo contains everything that's in the framework's core.

Each folder has an own README file which explains the contents of the demo and the way to use the code.

I hope these examples wil further you knowledge about the Redux pattern, the NgRx framework and the advantages it provides the development team. If you ever have any questions, don't hold back and get in touch. If you find any issues in the code, don't hesitate to create a PR.
