import React, {Component} from 'react'
import './Transfer.css'

export default class Transfer extends Component {
    state = {
        account: '',
        amount: '',
        transactionType: ''
    }
    render() {
        return (
            <div>
                Transfer
            </div>
        )
    }
}