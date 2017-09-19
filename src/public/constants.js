import { round } from 'lodash'

export function acuityRatingColor(rating) {
  const colorMaping = {
    1: 'green',
    2: 'olive',
    3: 'yellow',
    4: 'orange',
    5: 'red'
  }
  return colorMaping[round(rating)]
}

export function acuityNameColor(name) {
  const colorMaping = {
    'Complete Care': 'blue',
    'Bone Marrow': 'purple',
    'Immunosuppressed': 'violet'
  }
  return colorMaping[name]
}
