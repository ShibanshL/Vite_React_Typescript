import React from 'react'
import './loading.css'

import { Loader } from '@mantine/core';

function Mantine_loader() {
  return( 
    <div className="Mantine_Loader">
        <Loader color="dark" size="xl" variant="dots" />
    </div>
  );
}

export default Mantine_loader
