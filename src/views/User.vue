<template>
<div>
<h1>user</h1>
<p v-for="each in users" :key="each">
            <router-link :to="'/user/' + each">User: {{ each }}</router-link>
        </p>

  
</div>
</template>

<script>

export default {
    data() {
        return {
            users: [10, 20, 30, 40, 50]
        }
    }
}
</script>