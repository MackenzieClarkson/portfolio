<template>
  <div>
    <div id="page-jumbotrons">

      <v-container grid-list-xl fluid>
        <v-layout v-if="!carousel" row wrap>
          <v-flex lg12>

              <div slot="widget-content">
                <v-jumbotron src="/static/nature/n2.jpeg">
                  <v-container fill-height>
                    <v-layout align-center>
                      <v-flex>
                        <h3 class="display-3">Welcome to My Portfolio Website!</h3>
                        <span class="subheading">
                          It is built using Vue.js (Front-end Framework) and Vuetify (Styling framework built on Google's Material UI!)
                        </span>
                          <a>Learn More About my site</a>
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

                <v-carousel>
                  <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
                    <v-container fill-height>
                      <v-layout align-center>
                        <v-flex>
                          <h3 class="display-3">Welcome to My Portfolio Website!</h3>
                          <span class="subheading">
                            It is built using Vue.js (Front-end Framework) and Vuetify (Styling framework built on Google's Material UI!)
                          </span>
                            <a>Learn More About my site</a>
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
      </v-container>
    </div>

        <!-- social/weather card start -->

        <v-flex lg4 sm12 xs12>
          <box-chart
            card-color="indigo"
            title="Trending"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.indigo.lighten1]"
            type="line"
          >
          </box-chart>
          <box-chart class="mt-4"
            card-color="pink"
            title="Page views"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']"
            gradient
            type="area"
          >
          </box-chart>
        </v-flex>
        <!-- statistic section -->
        <v-flex lg4 sm12 xs12>
          <linear-statistic
            title="Sales"
            sub-title="Sales increase"
            icon="trending_up"
            color="success"
            :value="15"
          >
          </linear-statistic>
          <linear-statistic class="my-4"
            title="Orders"
            sub-title="Increase"
            icon="trending_up"
            color="pink"
            :value="30"
          >
          </linear-statistic>
          <linear-statistic class="my-4"
            title="Revenue"
            sub-title="Revenue increase"
            icon="trending_up"
            color="primary"
            :value="50"
          >
          </linear-statistic>
          <linear-statistic class="mt-4"
            title="Cost"
            sub-title="Cost reduce"
            icon="trending_down"
            color="orange"
            :value="25"
          >
          </linear-statistic>
        </v-flex>
        <!-- Circle statistic -->
        <v-flex lg4 sm12 xs12 v-for="(item,index) in trending" :key="'c-trending'+index">
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          >
          </circle-statistic>
        </v-flex>
        <!-- acitivity/chat widget -->
        <v-flex lg6 sm12 xs12>
          <chat-window height="308px"></chat-window>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <v-widget title="Activities" contentBg="white">
            <div slot="widget-content">
              <ol class="timeline timeline-activity timeline-point-sm timeline-content-right">
                <li class="timeline-block" v-for="(item, index) in activity" :key="index">
                  <div class="timeline-point">
                    <v-circle dot large :color="item.color"></v-circle>
                  </div>
                  <div class="timeline-content">
                    <time datetime="2018" class="subheading">{{item.timeString}}</time>
                    <div class="py-2 text--secondary" v-html="item.text"></div>
                  </div>
                </li>
              </ol>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg7 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>
        <v-flex lg5 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>
      </v-layout>
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
        src: '/static/nature/n1.jpeg'
      },
      {
        src: '/static/nature/n2.jpeg'
      },
      {
        src: '/static/nature/n3.jpeg'
      },
      {
        src: '/static/nature/n4.jpeg'
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
