import crypto from 'crypto'

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

const types = ['Set top box', 'Lightbulb', 'Smoke detector']

interface appliance {
  name: string
  id: number
  type: string
  createdAt: Date
}

let appliances: appliance[] = []

for (let i = 0; i < 100; i++) {
  appliances.push({
    id: i,
    name: `Appliance ${crypto.randomBytes(2).toString('hex')}`,
    type: types[Math.floor(Math.random() * types.length)],
    createdAt: randomDate(new Date(2022, 0, 1), new Date(2022, 0, 30)),
  })
}

export const deleteById = (applianceId: string) => {
  appliances = appliances.filter(({ id }) => id !== parseInt(applianceId))
  console.log('appliances del ', appliances)
}

export const lightBulbData = () =>
  appliances.filter((appliance) => appliance.type === 'Lightbulb')

export const setTopBoxData = () =>
  appliances.filter((appliance) => appliance.type === 'Set top box')

export const smokeDetectorData = () =>
  appliances.filter((appliance) => appliance.type === 'Smoke detector')
export const getAllAppliances = () => appliances

export default appliances
