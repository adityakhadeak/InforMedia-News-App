import loadSpin from '../loading.gif'

import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={loadSpin} alt="Loading" />
            </div>
        )
    }
}
