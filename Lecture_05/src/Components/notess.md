const Body = () => {
const searchText = "Burger King"
return (
<>

<div className="Search-container">
<input
type="text"
className="search-input"
placeholder="Search for a restro"
value={searchText}
onChange={(e) => console.log("")
onChange={(e) => console.log("e.target.value")} ></input>
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

value={searchText}
onChange={(e) => console.log("e.target.value")}
onChange={(e) => console.log("")}
onChange={(e) => console.log("e.target.value")}
