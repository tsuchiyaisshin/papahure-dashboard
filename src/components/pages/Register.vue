<template>
    <div class="background-svg">
        <app-bar text="目標を決めよう！"></app-bar>
        <v-container>
            <v-card>
                <v-card-title class="select-text">
                    パパ
                </v-card-title>
            </v-card>
            <v-card style="margin-top: 50px">
                <v-card-title class="select-text">
                    プロデューサー
                </v-card-title>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import AppBar from "../molcules/AppBar";

    export default {
        name: "Register",
        components: {AppBar},
    }
</script>

<style scoped>
    .select-text {
        font-weight: 600;
        font-size: 32px;
        text-align: center;
        margin-top: 50px;
        padding-top: 40px;
        padding-bottom: 40px;
        color: orangered
    }
</style>