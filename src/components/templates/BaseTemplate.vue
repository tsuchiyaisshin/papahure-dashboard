<template>
    <div class="background-svg">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "BaseTemplate",
    }
</script>

<style scoped>
    .background-svg {
        background-image: url('../../assets/svg/background.svg');
        min-width: 320px;
        max-width: 320px;
        min-height: 667px;
    }
</style>