export default {
    computed:{
        valid(){
            return !this.isValid && this.isTouch
        }
    },
    props:{
        type:{type:String},
        label:{type:String},
        className:{type:String},
        errMessage:{type:String},
        idLabel:{type:String},
        type:{type:String},
        placeholder:{type:String},
        emitValue:{type:String},
        mapName:{type:String},
        id:{type:Number},
        isValid:{type:Boolean},
        isTouch:{type:Boolean},
        errMessage:{type:String},
    },
    emits:['change', 'update:emitValue']
}