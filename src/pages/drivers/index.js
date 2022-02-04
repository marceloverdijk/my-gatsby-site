import * as React from "react"
import { Link, graphql } from "gatsby"

export const query = graphql`
  query {
    allDriverJson {
      nodes {
        jsonId
        name
        nationality {
          name
        }
      }
    }
  }
`

const DriversIndexPage = (props) => {
  console.log(props)
  return (
    <main>
      <ul>
        {props.data.allDriverJson.nodes.map(driver => (
          <li key={driver.jsonId}>
            <Link to={`/drivers/${driver.jsonId}`}>{driver.name}, {driver.nationality.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default DriversIndexPage
