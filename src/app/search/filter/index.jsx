import React from 'react'
import StarFilter from './components/star-filter'
import PriceFilter from './components/price-filter'
import SortFilter from './components/sort-filter'
import { Button } from '@/components/ui/button'

const Filter = () => {
  return (
    <aside className='border border-border max-h-max rounded-md w-[240px]'>
       <div>
         <h3 className='flex items-center justify-between p-2'>Filter By:</h3>
         <Button>
          clear all
         </Button>
       </div>
        <StarFilter />
        <PriceFilter />
        <SortFilter />
    </aside>
  )
}

export default Filter