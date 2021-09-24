import model from './model.js'

export default {
    Query: {
        steaks: async (_, {steakId}) => await model.steaks(steakId)
    },
    Mutation: {
        addSteak: async (_, args) => {
            try {
                let steak = await model.insertSteak(args)
                if(steak){
                    return{
                        status: 201,
                        message: 'the new steak has been added',
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
        deleteSteak: async (_, args) => {
            try {
                let steak = await model.deleteSteak(args)
                if(steak){
                    return{
                        status: 201,
                        message: 'the steak has been deleted',
                        data: steak
                    }
                }else throw new Error('there is no such steak')
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },

        updateSteak: async (_, args) => {
            try {
                let steak = await model.updateSteak(args)
                if(steak){
                    return{
                        status: 201,
                        message: 'the steak has been update',
                        data: steak
                    }
                }else throw new Error('there is no such steak')
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        }
     
    },
    Steak : {
        steakId: global => global.steak_id,
        steakName: global => global.steak_name,
        steakPrice: global => global.steak_price,
        steakImg: global => global.steak_img
    }

}











