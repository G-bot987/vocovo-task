import express, { Request, Response } from 'express'
import cors from 'cors'
import routes from './routes'
import {
  deleteById,
  getAllAppliances,
  lightBulbData,
  setTopBoxData,
  smokeDetectorData,
} from './db'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/appliances/ping', (req: Request, res: Response) => {
  return res.json({ message: 'appliances pong' })
})

// this returns all appliances.
app.get('/appliances', (req: Request, res: Response) => {
  return res.json({ message: getAllAppliances() })
})

app.get('/lightbulb', async (req: Request, res: Response) => {
  try {
    return res.json({ message: lightBulbData() })
  } catch (err) {
    console.log('no light bulbs')
    res.status(500).json(err)
  }
})

app.delete('/id/:id', (req: Request, res: Response) => {
  console.log('deleting', req.params)
  deleteById(req.params.id)
  return res.status(200).json('deleted')
})

app.get('/set-top-box', async (req: Request, res: Response) => {
  try {
    return res.json({ message: setTopBoxData() })
  } catch (err) {
    console.log('no Set top boxes')
    res.status(500).json(err)
  }
})

app.get('/smoke-detector', async (req: Request, res: Response) => {
  try {
    return res.json({ message: smokeDetectorData() })
  } catch (err) {
    console.log('no Smoke detectors')
    res.status(500).json(err)
  }
})

app.use('/appliances', routes)

app.listen(3001, () => {
  console.log(`Listening on port 3001`)
})
