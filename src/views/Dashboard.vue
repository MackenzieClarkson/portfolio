<template>
  <div>


      <v-container grid-list-xl fluid>
        Welcome to My Portfolio Website!!
        <v-layout v-if="!carousel" row wrap>
          <v-flex lg12>

              <div slot="widget-content">
                <v-jumbotron height="600px" src="./static/nature/n2.jpeg">
                  <v-container fill-height>
                    <v-layout align-center>
                      <v-flex>
                        <h3 class="display-3">Welcome to My Portfolio Website!!</h3>
                        <span class="subheading">
                          It is built using Vue.js (Front-end Framework) and Vuetify (Styling framework built on Google's Material UI!)
                        </span>
                          <a href="/site" class="purple--text">Learn More About my site</a>
                        <v-divider class="my-3"></v-divider>
                        <div class="title mb-3">Do you Prefer Carousels?</div>

                        <v-btn v-on:click="carouselToggle()" large color="primary" class="mx-0">Yes</v-btn>
                        <br>

                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-jumbotron>
              </div>

          </v-flex>

        </v-layout>
        <v-layout v-else row wrap>
          <v-flex lg12 sm12 xs12>

                <v-carousel height="600px">
                  <v-carousel-item height="600px" v-for="(item,i) in items" :src="item.src" :key="i">
                    <v-container fill-height>
                      <v-layout align-center>
                        <v-flex>
                          <h3 class="display-3">Welcome to My Portfolio Website!</h3>
                          <span class="subheading">
                            It is built using Vue.js (Front-end Framework) and Vuetify (Styling framework built on Google's Material UI!)
                          </span>
                            <a href="/site" class="purple--text">Learn More About my site</a>
                          <v-divider class="my-3"></v-divider>
                          <div class="title mb-3">Do you like Carousels?</div>

                          <v-btn v-on:click="carouselToggle()" large color="primary" class="mx-0">No They're the worst!</v-btn>
                          <br>

                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>

          </v-flex>
        </v-layout>

<div id="pageCard" class="pt-5">
  <div class="pb-2 title display-3">
    <v-flex sm12>
      <h3 class="display-2 grey--text text--darken-1">Built With</h3>
    </v-flex>
  </div>
<v-layout row wrap>
    <v-flex lg4 sm6>
      <v-card>
        <v-card-media height='400px' src="static/stack/vue.jpeg">

        </v-card-media>
        <v-card-text>

          <div>
            Vue.js is a front-end Javascript framework used to build powerful Single Page Applications (SPAs).
            It is open source, and is one of the most popular and "Starred" Github repositories available.
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn href="https://github.com/vuejs/vue" flat small>Vue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex lg4 sm6>
      <v-card>
        <v-card-media contain height='400px' src="/portfolio/static/stack/vuetify.png">

        </v-card-media>
        <v-card-text>

          <div>
            Vuetify is a component library that is built on top of Google's Material Design. It uses custom html-invoked components providing an easy to read and slick front-end design. Every UI component on this website is from Vuetify.
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn href="https://github.com/vuetifyjs/vuetify" flat small>Vuetify</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex lg4 sm6>
      <v-card>
        <v-card-media contain height='400px' src="portfolio/static/stack/vuex.png">
          <h2 class="black--text pa-3">
            Vuex
          </h2>
        </v-card-media>
        <v-card-text>

          <div>
            Vuex is a client-side persistent storage library for Vue. It is comparative to React Redux and is used to maintain session states between pages, as SPAs would normally be challenged to do so.
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn href="https://github.com/vuejs/vuex" flat small>Vuex</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <v-btn href="/site" color="info" flat>See Full Stack I Use</v-btn>
</div>
    </v-container>
  </div>
</template>

<script>
import API from '@/api';
import EChart from '@/components/chart/echart';
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic';
import PostListCard from '@/components/widgets/card/PostListCard';
import ProfileCard from '@/components/widgets/card/ProfileCard';
import PostSingleCard from '@/components/widgets/card/PostSingleCard';
import WeatherCard from '@/components/widgets/card/WeatherCard';
import PlainTable from '@/components/widgets/list/PlainTable';
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
import VWidget from '@/components/VWidget';
import Material from 'vuetify/es5/util/colors';
import VCircle from '@/components/circle/VCircle';
import BoxChart from '@/components/widgets/chart/BoxChart';
import ChatWindow from '@/components/chat/ChatWindow';
import CircleStatistic from '@/components/widgets/statistic/CircleStatistic';
import LinearStatistic from '@/components/widgets/statistic/LinearStatistic';
export default {
  methods:{
    carouselToggle () {
      this.carousel = !this.carousel
      console.log("carousel toggle")
    }
  },
  components: {
    VWidget,
    MiniStatistic,
    ChatWindow,
    VCircle,
    WeatherCard,
    PostSingleCard,
    PostListCard,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
    PlainTable,
    PlainTableOrder
  },
  data: () => ({
    items: [
      {
        src: 'portfolio/static/nature/n1.jpeg'
      },
      {
        src: 'portfolio/static/nature/n2.jpeg'
      },
      {
        src: 'portfolio/static/nature/n8.jpg'
      },
      {
        src: 'portfolio/static/discover_word/ds_2.jpeg'
      }
    ],
    color: Material,
    selectedTab: 'tab-1',
    carousel: false,
    linearTrending: [
      {
        subheading: 'Sales',
        headline: '2,55',
        caption: 'increase',
        percent: 15,
        icon: {
          label: 'trending_up',
          color: 'success'
        },
        linear: {
          value: 15,
          color: 'success'
        }
      },
      {
        subheading: 'Revenue',
        headline: '6,553',
        caption: 'increase',
        percent: 10,
        icon: {
          label: 'trending_down',
          color: 'error'
        },
        linear: {
          value: 15,
          color: 'error'
        }
      },
      {
        subheading: 'Orders',
        headline: '5,00',
        caption: 'increase',
        percent: 50,
        icon: {
          label: 'arrow_upward',
          color: 'info'
        },
        linear: {
          value: 50,
          color: 'info'
        }
      }
    ],
    trending: [
      {
        subheading: 'Email',
        headline: '15+',
        caption: 'email opens',
        percent: 15,
        icon: {
          label: 'email',
          color: 'info'
        },
        linear: {
          value: 15,
          color: 'info'
        }
      },
      {
        subheading: 'Tasks',
        headline: '90%',
        caption: 'tasks completed.',
        percent: 90,
        icon: {
          label: 'list',
          color: 'primary'
        },
        linear: {
          value: 90,
          color: 'success'
        }
      },
      {
        subheading: 'Issues',
        headline: '100%',
        caption: 'issues fixed.',
        percent: 100,
        icon: {
          label: 'bug_report',
          color: 'primary'
        },
        linear: {
          value: 100,
          color: 'error'
        }
      },
    ]
  }),
  computed: {
    activity () {
      return API.getActivity();
    },
    posts () {
      return API.getPost(3);
    },
    siteTrafficData () {
      return API.getMonthVisit;
    },
    locationData () {
      return API.getLocation;
    }
  },

};
</script>
