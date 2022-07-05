<template>
  <div class="wrapper">
    <div class="fullscreen">
      <div class="poster">
        <div class="poster-tabs">
          <ul class="poster-tabs-list">
            <li class="poster-tabs-list__link"><router-link to="/create" class="poster-tabs-list__item">Создать</router-link></li>
            <li class="poster-tabs-list__link"><router-link to="/posts" class="poster-tabs-list__item">Посты</router-link></li>
            <li class="poster-tabs-list__link"><a class="poster-tabs-list__item" href="#">Избранное</a></li>
          </ul>
          <div class="poster-content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  
}
</script>

<style lang="scss">
  .wrapper{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
    background-color: #191828;
  }
  .fullscreen{
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .poster{
    flex: 0 1 800px;
    min-height: 500px;
    &-tabs{
      &-list{
        margin-bottom: 20px;
        display: flex;
        &__link{
          flex: 1 1 auto;
          text-align: center;
          cursor: pointer;
        }
        &__item{
          text-decoration: none;
          font-size: 25px;
          font-weight: 500;
          color: #fff;
          display: block;
          min-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid transparent;
          &:hover{
            border-color: rgb(172, 29, 29);
          }
        }
      }
    }
    &-content{
      padding: 20px;
      box-sizing: border-box;
      border: 2px solid #fff;
      border-radius: 4px;
    }
  }
</style>

