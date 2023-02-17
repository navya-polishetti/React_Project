import { restroList } from "./constants"
import RestroCard from "./RestroCard"

const Body = () => {
  return (
    <div className="restro-list">
      {restroList.map((restro) => {
        return <RestroCard {...restro.data.data} key={restro.data.data.id} />
      })}

      {/*<RestroCard {...restroList[0].data.data} />
        <RestroCard {...restroList[1].data.data} />
        <RestroCard {...restroList[2].data.data} />
        <RestroCard {...restroList[3].data.data} />
        <RestroCard {...restroList[4].data.data} />
        <RestroCard {...restroList[5].data.data} />
        <RestroCard {...restroList[6].data.data} />
        <RestroCard {...restroList[7].data.data} />
        <RestroCard {...restroList[8].data.data} /> */}
    </div>
  )
}

export default Body
