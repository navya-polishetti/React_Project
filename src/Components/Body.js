import { restroList } from "./constants"
import RestroCard from "./RestroCard"
import { useState } from "react"

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.data?.name?.includes(searchText)
  )
  console.log(searchText)
  return filterData
}

const Body = () => {
  //const searchTxt = "Burger King"
  //searchText variable is a local state variable
  //setSearchText(it is like method to update the respective local variable) is set the local state variable -- binding the local state variable with UI
  //To keep track of the variables or you need to in sync with UI that's why we need to use the state variables
  //above if you change the something in UI you it will UI will be renders the automatically
  const [searchText, setSearchText] = useState("")
  const [restaurants, setRestaurants] = useState(restroList)

  return (
    <>
      <div className="Search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a restro"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurants)
            //Update the state of reataurants with filterd data
            setRestaurants(data)
          }}
        >
          Search
        </button>
      </div>

      <div className="restro-list">
        {restaurants.map((restro) => {
          return <RestroCard {...restro.data.data} key={restro.data.data.id} />
        })}
      </div>
    </>
  )
}

export default Body
