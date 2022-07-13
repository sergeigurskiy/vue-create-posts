<template>
    <div class="loader">
        <span></span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .loader{
        height: 350px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #191828;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 100;
        & span {
            display: block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 7px solid transparent;
            border-top-color:brown;
            animation: spin .8s linear infinite;
        }
    }
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
</style>