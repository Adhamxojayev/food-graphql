import model from './model.js'

export default {
    Query: {
        tables: async () => await model.tables()
    },
    Mutation: {
        addTable: async (_,args) => {
            try {
                
                let table = await model.insertTable(args)
                if(table){
                    return {
                        status: 201,
                        message: 'the table added',
                        data: table
                    }
                }else throw new Error('error')

            } catch (error) {
                return{
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        deleteTable: async (_, args) => {
            try {
                
                let table = await model.deleteTable(args)
                if(table){
                    return{
                        status: 200,
                        message: 'the table deleted',
                        data: table
                    }
                }

            } catch (error) {
                return{
                    status: 400,
                    message: error,
                    data: null
                }
            }
        }
    },
    Table: {
        tableId: global => global.table_id,
        tableNumber: global => global.table_number,
        tableBusy: global => global.table_busy,
        order: async global => {
            if(global.table_busy) return await model.order(global.table_id)
            else return null
        }
    }
} 











