# Redux Modal for React 18

`redux-modals` for React 18 connect your modal to the redux store, and let you control your modal by simply dispatching actions.

It works with any react based modal component.

## Installation

```
npm i --save @xdeenist/redux-modals
```

## API

## connectModal(config)

Connect a modal component to redux store.

### Arguments

* `config`(Object)
  * `name`(String)(Require) The modal name.
  * `resolve`(Function) Things you want to resolve before show your modal, if return a promise, the modal will show after the promise resolved.
  * `destroyOnHide`(Bool) Whether destroy the modal state and umount the modal after hide, default is true.
  * `getModalState`(Function) A function that takes the entire Redux state and returns the state slice which corresponds to where the redux-modal reducer was mounted. Defaults to assuming that the reducer is mounted under the 'modal' key.

### Returns

A React component class that injects modal state, `handleHide` and `handleDestroy` action creator into your modal component.

### Examples

```javascript
export default connectModal({ name: 'myModal' })(MyModal)
```
It will pass the modal state and a `handleHide` and `handleDestroy` action creator as props to your modal component.

If you mounted your modal reducer at some other location such as `modals` instead of `modal` use the `getModalState` config
```javascript
export default connectModal({ name: 'myModal', getModalState: (state) => state.modals })(MyModal)
```

## reducer

The modal reducer. Should be given to mounted to your Redux state at `modal`.

### Example

```javascript
import { combineReducers } from 'redux'
import { reducer as modal } from '@xdeenist/redux-modal'

export default combineReducers({
  ...yourOtherReducers,
  modal
})
```

## show(name, props) | show<T>(name, props: T)

The show modal action creator.

### Arguments

* `name`(String) The name of modal to show.
* `props`(Object) Props pass to your modal.

### Example

```javascript
import { MyModalProps } from '...'

show<MyModalProps>('modalName', {prop1: 'example'})
```

## hide(name)

The hide modal action creator.

### Arguments

* `name`(String) The name of modal to hide.

## License

MIT
