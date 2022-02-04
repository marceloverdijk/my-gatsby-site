exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {

    CountryJson: {
      continent: {
        type: "ContinentJson!",
        resolve(source, args, context, info) {
          return context.nodeModel.findOne({
            type: "ContinentJson",
            query: {
              filter: { jsonId: { eq: source.continentId } }
            }
          })
        },
      },
    },

    CircuitJson: {
      country: {
        type: "CountryJson!",
        resolve(source, args, context, info) {
          return context.nodeModel.findOne({
            type: "CountryJson",
            query: {
              filter: { jsonId: { eq: source.countryId } }
            }
          })
        },
      },
    },

    DriverJson: {
      countryOfBirth: {
        type: "CountryJson!",
        resolve(source, args, context, info) {
          return context.nodeModel.findOne({
            type: "CountryJson",
            query: {
              filter: { jsonId: { eq: source.countryOfBirthCountryId } }
            }
          })
        },
      },
      nationality: {
        type: "CountryJson!",
        resolve(source, args, context, info) {
          return context.nodeModel.findOne({
            type: "CountryJson",
            query: {
              filter: { jsonId: { eq: source.nationalityCountryId } }
            }
          })
        },
      },
      secondNationality: {
        type: "CountryJson",
        resolve(source, args, context, info) {
          return context.nodeModel.findOne({
            type: "CountryJson",
            query: {
              filter: { jsonId: { eq: source.secondNationalityCountryId } }
            }
          })
        },
      },
    },
  }

  createResolvers(resolvers)
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type RaceJson implements Node @dontInfer {
      id: ID!
      jsonId: Int
      year: Int
      round: Int
    }
  `)
}
