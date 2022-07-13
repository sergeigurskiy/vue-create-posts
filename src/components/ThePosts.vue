<template>
    <Loader v-if="isLoad"/>
    <div v-if="!isLoad && dataBase" class="posts">
        <div class="posts__column"
            v-for="obj in dataBase"
            :key="obj.id"
        >
            <div class="posts__item">
                <div class="posts__item-title">
                    {{obj.inputsElems_1}}
                </div>
                <div class="posts__item-desc">
                    {{obj.textareaElems_1}}
                </div>
                <div class="posts__item-type" :class="[obj.selectOption === 'note' ? 'note' : 'post']">{{obj.selectOption}}</div>
                <div class="posts-btns">
                    <button @click="saveBtnHandler(obj.id)" class="posts__item-btn" :class="[obj.saveStorage ? 'success' : '']">{{obj.saveStorage ? 'Cохранено' : 'Сохранить'}}</button>
                    <button @click="deleteBtnHandler(obj.id)" class="posts__item-btn delete">Удалить</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="posts__empty">На данный момент не было создано ни одного поста.</div>
</template>

<script>
import {api} from '../services/services'
import {transformData, unincludeId} from '../helpers/transforms'
import {storageGenerate, getStorage, setStorage} from '../helpers/storage'
import Loader from '../components/Loader.vue'
    export default {
        data(){
            return {
                dataBase:null,
                isLoad:false
            }  
        },
        methods:{
            saveBtnHandler(id){
                let storage = getStorage('store')
                console.log(storage);
                if(!storage.includes(id)){
                    this.dataBase = storageGenerate(this.dataBase, id)
                    storage.push(id)
                } else {
                    return false
                }
                setStorage('store', storage)
            },
            async deleteBtnHandler(id){
                this.isLoad = true
                await api.deletePost(id)
                this.dataBase = unincludeId(this.dataBase, id)
                !this.dataBase.length ? this.dataBase = false : null
                this.isLoad = false
                let storage = getStorage('store')
                storage = storage.filter(key => key !== id)
                setStorage('store', storage)
            }
        },
        async created(){
            try{
                this.isLoad = true
                let response = await api.getRequest()
                this.isLoad = false
                this.dataBase = transformData(response)
                let storage = getStorage('store')
                if(storage && storage.length){
                    storage.forEach(el => this.dataBase = storageGenerate(this.dataBase, el))
                }
            }
            catch (err) {
                console.warn(err);
                this.isLoad = true
            }
        },
        components:{
            Loader
        }
    }
</script>

<style lang="scss" scoped>
    .posts{
        display: flex;
        flex-wrap: wrap;
        color: #fff;
        margin: 0 -12px;
        position: relative;
        &__column{
            flex: 0 1 50%;
            padding: 0 12px;
            box-sizing: border-box;
            margin-bottom: 20px;
        }
        &__item{
            border: 2px solid silver;
            padding: 10px;
            box-sizing: border-box;
            display: flex;
            height: 100%;
            flex-direction: column;
            position: relative;
            &-title{
                font-size: 18px;
                text-transform: uppercase;
                letter-spacing: 1.2px;
                margin-bottom: 20px;
            }
            &-desc{
                flex: 1 1 auto;
                font-size: 16px;
            }
            &-type{
                position: absolute;
                top: 10px;
                border: 2px solid transparent;
                text-transform: uppercase;
                padding: 5px;
                box-sizing: border-box;
                border-radius: 3px;
                right: 10px;
                &.note{
                    border-color: silver;
                }
                &.post{
                   border-color: rgb(172, 29, 29);
                }
            }
            &-btn{
                padding: 8px;
                margin: 20px 0 0 0;
                box-sizing: border-box;
                font-size: 18px;
                border: 2px solid #4d4d4d;
                cursor: pointer;
                background: none;
                color: #fff;
                flex: 0 1 49%;
                &.delete{
                    border-color: rgb(122, 14, 14);
                }
                &.success{
                    border-color: rgb(135, 237, 135);
                }
            }
        }
        &__empty{
            font-size: 20px;
            color: #fff;
        }
        &__deleteempty{
             font-size: 20px;
            color: #fff;
        }
        &-btns{
            display: flex;
            justify-content:space-between;
        }
    }
</style>