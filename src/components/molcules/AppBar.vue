<template>
    <div class="background-svg">
        <v-container>
            <v-row dense class="mt-n5">
                <v-col cols="9">
                    <div class="date-text" v-text="date">
                    </div>
                </v-col>
                <v-col class="text-right" cols="3">
                    <img src="../../assets/svg/icons.svg" class="logo">
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <div class="app-bar-text" v-text="text">
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "AppBar",
        props: {
            text: {
                type: String,
                default: '目標を決めよう！',
            }
        },
        data: () => ({
            date: undefined
        }),
        mounted() {
            setInterval(this.showClock1)
        },
        methods: {
            showClock1() {
                const nowTime = new Date();
                const nowHour = nowTime.getHours();
                const nowMin = nowTime.getMinutes();
                const msg = nowHour + ":" + nowMin;
                this.date = msg
            }
        }
    }
</script>

<style scoped>
    .background-svg {
        background-image: url('../../assets/svg/header.svg');
        max-width: 320px;
        min-height: 149px;
    }

    .date-text {
        color: white;
        font-size: 13px;
        font-weight: 600;
    }

    .app-bar-text {
        color: white; font-size: 24px; font-weight: 600; text-align: center
    }
</style>