import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_API_KEY } from '../config/keys'
import { destinationProps } from '../destinations'
import { styles } from '../styles'

interface MapProps {
  destinationList: destinationProps[]
  currentLocation: {
    latitude: number
    longitude: number
    latitudeDelta: number
    longitudeDelta: number
  }
  waypoints: { latitude: number; longitude: number }[]
}

export const Map: React.FunctionComponent<MapProps> = ({
  destinationList,
  currentLocation,
  waypoints
}: MapProps) => {
  return (
    <MapView
      style={styles.map}
      showsUserLocation={true}
      initialRegion={currentLocation}
      region={currentLocation}
    >
      <MapViewDirections
        origin={currentLocation}
        destination={currentLocation}
        apikey={GOOGLE_API_KEY}
        waypoints={waypoints}
        optimizeWaypoints={true} // to find the best route
        mode="WALKING" // no driving or busing. Auckland is famously having traffic jam
        strokeColor="hotpink"
        strokeWidth={4}
      />
      {destinationList &&
        destinationList.map((item: destinationProps) => {
          return (
            <Marker
              key={item.id}
              title={item.name}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude
              }}
            />
          )
        })}
    </MapView>
  )
}
