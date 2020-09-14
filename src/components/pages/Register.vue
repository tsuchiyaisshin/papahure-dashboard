<template>
    <div class="background-svg">
        <app-bar :text=headerText></app-bar>
        <v-container>
            <div v-if="pageCount === 1">
                <v-card>
                    <v-card-title class="select-text" @click="setPapaFlag(true)">
                        パパ
                    </v-card-title>
                </v-card>
                <v-card style="margin-top: 50px">
                    <v-card-title class="select-text" @click="setPapaFlag(false)">
                        プロデューサー
                    </v-card-title>
                </v-card>
            </div>
            <div v-if="pageCount === 2" class="text-center">
                <v-card class="card-position">
                    <vue-qrcode :value="connectHash"></vue-qrcode>
                    <v-card-actions>
                        <v-btn rounded class="scan-btn" style="background-color: rgba(255, 165, 0, 0.2);" @click="hashConnect">
                            <v-icon left>mdi-camera-outline</v-icon>
                            スキャンする
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-container>
    </div>
</template>

<script>
    import AppBar from "../molcules/AppBar";
    import VueQrcode from "@chenfengyuan/vue-qrcode";
    import {hashUtils} from "../../utils/hash";

    export default {
        name: "Register",
        components: {AppBar, VueQrcode},
        data: () => ({
            headerText: '役割を決めよう!',
            pageCount: 1,
            papaFlag: false,
            connectHash: undefined,
        }),
        mounted() {
            this.generateConnectHash()
        },
        methods: {
            generateConnectHash () {
                this.connectHash = hashUtils.makeid(32)
                return this.connectHash
            },

            setPapaFlag(bool) {
                if (bool) {
                    this.headerText = '娘と連携しよう！'
                } else {
                    this.headerText = 'パパと連携しよう!'
                }
                this.papaFlag = bool
                this.pageCount = 2
            },

            hashConnect() {
                //TODO: APIとの通信を叩いて連携する。
                this.pageCount = 3
            }
        }
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

    .text-center {
        text-align: center;
    }

    .card-position {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .scan-btn {
        margin-left: auto;
        margin-right: auto;
        color: orangered;
        margin-top: 50px
    }
</style>