import React from 'react'
import StarFilter from './components/star-filter'
import PriceFilter from './components/price-filter'
import SortFilter from './components/sort-filter'

const Filter = () => {
  return (
    <aside>
        <h3>Filter By:</h3>
        <StarFilter />
        <PriceFilter />
        <SortFilter />
    </aside>
  )
}

export default Filter