import { round } from 'lodash'

export function calculateColor(acuity) {
  const colorMaping = {
    1: 'green',
    2: 'olive',
    3: 'yellow',
    4: 'orange',
    5: 'red'
  }
  return colorMaping[round(acuity)]
}
