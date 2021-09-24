import { gql } from "apollo-server";

export default gql`

  extend type Query {
    tables: [Table!]!
  }

  extend type Mutation {
    addTable(tableNumber: Int!): MutationResonse!
    deleteTable(tableId: ID!): MutationResonse! 
  }

  type Table {
    tableId: ID!
    tableNumber: Int!
    tableBusy: Boolean!
    order: Order
    
}
`
