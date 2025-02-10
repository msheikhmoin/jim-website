/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Equipment = () => {

  const equipmentData = [
    { id: 1, name: "Back Extention", price: 80000, discription: "Lower back and Abdominals", image: "/project-1.jpg" },
    { id: 2, name: "Pullup Bar", price: 55000, discription: "dip chin Machine", image: "/project-2.jpg" },
    { id: 3, name: "Gear c98e", price: 70000, discription: "Upright bike", image: "/project-3.jpg" },
    { id: 4, name: "Chest Press", price: 87000, discription: "Chest biceps Shoulder", image: "/project-4.jpg" },
    { id: 5, name: "ARM Extention", price: 90000, discription: "biceps Triceps", image: "/project-5.jpg" },
    { id: 6, name: "Lat PullDown", price: 65000, discription: "Shoulder Pulldowwn Machine", image: "/project-6.jpg" },
  ]

  return (
    <div>
      <div className="watches">
      {equipmentData.map((watch) => (
        <div key={watch.id} className="watch-card">
          <img src={watch.image} alt={watch.name} />
          <h3>{watch.name}</h3>
          <p>{watch.discription}</p>
          <div className="price">${watch.price}</div>
          <button>Add to Cart</button>
        </div>
      ))}

      </div>
    </div>
  )
}

export default Equipment;

