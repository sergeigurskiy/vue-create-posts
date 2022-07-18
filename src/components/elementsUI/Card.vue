<template>
    <div class="posts__item">
        <div class="posts__item-title">
            {{obj.inputsElems_1}}
        </div>
        <div class="posts__item-desc">
            {{obj.textareaElems_1}}
        </div>
        <div class="posts__item-type" :class="[obj.selectOption === 'note' ? 'note' : 'post']">{{obj.selectOption}}</div>
        <div v-if="btns" class="posts-btns">
            <button @click="$emit('saveBtnHandler', obj.id)" class="posts__item-btn" :class="[obj.saveStorage ? 'success' : '']">{{obj.saveStorage ? 'Cохранено' : 'Сохранить'}}</button>
            <button @click="$emit('deleteBtnHandler', obj.id)" class="posts__item-btn delete">Удалить</button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            obj:{
                type:Object
            },
            btns:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>