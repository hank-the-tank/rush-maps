export interface destinationProps {
  id: string
  name: string
  latitude: number
  longitude: number
}

export const initialDestinations: destinationProps[] = [
  {
    id: "1",
    name: "154 Queen Street",
    latitude: -36.847607139791464,
    longitude: 174.76595059640425,
  },
  {
    id: "2",
    name: "10 Park Road",
    latitude: -36.86040364977655,
    longitude: 174.767225627095,
  },
  {
    id: "3",
    name: "25 Parnell Rise",
    latitude: -36.850703343076304,
    longitude: 174.77476977657108,
  },
  {
    id: "4",
    name: "1 Quay Street",
    latitude: -36.84751791742571,
    longitude: 174.78348893641768,
  },
]
