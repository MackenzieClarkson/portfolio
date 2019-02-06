<template>
  <v-container grid-list-xl fluid>
    <v-flex sm12>
      <h3 class="display-2 grey--text text--darken-1">Front End</h3>
    </v-flex>
  <v-layout row wrap>
      <v-flex lg4 sm6>
        <v-card>
          <v-card-media height='400px' src="/static/stack/vue.jpeg">

          </v-card-media>
          <v-card-text>

            <div>
              Vue.js is a front-end Javascript framework used to build powerful Single Page Applications (SPAs).
              It is open source, and is one of the most popular and "Starred" Github repositories available.
              <br>
              I use Vue daily as a developer at IBM, all of my Apps use it.
              <br><br>
              <span class="body-2">
                Work Experience: 1.5 Years
                <br>
                Hobbyist Experience: 1 Year

              </span>
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
          <v-card-media contain height='400px' src="/static/stack/vuetify.png">

          </v-card-media>
          <v-card-text>
            <div>
              Vuetify is a component library that is built on top of Google's Material Design.
              It uses custom html-invoked components providing an easy to read and slick front-end design.
              Every UI component on this website is from Vuetify.
              <br>
              I use Material for some of my Apps at IBM at IBM, as well as some side projects (like this website).
              <br><br>
              <span class="body-2">
                Work Experience: 1 Year
                <br>
                Hobbyist Experience: 1 Year
              </span>
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
          <v-card-media contain height='400px' src="/static/stack/vuex.png">
            <h2 class="black--text pa-3">
              Vuex
            </h2>
          </v-card-media>
          <v-card-text>

            <div>
              Vuex is a client-side persistent storage library for Vue.
              It is comparative to React Redux and is used to maintain session states between pages,
              as SPAs would normally be challenged to do so.
              <br>
              I always use Vuex with Vue so my experience matches.
              <br><br>
              <span class="body-2">
                Work Experience: 1.5 Years
                <br>
                Hobbyist Experience: 1 Year
              </span>
            </div>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn href="https://github.com/vuejs/vuex" flat small>Vuex</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm12>
        <h3 class="display-2 grey--text text--darken-1">Back End</h3>
      </v-flex>
      <v-flex lg4 sm6>
        <v-card>
          <v-card-media contain height='400px' src="/static/stack/node.png">
            <h2 class="black--text pa-3">
              Node & Express
            </h2>
          </v-card-media>
          <v-card-text>

            <div>
              Node is the JS runtime that allows javascript to be executed server-side. It is currently necessary for Javascript full stack applications and I am very greatful for it!
              Express is a framework for Node with many security and server configuration options.
              APIs can be built purely with Express but it is also common to use other modules to build APIs (though they are often built on Express).
              <br>
              Like Vue, I use Node on all my Apps.
              <br><br>
              <span class="body-2">
                Work Experience: 1.5 Year
                <br>
                Hobbyist Experience: 2 Years
              </span>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn href="https://github.com/vuejs/vuex" flat small>Node</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex lg4 sm6>
        <v-card>
          <v-card-media contain height='400px' src="/static/stack/graphql.png">
            <h2 class="black--text pa-3">
              GraphQL
            </h2>
          </v-card-media>
          <v-card-text>

            <div>
              GraphQL is a query language that challenges traditional REST API requirements.
              GraphQL's biggest strength is allowing client to define what they want and on the back end only requires a single request, even for complex queries.
              I use GraphQL on a large IBM App and when used properly it is highly scalable and is easily modifiable when user requirements change.
              <br><br>
              <span class="body-2">
                Work Experience: 1 Year

              </span>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn href="https://github.com/vuejs/vuex" flat small>Graphql</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex lg4 sm6>
        <v-card>
          <v-card-media contain height='400px' src="/static/stack/sequelize.svg">
            <h2 class="black--text pa-3">
              Sequelize & MySQL
            </h2>
          </v-card-media>
          <v-card-text>

            <div>
              Sequelize is an node based ORM with tools that make otherwise complex queries and model definitions easy.
              Many of my Apps at IBM use Sequelize and it can be combined with GraphQL allowing for automated model and query definitions.
              <br><br>
              <span class="body-2">
                Work Experience: 1 Year
                <br>
                Hobbyist Experience: 2 Years
              </span>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn href="https://github.com/vuejs/vuex" flat small>Sequelize</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {

}
</script>
