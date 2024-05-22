export interface IconsShip {
  large: string
  medium: string
}

export interface IconsShipClass {
  default: string
}

export interface ShipType {
  name: string
  title: string
  icons: IconsShipClass
}

export interface NationIcons {
  small: string | null
  medium: string | null
  large: string
}

export interface Nation {
  name: string
  title: string
  color: string
  icons: NationIcons
}

export interface Ship {
  __typename: string
  title: string
  description: string
  icons: IconsShip
  level: number
  type: ShipType
  nation: Nation
}
