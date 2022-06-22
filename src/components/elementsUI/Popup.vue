<template>
    <div :class="isPopup ? 'show' : '' " class="popup-message"><span>{{txt}}</span></div>
</template>

<script>
    export default {
        props:{
            txt:{type:String},
            isPopup:{type:Boolean}
        }
    }
</script>

<style lang="scss" scoped>
    .popup-message{
        width: 300px;
        border-radius: 7px;
        background-color: #D0D4E9;
        min-height: 40px;
        position: fixed;
        top: 15px;
        right: 15px;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 17px;
        padding: 10px;
        box-sizing: border-box;
        transition: .2s ease all;
        transform: scale(0);
        & span{
            display: block;
            line-height: 22px;
        }
        &.show{
            transition: .2s ease all;
            transform: scale(1);
        }
    }
</style>