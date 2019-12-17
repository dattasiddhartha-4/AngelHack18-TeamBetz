import React, { Component}  from 'react';
import ContainerDimensions from 'react-container-dimensions'
import AccountsList from './accountsList.js'




const height = () => {
        <ContainerDimensions>
          { ({ height }) => <AccountsList height={height}/> }
        </ContainerDimensions> 
}


export default height;