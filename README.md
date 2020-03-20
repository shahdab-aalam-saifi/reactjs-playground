# React Playground


## Definitions

### Pure Functions

Pure functions is a concept from the functional programming paradigm. It says that a pure function
always returns the same output if given the same input. There is no layer in between that could alter
the output on the way when the input doesn’t change. The layer in between, that could possibly alter
the output, is called **side-effect**. Thus, pure functions have no side-effects. Two major benefits of
these pure functions are predictability and testability.

### Immutability

Immutability is a concept of functional programming, too. It says that a data structure is immutable
when it cannot be changed. When there is the need to modify the immutable data structure, for
instance an object, you would always return a new object. Rather than altering the object at hand,
you would create a new object based on the old object and the modification. The old and new object
would have their own instances.

Immutable data structures have the benefit of predictability. For instance, when sharing an object
through the whole application, it could lead to bugs when altering the object directly, because every
stakeholder has a reference to this potentially altered object. It would be unpredictable what happens
when an object changes and a handful of stakeholders are dependent on this object. In a growing
application, it is difficult to oversee the places where the object is currently used by its reference.

The antagonist of immutability is called mutability. It says that an object can be modified.

### State

State is a broad word in modern applications. When speaking about application state, it could be
anything that needs to live and be modified in the browser. It could be an entity state that was
retrieved from a backend application or a view state in the application, for instance, when toggling
a popup to show additional information.

I will refer to the former one as **entity state** and to the latter one as **view state**. Entity state is data
retrieved from the backend. It could be a list of authors or the user object describing the user that
is currently logged in to the application. View state, on the other hand, doesn’t need to be stored in
the backend. It is used when you open up a modal or switch a box from preview to edit mode.

When speaking about managing the state, meaning initializing, modifying and deleting state, it will
be coined under the umbrella term of state management. Yet, state management is a much broader topic. While the mentioned actions are low-level operations, almost implementation details, the
architecture, best practices and patterns around state management stay abstract. **State management**
involves all these topics to keep your application state durable.

### The Size of State

State can be an atomic object or one large aggregated object. When speaking about the view state,
that only determines whether a popup is open or closed, it is an **atomic state object**. When the
whole application state can be derived from on aggregated object, which includes all the atomic
state objects, it is called a **global state object**. Often, a global state object implies that it is accessible from everywhere, but that’s not necessarily the case.

The state itself can be differentiated into **local state** and **sophisticated state**. The management of
this state is called **local state management** and **sophisticated state management**.

### Local State
The naming local state is widely accepted in the web development community. Another term might
be **internal component state**.

Local state is bound to components. It lives in the view layer. It is not stored somewhere else. That’s
why it is called local state because it is colocated to the component.

In React, the local state is embraced by using `this.state` and `this.setState()`. But it can have
a different implementation and usage in other view layer or SPA solutions.

### Sophisticated State

I cannot say that it is widely agreed on to call it sophisticated state in the web development
community. However, at some point you need a term to distinguish it from local state. That’s why
I often refer to it as sophisticated state. In other resources, you might find it referred to as **external
state**, because it lives outside of the local component or outside of the view layer.

Most often, sophisticated state is outsourced to libraries that are library or framework agnostic and
thus agnostic to the view layer. But most often they provide a bridge to access and modify state
from the view layer. When using only local state in a scaling application, you will allocate too much
state along your components in the view layer. However, at some point you want to separate these
concerns. That’s when sophisticated state comes into play.

Two libraries that are known for handling sophisticated state are called Redux and MobX.

### Visibility of State
Since local state is only bound to the component instance, only the component itself is aware of
these properties being state. However, the component can share the state to its child components. In
React, the child components are unaware of these properties being state in their parent component.
They only receive these properties as props.

On the other hand, sophisticated state is often globally accessible. In theory, the state can be accessed
by each component. Often, it is not best practice to give every component access to the global state,
thus it is up to the developer to bridge only selected components to the global state object. All other
components stay unaware of the state and only receive properties as props to act on them.

## Unidirectional vs. Bidirectional Data Flow

**Predicability:** In a scaling application, state management needs to stay predictable. When you alter
your state, it should be clear which components care about it. It should also be clear who alters
the state in the first place. In an unidirectional data flow one stakeholder alters the state, the state
gets stored, and the state flows down from one place, for instance a stateful component, to all child
components that are interested in the state.

**Maintainability:** When collaborating in a team on a scaling application, one requirement of state
management is predictability. Humans are not capable to keep track of a growing bidirectional data
flow. It is a limitation by nature. That’s why the state management stays more maintainable when
it is predictable. Otherwise, when people cannot reason about the state, they introduce inefficient
state handling.

But maintainability doesn’t come without any cost in a unidirectional data flow. Even though the
state is predictable, it often needs to be refactored thoughtfully.

**Performance:** In a unidirectional data flow, the state flows down the component tree. All components
that depend on the state have the chance to re-render. Contrary to a bidirectional data flow,
it is not always clear who has to update according to state changes. The state flows in too many
directions. The model layer depends on the view layer and the view layer depends on the model
layer. It’s a vice versa dependency that leads to performance issues in the update lifecycle.
These three advantages show the benefits of using a unidirectional data flow over an bidirectional
data flow. That’s why so many state management solutions thrive for the former one nowadays.

## Redux Naming Conventions

In Redux, you have a handful of different types of functions. You have action creators, selectors and
reducers. It is always good to name them accordingly to their type. Other developers will have an
easier time identifying the function type. Just following a naming convention for your functions,
you can give yourself and others a valuable information about the function itself.

- action creators: **do**Something
- reducers: **apply**Something
- selectors: **get**Something
- sagas: **watch**Something, **handle**Something

### Technical Folder Organization

- app
  - reducers
  - actions creators
  - selectors
  - store
  - constants
  - components