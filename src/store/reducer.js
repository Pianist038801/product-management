const initialState = {
    primary: [],
    recent: [],
    notification: [],
}

function reducer(state = initialState, action) {
    console.log('Action=', action);
    console.log('state=', state);
    let _recent = [...state.recent]
    let _primary = [...state.primary]
    let _notification = [...state.notification]
    switch (action.type) {
        case 'addProduct':
            return {
                ...state,
                primary: [..._primary, action.data],
                recent: [..._recent, action.data],
                notification: [..._notification, 2]
            }
        case 'deleteProduct':
            _primary.splice(action.index, 1)
            _recent.splice(action.index, 1)
            return {
                ...state,
                primary: _primary,
                recent: _recent,
                notification: [..._notification, 0]
            }
        case 'saveProduct':
            _recent[action.index].editStatus = false;
            _primary[action.index] =  {..._recent[action.index]}
            return {
                ...state,
                primary: _recent,
                recent: _primary,
                notification: [..._notification, 1]
            }
        case 'updateCurrent':
            _recent[action.index] = {..._recent[action.index], ...action.data}
            return {
                ...state,
                recent: _recent,
            }
        case 'cancelUpdate':
            _recent[action.index] = {...state.primary[action.index]}
            return {
                ...state,
                recent: _recent,
            }
        case 'deleteNotification':
            _notification.splice(action.index, 1)
            return {
                ...state,
                notification: _notification,
            }
      default:
        return state
    }
}

export default reducer