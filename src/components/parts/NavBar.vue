<template>
  <!--アイテムへのリンクを作る。各アイテムは装備セットでまとめること-->
  <nav class="nav-bar">
    <h2><router-link to="/">Top</router-link></h2>
    <div v-for='key in sets.keys()'>
        <h2>{{key}}</h2>
        <ul>
          <li v-for='item in sets.get(key)'>
            <router-link :to='"/" + item[2]+ "/" + item[1]'>{{item[0]}}</router-link>
          </li>
        </ul>
    </div>
  </nav>
</template>

<script>
  import armData from '../../../static/arm.json'
  import hatData from '../../../static/hat.json'
  import topsData from '../../../static/tops.json'
  import bottomsData from '../../../static/bottoms.json'
  import footData from '../../../static/foot.json'

  function getItemSet() {
    // 登録してあるアイテムをセットごとにまとめるための関数
    var sets = new Map()
    var itemsData = [armData, hatData, topsData, bottomsData, footData]
    for (var items of itemsData){
      for (var i in items){
        var noItem = true
        for (var j in sets){
          if (sets[j].has(items[i].set)) {
            sets[j].get(items[i].set).push([items[i].name, items[i].slug, items[i].part])
            noItem = false
          }
        }
        if (noItem) {
          sets.set(items[i].set, [[items[i].name, items[i].slug, items[i].part]])
        }
      }
    }
    return sets
  }

  export default {
    name: 'sets',
    data: function() {
      return {
        sets: getItemSet()
      }
    }
  }
</script>
