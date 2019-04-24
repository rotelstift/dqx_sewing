<template id="arm">
  <div>

  <div id="container">

    <div v-for="d in armData" v-if="d.slug === $route.params.slug">


      <div v-for="p in d.parametor" class="blockAreaWrapper">
        <blockArea :item='p' />
      </div>

    </div>
  </div>
  <powerList/>
  </div>
</template>

<script>

  import BlockArea from '@/components/parts/BlockArea'
  import PowerList from '@/components/parts/PowerList'
  import armData from '../../static/arm.json'
  import mylib from '@/components/util/mylib'

  export default {
    components: {
      blockArea: BlockArea,
      powerList: PowerList
    },
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
    min-width: 606px;
  }
  div.blockAreaWrapper{
    width: 200px;
    float: left;
    height: 200px;
    border-width: 1px;
    border-style: dashed;
    padding: 0px;
  }
</style>
