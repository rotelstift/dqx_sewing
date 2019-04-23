<template id="arm">

  <div id="container">

    <div v-for="d in armData" v-if="d.slug === $route.params.slug">
      <p>{{d}}</p>

      <div v-for="p in d.parametor" class="blockArea">
        <div class="inner">
          <!-- <p>{{calDamage(remainingDamage + p.id, p.damage)}}</p> -->
          <p :id='"remainingDamage" + p.id'>{{p.damage}}</p>
          <form>
            <input
              v-bind:value='0'
              @blur="mylib_calDamage(p.id, p.damage, $event.target.value)" >
          </form>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

  import armData from '../../static/arm.json'
  import mylib from '@/components/util/mylib'

  export default {
    data: function() {
      return {
        armData: armData
      }
    },
    methods: {
      mylib_calDamage: function(id, fullDamage, damage){
        mylib.calDamage(id, fullDamage, damage)
      }
    }
  }

</script>

<style media="screen">
  div#container{
    width: 606px;
    padding: 0px;

  }
  div.blockArea{
    width: 200px;
    float: left;
    height: 200px;
    border-width: 1px;
    border-style: dashed;
    padding: 0px;

  }
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
