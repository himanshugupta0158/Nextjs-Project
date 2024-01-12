import Link from 'next/link'
import React from 'react'

const AgGrid2 = () => {
  return (
    <div>
        <div className='mt-2 mb-10'>
            <Link href="/ag_grid" className='bg-gray-800 text-white p-4 rounded-xl'>Go Back</Link>
        </div>
        <div className='bg-gray-100 mx-5 my-5'>
              <div className='text-2xl'>AgGrid2</div>
              <div className='mx-5 my-8 border border-black rounded p-4'>data table</div>
        </div>
    </div>
  )
}

export default AgGrid2