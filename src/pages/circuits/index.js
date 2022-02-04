import * as React from "react"
import { Link, graphql } from "gatsby"

export const query = graphql`
  query {
    allCircuitJson {
      nodes {
        jsonId
        name
        country {
          name
        }
      }
    }
  }
`

const CircuitsIndexPage = (props) => {
  console.log(props)
  return (
    <main>
      <ul>
        {props.data.allCircuitJson.nodes.map(circuit => (
          <li key={circuit.jsonId}>
            <Link to={`/circuits/${circuit.jsonId}`}>{circuit.name}, {circuit.country.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default CircuitsIndexPage
