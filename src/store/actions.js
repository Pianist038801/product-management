export const addProduct = data => {
    type: 'addProduct',
    data
}

export const deleteProduct = index => {
    type: 'deleteProduct',
    index
}

export const saveProduct = index => {
    type: 'saveProduct',
    index
}

export const updateCurrent = (index, data) => {
    type: 'updateCurrent',
    index,
    data
}

export const cancelUpdate = (index) => {
    type: 'cancelUpdate',
    index
}
