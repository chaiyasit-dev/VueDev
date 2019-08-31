<template>
    <div>
        <h1>App</h1>
           <navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
    components: {
        navbar: Navbar
    }
}
</script>