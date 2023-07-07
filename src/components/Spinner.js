import loadSpin from '../loading.gif'

import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img style={{width:"80px",height:"80px"}} src={loadSpin} alt="Loading" />
            </div>
        )
    }
}
