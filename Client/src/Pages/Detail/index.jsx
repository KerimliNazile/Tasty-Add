import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail = () => {
  const [deatil, setDetail] = useState()
  const { id } = useParams()
  const fetchDetail = async () => {
    const res = await axios(`http://localhost:5000/deps/${id}`)
    setDetail(res.data)
  }
  useEffect(() => {
    fetchDetail()
  }, [])

  return (
    <div>

      {deatil ? <>
        <div className="DetailArea">
          <ul>
            <li><img src={deatil.image} alt="" /></li>
            <li>{deatil.text}</li>
            <li>{deatil.info}</li>
            <li>{deatil.price}</li>
          </ul>
        </div>


      </> : ''}
    </div>
  )
}

export default Detail