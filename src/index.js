import produce from 'immer'
import { handleActions as _handleActions, createAction } from 'redux-actions'

export const handleActions = (actions, state) => _handleActions(
  Object.keys(actions).reduce((acc, key) => {
    acc[key] = produce(actions[key])

    return acc
  }, {}),
  state
)

export const createAsyncAction = actionType => ({
  requested: createAction(`${actionType}_REQUESTED`),
  succeeded: createAction(`${actionType}_SUCCEEDED`),
  failed: createAction(`${actionType}_FAILED`),
  isAsync: true
})

export const getAsyncActions = (actions) => {
  const asyncActions = {}

  for (const key in actions) {
    if (actions[key].isAsync) {
      asyncActions[key] = actions[key]
    }
  }

  return asyncActions
}

export const createAsyncActionsReducers = (actions) => {
  const actionHandlers = {}

  for (const key of Object.keys(actions)) {
    actionHandlers[actions[key].requested] = function(state) {
      state[key] = state[key] || {}
      state[key].requesting = true
      state[key].error = null
      state[key].success = false
    }

    actionHandlers[actions[key].succeeded] = function(state) {
      state[key].requesting = false
      state[key].success = true
    }

    actionHandlers[actions[key].failed] = function(state, action) {
      state[key].requesting = false
      state[key].error = action.payload
    }
  }

  return handleActions(actionHandlers, {})
}

function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}

export function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(
      `bindActionCreators expected an object or a function, instead received ${
        actionCreators === null ? 'null' : typeof actionCreators
      }. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
    )
  }

  const keys = Object.keys(actionCreators)
  const boundActionCreators = {}
  for (const key of keys) {
    const actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
    } else if (typeof actionCreator === 'object') {
      boundActionCreators[key] = bindActionCreators(actionCreator, dispatch)
    }
  }
  return boundActionCreators
}
