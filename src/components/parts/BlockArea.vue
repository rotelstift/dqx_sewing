<template id="blockArea">
  <div class="inner">
    <p :id='"remainingDamage" + item.id'>{{item.damage}}</p>
    <form>
      <input
        v-bind:value='0'
        @blur="mylib_calDamage(item.id, item.damage, $event.target.value)" >
    </form>
  </div>
</template>

<script>
  import mylib from '@/components/util/mylib'

  export default {
    props: ['item'],
    methods: {
      mylib_calDamage: function(id, fullDamage, damage){
        mylib.calDamage(id, fullDamage, damage)
      }
    }
  }
</script>

<style media="screen">
div.inner{
  margin: 0px;
  padding: 0px;
  border: 0;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-content: center;

}
div.inner p {
  margin: 0px;
  width: 200px;
  height: 100px;
  font-size: 5em;
  display: flex;
  align-items: center;
  justify-content: center;

}
div.inner form {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
div.inner form input {
  font-size: 3em;
  width: 90px;
}
</style>
