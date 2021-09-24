import { gql } from "apollo-server";

export default gql`
  extend type Query {
    orders(orderId: ID tableId: ID pagination: Pagination): [Order!]!
  }

  extend type Mutation {
    addOrder(tableId: ID!) : MutationResonse!
    addOrderSet(orderId: ID!,steakId: ID! ,count: Int!):MutationResonse!
    deleteOrder(orderId: ID!):MutationResonse!
    deleteOrderSet(orderSetId: ID!):MutationResonse!
    updateOrder(orderSetId: ID! count: Int!): MutationResonse!
    payadd(orderId: ID!): MutationResonse!
  }

  type Order {
    orderId: ID!
    tableNumber: Int!
    orderPaid: Boolean!
    OrderSets: [OrderSet!]!
    orderCreatedAt: Date!
    orderPrice: Int!
  }

  type OrderSet {
    orderSetId: ID!
    steak: Steak!
    count: Int!
    price: Int!
  }
`
