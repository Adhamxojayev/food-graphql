import model from "../order/model.js";

export default {
    Query: {
        orders: async () => await model.orders()
    },

    Mutation:{
        addOrder: async (_, args) => {
            try {
                let steak = await model.insertOrder(args)
                if(steak){
                    return{
                        status: 201,
                        message: 'the new order has been added',
                        data: steak
                    }
                }else throw new Error('this place is busy')
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        addOrderSet: async (_, args) => {
            try {
                let steak = await model.insertOrderSets(args)
                if(steak){
                    return{
                        status: 201,
                        message: 'the new orderSets has been added',
                        data: steak
                    }
                }else throw new Error('error')
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        deleteOrder: async (_, args) => {
            try {
                let steak = await model.deleteOrder(args)
                if(steak){
                    return{
                        status: 201,
                        message: 'the new order has been deleted',
                        data: steak
                    }
                }else throw new Error('error')
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        deleteOrderSet: async (_, args) => {
            try {
                let steak = await model.deleteOrderSet(args)
                if(steak){
                    return{
                        status: 201,
                        message: 'the new orderSets has been deleted',
                        data: steak
                    }
                }else throw new Error('error')
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        updateOrder: async (_, args) => {
            try {
                let steak = await model.updateOrder(args)
                if(steak){
                    return{
                        status: 201,
                        message: 'the order has been update',
                        data: steak
                    }
                }else throw new Error('error')
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        payadd : async (_,args) => {
            try {
                let pay = await model.payadd(args)
                if(pay){
                    return{
                        status: 201,
                        message: 'the order pay',
                        data: pay
                    }
                }else throw new Error('error')
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        }
    },

    Order:{
        orderId: global => global.order_id,
        tableNumber: global => global.table_number,
        orderPaid: global => global.order_paid,
        OrderSets: global => global.order_sets,
        orderCreatedAt: global => global.order_created_at,
        orderPrice: global => global.order_total_price ,
    },
    OrderSet:{
        orderSetId: global => global.order_set_id
    }
}











