import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = () => {
  return (
    <div className='search-bar'>
      <div className="content-left-search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="content-right-search-bar">
        <input placeholder='Search Twitter'></input>
      </div>
    </div>
  )
}

export default Searchbar