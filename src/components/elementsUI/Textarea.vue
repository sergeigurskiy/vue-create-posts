<template>
    <label :for="idLabel" :class="[className, !valid ? '' : 'err']">{{label}}
        <textarea @input="$emit('update:emitValue', $event.target.value), $emit('change', mapName, id)" :value="emitValue" :placeholder="placeholder" :type="type" :id="idLabel"></textarea>
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
    .create-elements__textarea{
        width: 100%;
        display: block;
        font-size: 18px;
        line-height: 35px;
        & textarea{
            display: block;
            width: 100%;
            resize: none;
            height: 100px;
            padding: 10px 20px;
            box-sizing: border-box;
            border: 2px solid transparent;
            border-radius: 5px;
            outline: none;
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
        &.err textarea{
            background-color:#ffd5d5;
            border-color: red;
        }
    }
</style>