import { useState, useEffect } from 'react'
import axios from 'axios'

const Tour = () => {
  const [rankings, setRankings] = useState([])

  useEffect(() => {
    const getRankList = async () => {
      let response = await axios.get('http://localhost:3001/tours/all')
      setRankings(response.data)
    }
    getRankList()
  }, [])

  return (
    <div>
      <h2>PGA Tour Info Page</h2>
      {rankings.length ? (
        <ol>
          {rankings.map((player) => (
            <li key={player.playerId}>{player.name}</li>
          ))}
        </ol>
      ) : (
        <h3>Retrieving the Most Up to Date Rankings. . . </h3>
      )}
    </div>
  )
}

export default Tour
