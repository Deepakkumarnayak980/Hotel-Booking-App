import React from 'react'
import Filter from './filter'
import Hotels from './hotels'
import SortFilter from './filter/components/sort-filter'
import PaginationFilter from './filter/components/pagination-filter'

const SearchPage = () => {
  return (
    <div className='container flex gap-4 mt-6 mb-12'>
      <Filter />
       <section  className='flex-1 space-y-6'>
        <div className='flex items-center justify-between'>
          <h1>jaipur:858 properties found</h1>
          <SortFilter />
        </div>
        <Hotels />
        <PaginationFilter />
       </section>
    </div>
  )
}

export default SearchPage