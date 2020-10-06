import React, { useState } from 'react'

import { SimpleDatepicker } from 'simple-datepicker'
import 'simple-datepicker/dist/index.css'

const App = () => {

  const [date, setDate] = useState("");

  const handler = (e: string) => {
    setDate(e);
  }

  return (
    <div style={{ marginTop: "300px", marginLeft: "40%" }}>
      <div style={{ height: "20px", fontSize: "15px" }}>{date}</div>
      <SimpleDatepicker onChange={(e) => handler(e.target.value)} />
    </div>
  )
}

export default App
