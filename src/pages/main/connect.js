import { connect } from 'react-redux'
import { updateCurrent, saveProduct, cancelUpdate } from '../../store/actions'
import Component from './component.js'

export const mapState = ({recent}) => ({
  products: recent
})

export const mapDispatch = (dispatch) => ({
  updateCurrent: (index, data) => dispatch(updateCurrent(index, data)),
  saveProduct: (index) => dispatch(saveProduct(index)),
  cancelUpdate: (index) => dispatch(cancelUpdate(index))
})

export default connect(mapState, mapDispatch)(Component)
