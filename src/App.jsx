import React, { useEffect, useState } from 'react'
import Image from './component/Image'

const App = () => {

  const [data, setData] = useState([])

    useEffect(() => {
  
      const res = async () => {
        const response = await fetch(`https://randomuser.me/api/?page=1&results=1&seed=abc`);
        const movies = await response.json();
        setData(movies.results)
      }
      res()
  
    }, [])


  return (
    <div className="h-screen w-full ">
    {data.map((res)=>(
      <Image key={res.phone} res={res}/>
    ))}
     
    </div>
  )
}

export default App