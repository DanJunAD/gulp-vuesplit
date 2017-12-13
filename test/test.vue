<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data() {
    return {
      msg: 'Welcome to homepage',
    };
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-top: 10%;
}
</style>
