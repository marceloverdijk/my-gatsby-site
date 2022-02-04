import * as React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($jsonId: String) {
    circuitJson(jsonId: { eq: $jsonId }) {
      jsonId
  		name
      country {
        name
      }
    }
  }
`

const CircuitPage = (props) => {
  console.log(props)
  return (
    <main>
      id: {props.data.circuitJson.jsonId}
      <br/>
      name: {props.data.circuitJson.name}
      <br/>
      country: {props.data.circuitJson.country.name}
    </main>
  )
}

export default CircuitPage
