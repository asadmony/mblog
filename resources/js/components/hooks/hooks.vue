<template>
<div>
    <h2 ref="heading">this is {{ name }}</h2>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: 'hooks'
        }
    },
    beforeCreated(){
        //authentications
    },
    created(){

    },
    mounted() {
        console.log(this.$refs.heading)
    },
}
</script>
