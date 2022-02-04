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
  }
  createResolvers(resolvers)
}
