import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BoatDetails = (props) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [selectedBoat, setBoat] = useState('')

  useEffect(() => {
    let boat = props.boats.find(
      (boat) => boat.id === parseInt(id)
    )
    setBoat(boat)
  }, [props.boats, id])

  const backToHomepage =(e) => {
    console.log(e.key)
    if  (e.key === "Backspace") {
      navigate('/')
    }
  }

  return selectedBoat ? (
    <div className="detail" tabIndex="0" onKeyDown={(e) => backToHomepage(e)}>
      <div className="detail-header">
        <img src={selectedBoat.img} alt={selectedBoat.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{selectedBoat.name}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <h3>Price: ${selectedBoat.price}</h3>
          <h3>Boat ID: {selectedBoat.id}</h3>
        </div>
        <p>{selectedBoat.description}</p>
      </div>
    </div>
  ) : null;
}

export default BoatDetails
