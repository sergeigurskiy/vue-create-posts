<template>
    <form class="create">
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
        <button :disabled="!submit" class="create-btn" type="submit">Создать пост</button>
    </form>
</template>

<script>
import {createControls, validControls, submitForm} from '../form/formLibruary'
import Input from './elements/Input.vue'
import Textarea from './elements/Textarea.vue'
    export default {
        data(){
            return {
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
            }
        },
        components:{
            Input,
            Textarea
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
</style>