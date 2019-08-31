
<template>
    <div>
       <p v-for="(x, y) in numbers" :key="y">{{ x }}</p>



       <p>  <a  :href="url" :target="b">{{url}}</a>  </p>
    </div>

   

</template>


<script>
export default {
    data() {
        return {
            show: false,
            numbers: [10, 20, 30, 40, 50],
            url:'https://www.google.co.th'
        }
    }
}
</script>
<style>
</style>