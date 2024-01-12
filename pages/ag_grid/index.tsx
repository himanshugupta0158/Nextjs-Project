import Link from 'next/link'
import React from 'react'

const AgGrid = () => {
  return (
    <div className='mx-5 my-5 p-4 bg-gray-200 rounded'>
          <div className='text-2xl'>AgGrid</div>
          <div className='flex flex-col space-y-4 mt-10 mx-5'>
              <Link href="ag_grid/part1" className='bg-blue-500 p-4 w-1/6 text-white rounded-2xl text-center'>Part1</Link>
              <Link href="ag_grid/part2" className='bg-blue-500 p-4 w-1/6 text-white rounded-2xl text-center'>Part2</Link>
              <Link href="ag_grid/part3" className='bg-blue-500 p-4 w-1/6 text-white rounded-2xl text-center'>Part3</Link>
              <Link href="ag_grid/part4" className='bg-blue-500 p-4 w-1/6 text-white rounded-2xl text-center'>Part4</Link>
              <Link href="ag_grid/part5" className='bg-blue-500 p-4 w-1/6 text-white rounded-2xl text-center'>Part5</Link>
          </div>
    </div>
  )
}

export default AgGrid