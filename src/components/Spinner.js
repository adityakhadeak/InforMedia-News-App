import loadSpin from '../loading.gif'

import React from 'react'

const  Spinner=()=> {
    
        return (
            <div className='text-center'>
                <img style={{width:"80px",height:"80px"}} src={loadSpin} alt="Loading" />
            </div>
        )
    
}
export default Spinner