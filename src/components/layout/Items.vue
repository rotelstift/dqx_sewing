<template>
  <main>
    <router-view @callFromChild="callFromChild"/>
  </main>
</template>

<script>

export default {
  name: 'Items',
  methods: {
    callFromChild: function() {
      alert("子供から親が呼ばれました")
    }
  }
}
</script>
