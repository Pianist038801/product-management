const initialState = {
    primary: [],
    recent: [],
}

function reducer(state = initialState, action) {
    let _recent = [...state.recent]
    let _primary = [...state.primary]
    switch (action.type) {
        case 'addProduct':
            return {
                ...state,
                primary: [...state.primary, action.data],
                recent: [...state.recent, action.data],
            }
        case 'deleteProduct':
            return {
                ...state,
                primary: state.primary.splice(action.index, 1),
                recent: state.recent.splice(action.index, 1),
            }
        case 'saveProduct':
            _recent[action.index].editStatus = false;
            _primary[action.index] =  {..._recent[action.index]}
            return {
                ...state,
                primary: _recent,
                recent: _primary,
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
                primary: _recent,
            }
      default:
        return state
    }
}

export default reducer