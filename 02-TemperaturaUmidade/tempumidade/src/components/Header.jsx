import React from 'react'

const Header = ({isConnected, LastUpdate}) => {
 
    constformatTime = (date) => {
        if(!date) return "--;--;--";
        return date.toLocaleTimeString("pt-BR", );
    }
 
    return (
    <div className='mb-5'>
      <div className='d-flex justify-content-between align-items-center mb-4'>

      </div>
    
    </div>
  )
}

export default Header
