import createDispatcher from './createDispatcher'
import connectStore from './decorators/connectStore'
import connectActions from './decorators/connectActions'
import withStore from './decorators/withStore'
import withActions from './decorators/withActions'
import wrapActions from './util/wrapActions'
import Provider from './components/Provider'
import combineReducers from './combineReducers'
import distinctSelector from './distinctSelector'

export {
  createDispatcher,
  withActions,
  withStore,
  connectStore,
  connectActions,
  wrapActions,
  Provider,
  distinctSelector,
  combineReducers
}
