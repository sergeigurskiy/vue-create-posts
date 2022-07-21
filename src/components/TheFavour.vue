<template>
    <div v-if="storageData.length" class="favorite">
        <ul class="favorite-list">
            <li class="favorite-list__link"
                v-for="(link,index) in storageData"
                :key="link"
            >{{index + ')' + ' '}}{{link}}</li>
        </ul>
    </div>
    <div v-else class="favorite__empty">Не было сохранено ни одного поста</div>
</template>

<script>
import {getStorage} from '../helpers/storage'
    export default {
        created(){
            this.storageData = getStorage('store')
        },
        data(){
            return {
                storageData:null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .favorite__empty{
        font-size: 20px;
        color: #fff;
    }
    .favorite-list__link{
        font-size: 18px;
        color: #fff;
    }
</style>