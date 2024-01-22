import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Formikk from '../../Components/Formikk'
import FormAdd from '../../Components/Formikk'
const Addpage = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [property, setProperty] = useState(null)
  async function getData() {
    const res = await axios("http://localhost:5000/deps")
    setData(res.data)
  }
  async function deleteData(id) {
    const res = await axios.delete(`http://localhost:5000/deps/${id}`)
    getData()
  }
  useEffect(() => {
    getData()
  }, [])
  return (

    <div>
      <FormAdd getData={getData} />
      <div className="filter">
        <input type="search" value={search} placeholder='search' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setProperty({ name: "text", asc: null })}>default</button>
        <button onClick={() => setProperty({ name: "text", asc: true })}>a-z</button>
        <button onClick={() => setProperty({ name: "text", asc: false })}>z-a</button>
        <button onClick={() => setProperty({ name: "price", asc: true })}>inc</button>
        <button onClick={() => setProperty({ name: "price", asc: false })}>dec</button>
      </div>

      <table>
        <thead>
          <tr>
            <td>Image</td>
            <td>Text</td>
            <td>Info</td>
            <td>Price</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {data && data

            .filter(x => x.text.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (property && property.asc === true) {
                return (a[property.name] < b[property.name]) ? -1 : ((b[property.name] < a[property.name]) ? 1 : 0)
              } else if (property && property.asc === false) {
                return (a[property.name] > b[property.name]) ? -1 : ((b[property.name] > a[property.name]) ? 1 : 0)
              } else {
                return 0;
              }


            })



            .map(x =>
              <tr>
                <td><img src={x.image} alt="" /></td>
                <td>{x.text}</td>
                <td>{x.info}</td>
                <td>{x.price}</td>
                <td><button onClick={() => deleteData(x._id)}>delete</button></td>
              </tr>

            )}
        </tbody>
      </table>
    </div>
  )
}

export default Addpage