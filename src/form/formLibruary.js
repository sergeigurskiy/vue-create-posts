export function createControls(objectControl,validators){
    return {
        ...objectControl,
        isValid:!validators,
        validators,
        value:'',
        isTouch:false,
    }
}
// Функция createData собирает валидные данные которые ввел пользователь, и готовит их для отправки
export function createData (controlsData) {
    let data = {}
    Object.keys(controlsData).forEach(value => {
        const controls = controlsData[value].data
        controls.forEach(control => {
            let nameData = controlsData[value].mapName + `_${control.id}`
            data[nameData] = control.controlInputs.value
        })
    })
    return data
}
// Функция cleanControls очищает все значения введенные пользователем при валидной форме
export function cleanControls (controlsData) {
    Object.keys(controlsData).forEach(value => {
        controlsData[value].data.forEach(elem => {
            elem.controlInputs = {...elem.controlInputs, value:'', isTouch:false, isValid:false}
        })
    })
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