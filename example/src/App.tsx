import React, { useState } from 'react'

import { SimpleDatepicker } from 'simple-datepicker'
import 'simple-datepicker/dist/index.css'

const App = () => {

  const [date, setDate] = useState("");

  const handler = (e: string) => setDate(e);

  return (
    <div style={{ margin: "200px" }}>
      <SimpleDatepicker onChange={(e) => handler(e.target.value)} />
      {date}
    </div>
  )
}

export default App
