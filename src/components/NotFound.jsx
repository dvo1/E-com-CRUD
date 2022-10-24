import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className='not-found'>
                <h2>404</h2>
                <p>Page not found</p>
            </div>
        </>

    )
}

export default NotFound



// const express = require('express')
// const cors = require('cors')

// const app = express()

// app.use(express.json())
// app.use(cors())

// app.get('/', (req, res) => {
//     res.send('Abeg just work')
// })

// const port = process.env.PORT || 5000

// app.listen(port, console.log(`Server dey run on port ${port}`))