import {gql} from 'apollo-server'


export default gql`
    scalar Date
    scalar AnyData


    input Pagination{
        page: Int!
        limit: Int!
    }

    type MutationResonse {
        status: Int!
        message: String!
        data: AnyData!
    }
`