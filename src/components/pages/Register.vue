<template>
  <div class="background-svg">
    <app-bar :text="headerText"></app-bar>
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
            <v-btn
              rounded
              class="scan-btn"
              style="background-color: rgba(255, 165, 0, 0.2);"
              @click="hashConnect"
            >
              <v-icon left>mdi-camera-outline</v-icon>
              スキャンする
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div v-if="pageCount === 3" class="text-center">
        <v-card>
          <v-card-title class="set-name-text" @click="setPapaFlag(true)">
            {{ nameSelectText }}
          </v-card-title>
          <v-text-field
            v-model="name"
            class="input-name-text"
            placeholder="めろん"
          >
          </v-text-field>
        </v-card>

        <v-btn
          v-if="name !== ''"
          class="direct-btn"
          style="padding: 25px 60px"
          rounded
          @click="settings"
        >
          決定
        </v-btn>
      </div>
      <div v-if="pageCount === 4" class="text-center">
        <v-row no-gutters>
          <v-col cols="4">
            <v-card
              :class="
                selectDifficulty === 1
                  ? 'difficulty-card-active'
                  : 'difficulty-card'
              "
              :ripple="false"
              rounded
              @click="setDifficulty(1)"
            >
              <div class="difficulty">
                ビギナー
              </div>
              <img src="../../assets/png/papa.png" class="logo" />
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              :class="
                selectDifficulty === 2
                  ? 'difficulty-card-active'
                  : 'difficulty-card'
              "
              :ripple="false"
              rounded
              @click="setDifficulty(2)"
            >
              <div class="difficulty">
                アマチュア
              </div>
              <img src="../../assets/png/papa-normal.png" class="logo" />
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card
              :class="
                selectDifficulty === 3
                  ? 'difficulty-card-active'
                  : 'difficulty-card'
              "
              :ripple="false"
              rounded
              @click="setDifficulty(3)"
            >
              <div class="difficulty">
                プロ
              </div>
              <img src="../../assets/png/papa-dash.png" class="logo" />
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-card
            style="text-align: center; margin-top: 20px"
            width="300"
            height="120"
          >
            <v-col cols="12">
              <div
                style="color: orangered; font-size: 18px; margin-top: 10px; margin-bottom: 10px; font-weight: 600;"
              >
                3日連続ですると何かが起こるよ
              </div>
              <v-row no-gutters>
                <v-icon style="color: limegreen">
                  mdi-shoe-print
                </v-icon>
                <v-spacer></v-spacer>
                <div
                  style="font-weight: 600; font-size: 28px; color: orangered"
                >
                  {{ steps }}歩
                </div>
              </v-row>
              <div></div>
            </v-col>
          </v-card>
        </v-row>
        <v-btn
          class="direct-btn-no-margin-top"
          style="padding: 25px 60px"
          rounded
          @click="sendReq"
        >
          決定
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import AppBar from '../molcules/AppBar'
import VueQrcode from '@chenfengyuan/vue-qrcode'
import { hashUtils } from '../../utils/hash'

export default {
  name: 'Register',
  components: { AppBar, VueQrcode },
  data: () => ({
    headerText: '役割を決めよう!',
    nameSelectText: '娘の名前を入力してね!',
    name: '',
    pageCount: 1,
    papaFlag: false,
    connectHash: undefined,
    selectDifficulty: 2,
  }),
  computed: {
    steps() {
      if (this.selectDifficulty === 2) {
        return '9000'
      } else if (this.selectDifficulty === 1) {
        return '6000'
      } else {
        return '12000'
      }
    },
  },
  mounted() {
    this.generateConnectHash()
  },
  methods: {
    generateConnectHash() {
      this.connectHash = hashUtils.makeid(32)
      return this.connectHash
    },

    setPapaFlag(bool) {
      if (bool) {
        this.headerText = '娘と連携しよう！'
      } else {
        this.headerText = 'パパと連携しよう!'
        this.nameSelectText = 'パパの名前を入力してね！'
      }
      this.papaFlag = bool
      this.pageCount = 2
    },

    hashConnect() {
      // TODO: APIとの通信を叩いて連携する。
      if (this.papaFlag) {
        this.headerText = '娘の名前'
      } else {
        this.headerText = 'パパの名前'
        this.nameSelectText = 'パパの名前を入力してね！'
      }
      this.pageCount = 3
    },

    setDifficulty(num) {
      this.selectDifficulty = num
    },

    settings() {
      this.headerText = '目標を決めよう！'
      this.pageCount = 4
    },

    sendReq() {
      // TDOO: リクエスト送信
    },
  },
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
  color: orangered;
}

.difficulty {
  font-weight: 600;
  font-size: 14px;
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  color: orangered;
}

.difficulty-card {
  margin: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  opacity: 0.5;
}

.difficulty-card-active {
  margin: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.set-name-text {
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-top: 50px;
  padding-top: 40px;
  color: orangered;
}

.input-name-text {
  color: orange;
  margin: -10px 20px 20px;
}

.direct-btn {
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  margin-top: 150px;
  width: 100px;
  color: orangered;
}

.direct-btn-no-margin-top {
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  margin-top: 50px;
  width: 100px;
  color: orangered;
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
  margin-top: 50px;
}
</style>
