import React from 'react'
import { useState } from 'react';
function ImportantCats() {
    const [cats, setCats] = useState([]);
  return (
    <div>
        <div className='text-2xl text-center p-5 bg-gray-600 m-3'>Important Cats
        
        {cats.length == 0 ? <div>No Cats</div> : <div>Cats 1</div>}
        </div>
    </div>
  )
}

export default ImportantCats