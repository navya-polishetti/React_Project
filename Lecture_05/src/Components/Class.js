import { restroList } from "./constants"
import RestroCard from "./RestroCard"
import { useState } from "react"

const Body = () => {
  //const searchTxt = "Burger King"

  //searchText variable is a local state variable
  //setSearchText(it is like method to update the respective local variable) is set the local state variable -- binding the local state variable with UI
  const [searchText, setSearchText] = useState("King")

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
        <h1>{searchText}</h1>
        <button className="search-btn">Search</button>
      </div>

      <div className="restro-list">
        {restroList.map((restro) => {
          return <RestroCard {...restro.data.data} key={restro.data.data.id} />
        })}
      </div>
    </>
  )
}

export default Body
