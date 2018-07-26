import { connect } from 'react-redux'
import { updateCurrent, saveProduct, cancelUpdate, deleteProduct, deleteNotification } from '../../store/actions'
import Component from './component.js'

export const mapState = ({recent, notification}) => ({
    products: recent,
    notification,
})

export const mapDispatch = (dispatch) => ({
    updateCurrent: (index, data) => dispatch(updateCurrent(index, data)),
    saveProduct: (index) => dispatch(saveProduct(index)),
    cancelUpdate: (index) => dispatch(cancelUpdate(index)),
    deleteProduct: (index) => dispatch(deleteProduct(index)),
    deleteNotification: (index) => dispatch(deleteNotification(index)),
})

export default connect(mapState, mapDispatch)(Component)
