import React, { useState } from 'react'

import { SimpleDatepicker } from 'simple-datepicker'

const App = () => {

  const [date, setDate] = useState("");

  const handler = (e: string) => setDate(e);

  return (
    <div>
      <SimpleDatepicker onChange={(e) => handler(e.target.value)} />
      {date}
    </div>
  )
}

export default App
