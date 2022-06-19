export function createControls(objectControl,validators){
    return {
        ...objectControl,
        isValid:!validators,
        validators,
        value:'',
        isTouch:false,
        errMessage:'Введите данные корректно'
    }
}
// Функция validControls используется для проверки вводимых значений пользователем,
// где rulesValid правила по которым проверяются вводимые значения, возвращаемое значение - Boolean
export function validControls(value, rulesValid = null){ 
    let validValue = true

    if(rulesValid && rulesValid.required){
        validValue = value.length > 2 && validValue
    } else if (rulesValid && rulesValid.maxLength){
        validValue = value.length >= rulesValid.maxLength && validValue
    }
    return validValue
}
// Функция submitForm используется для того,чтобы разрешить пользователю отправить валидные данные,
// Возвращаемое значение - Boolean 
export function submitForm(controlsData){
    console.log(controlsData);
    let submit = true

    for (let prop in controlsData){
        if(controlsData.hasOwnProperty(prop)){
            let validProps = controlsData[prop].data.every(elem => {
                return elem.controlInputs.isValid
            })
            submit = validProps && submit
        }
    }
    return submit
}