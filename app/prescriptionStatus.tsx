"use client";
import { useEffect, useState } from "react"
const PrescriptionStatus = (progress: any) => {
  const [status, setStatus] = useState(progress);
  const handleChange = (e: any) => {
    setStatus(e.target.value);
    console.log('changing status: ', e.target.value);
  }
  useEffect(() => {

  }, [])

  console.log('status', status);
  function getProgress() {
    if (progress !== 'fulfilled') {
      return (<select className="bg-transparent" onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="wip">WIP (work in progress)</option>
        <option value="fulfilled">Fulfilled</option>
      </select>)
    } else { <p>{progress}</p> }
  }

  return (
    <>
      {getProgress()}
    </>
  )
}

export default PrescriptionStatus