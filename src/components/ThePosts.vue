<template>
<Loader v-if="isLoad"/>
    <div v-if="dataBase" class="posts">
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
                <button class="posts__item-btn">Сохранить</button>
            </div>
        </div>
    </div>
    <div v-else-if="!isLoad" class="posts__empty">На данный момент не было создано ни одного поста.</div>
</template>

<script>
import {api} from '../services/services'
import {transformData} from '../helpers/transformData'
import Loader from '../components/Loader.vue'
    export default {
        data(){
            return {
                dataBase:null,
                isLoad:false
            }  
        },
        async created(){
            try{
                this.isLoad = true
                let response = await api.getRequest()
                this.isLoad = false
                this.dataBase = transformData(response)
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
            }
        }
        &__empty{
            font-size: 20px;
            color: #fff;
        }
    }
</style>