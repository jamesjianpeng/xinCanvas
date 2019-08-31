export const VL = 'Vline'
export const HL = 'HLine'
export const EL = 'el'

export type VL = string | number
export type HL = string

export interface Params {
  [ EL ]: HTMLElement,
  [ VL ]: VL[],
  [ HL ]: HL[]
}
