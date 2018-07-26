import { connect } from 'react-redux'
import { addProduct } from '../../store/actions'
import Component from './component.js'

export const mapDispatch = (dispatch) => ({
    addProduct: (data) => dispatch(addProduct(data)),
})

export default connect(null, mapDispatch)(Component)
