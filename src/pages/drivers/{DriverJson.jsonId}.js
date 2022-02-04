import * as React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($jsonId: String) {
    driverJson(jsonId: { eq: $jsonId }) {
      jsonId
  		name
      placeOfBirth
      countryOfBirth {
        name
      }
      nationality {
        name
      }
      secondNationality {
        name
      }
    }
  }
`

const DriverPage = (props) => {
  return (
    <main>
      id: {props.data.driverJson.jsonId}
      <br/>
      name: {props.data.driverJson.name}
      <br/>
      place of birth: {props.data.driverJson.placeOfBirth}
      <br/>
      country of birth: {props.data.driverJson.countryOfBirth.name}
      <br/>
      nationality: {props.data.driverJson.nationality.name}
      <br/>
      second nationality: {props.data.driverJson.secondNationality?.name}
    </main>
  )
}

export default DriverPage
