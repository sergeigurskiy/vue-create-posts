<template>
    <Popup :isPopup="isPopup" txt='Пост создан, зайдите в раздел "Посты", чтобы просмотреть.'/>
    <form v-if="!loader" @submit.prevent="submitData" class="create">
        <div class="create-elements">
            <Input
                v-for="input in inputsRender.data"
                :key="input.id"
                :type="input.controlInputs.type"
                :label="input.controlInputs.label"
                :className="input.controlInputs.class"
                :idLabel="input.controlInputs.idLabel"
                :id="input.id"
                :isValid="input.controlInputs.isValid"
                :isTouch="input.controlInputs.isTouch"
                :errMessage="input.controlInputs.errMessage"
                :placeholder="input.controlInputs.placeholder"
                v-model:emitValue="input.controlInputs.value"
                :mapName="inputsRender.mapName"
                @change="validParams"
            />
            <Textarea
                v-for="textarea in textareasRender.data"
                :key="textarea.id"
                :type="textarea.controlInputs.type"
                :label="textarea.controlInputs.label"
                :className="textarea.controlInputs.class"
                :idLabel="textarea.controlInputs.idLabel"
                :id="textarea.id"
                :isValid="textarea.controlInputs.isValid"
                :isTouch="textarea.controlInputs.isTouch"
                :errMessage="textarea.controlInputs.errMessage"
                :placeholder="textarea.controlInputs.placeholder"
                v-model:emitValue="textarea.controlInputs.value"
                :mapName="textareasRender.mapName"
                @change="validParams"
            />
        </div>
        <select v-model="select" class="create-elements__select">
            <option value="note">Заметка</option>
            <option value="post">Пост</option>
        </select>
        <button :disabled="!submit" class="create-btn" type="submit">Создать пост</button>
    </form>
    <Loader v-else/>
</template>

<script>
import {createControls, validControls, submitForm, createData, cleanControls} from '../form/formLibruary'
import {api} from '../services/services'
import Input from './elementsUI/Input.vue'
import Textarea from './elementsUI/Textarea.vue'
import Loader from '../components/Loader.vue'
import Popup from './elementsUI/Popup.vue'
    export default {
        data(){
            return {
                isPopup:false,
                loader:false,
                select:'note',
                isSubmit:false,
                controls:{
                    inputsElems:{
                        data:[
                            {id:1, controlInputs:createControls({
                                label:'Введите название',
                                type:'text',
                                placeholder:'Название',
                                idLabel:'el_input',
                                class:'create-elements__input',
                                errMessage:'Некорректный ввод, следует ввести не менее 3 символов'
                            }, {required:true})},
                        ],
                        mapName:'inputsElems'
                    },
                    textareaElems:{
                        data:[
                            {id:1, controlInputs:createControls({
                                label:'Введите текст',
                                type:'text',
                                placeholder:'Текст',
                                idLabel:'el_textarea',
                                class:'create-elements__textarea',
                                errMessage:'Некорректный ввод, следует ввести не менее 7 символов'
                            },{maxLength:6})},
                        ],
                        mapName:'textareaElems'
                    }
                }
            }
        },
        methods:{
            validParams(name, id){
                let control = this.controls[name].data[id - 1].controlInputs
                control.isTouch = true
                control.isValid = validControls(control.value, control.validators)
            },

            async submitData(){
                let data = {
                    ...createData(this.controls),
                    selectOption: this.select,
                    saveStorage:false
                }
                try {
                    this.loader = true
                    await api.postRequest(data)
                    this.loader = false
                    cleanControls(this.controls)
                    this.isPopup = true
                    window.setTimeout(() => this.isPopup = !this.isPopup, 1500)
                } 
                catch (err) {
                    console.warn(err)
                }
            }
        },
        computed:{
            inputsRender(){
                return this.controls.inputsElems
            },
            textareasRender(){
                return this.controls.textareaElems
            },
            submit(){
                return this.isSubmit = submitForm(this.controls)
            },
        },
        components:{
            Input,
            Textarea,
            Loader,
            Popup
        },
    }
</script>

<style lang="scss" scoped>
    *{
        color: aliceblue;
    }
    .create-btn{
        display: block;
        margin-top: 20px;
        background-color: brown;
        height: 40px;
        padding: 0 20px;
        border-radius: 5px;
        font-size: 16px;
        letter-spacing: 1px;
        cursor: pointer;
        &:disabled{
            border: none;
            opacity: .4;
            cursor:no-drop;
        }
    }
    .create-elements__select{
        color: #000;
        background-color: #fff;
        margin-top: 20px;
        border-radius: 5px;
        border: none;
        width: 100%;
        padding: 10px 5px;
        box-sizing: border-box;
        & option{
            color: black;
        }
    }
</style>