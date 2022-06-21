<template>
    <label :for="idLabel" :class="[className, !valid ? '' : 'err']">{{label}}
        <input @input="$emit('update:emitValue', $event.target.value), $emit('change', mapName, id)" :value="emitValue" :placeholder="placeholder" :type="type" :id="idLabel">
    </label>
    <span class="create-elements__err" v-if="valid">{{errMessage}}</span>
</template>

<script>
import formMixin from '../../mixins/elementsForm'
    export default {
        mixins:[formMixin]
    }
</script>

<style lang="scss" scoped>
    .create-elements__input{
        width: 100%;
        display: block;
        font-size: 18px;
        line-height: 35px;
        & input{
            display: block;
            width: 100%;
            height: 35px;
            border-radius: 4px;
            border: none;
            padding: 5px 20px;
            box-sizing: border-box;
            border: 2px solid transparent;

        }
        &.err input{
            background-color:#ffd5d5;
            border-color: red;
        }
    }
</style>