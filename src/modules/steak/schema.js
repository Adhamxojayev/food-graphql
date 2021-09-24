import { gql } from "apollo-server";

export default gql`

  extend type Query {
    steaks(steakId : ID): [Steak!]!
  }

  extend type Mutation {
    addSteak(steakName: String! steakPrice: Int! steakImg: String!): MutationResonse!
    deleteSteak(steakId : ID!): MutationResonse!
    updateSteak(steakId: ID! steakName: String steakPrice: Int): MutationResonse!
  }

  type Steak {
    steakId: ID!
    steakName: String!
    steakPrice: Int!
    steakImg: String!
}
`
