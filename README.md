# simple-datepicker

> Simple datepicker for your app!

[![NPM](https://img.shields.io/npm/v/simple-datepicker.svg)](https://www.npmjs.com/package/simple-datepicker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-datepicker
```

## Usage

```tsx
import React, { useState } from 'react'

import { SimpleDatepicker } from 'simple-datepicker'

const Example = () => {

  const [date, setDate] = useState("");

  const handler = (e: string) => setDate(e);

  return (
    <div>
      <SimpleDatepicker onChange={(e) => handler(e.target.value)} />
      {date}
    </div>
  )
}
```

## License

MIT © [ajronn](https://github.com/ajronn)
