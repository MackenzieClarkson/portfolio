<template>
  <v-card class="post-card">
    <v-toolbar color="transparent" flat dense card>
      <v-toolbar-title class="subheading ft-200">
        {{ title }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-divider>
    </v-divider>
    <v-card-text class="pa-0">
      <ul class="post--list flex-list vertical">
        <li class="post--item" v-for="(item, key) in items" :key="key">
          <div class=" post--link pa-4 layout row ma-0 text--primary">
            <div class="post--media">
              <img :src="item.featuredImage" alt="" width="180" height="100" class="image-scale">
            </div>
            <div class="post--content ml-3">
              <h3 class="title post--title">
                {{item.title}}
              </h3>
              <div class="post--desc py-2 text--secondary">
                {{ item.desc |
                  truncate({
                    length: 150
                  })
                }}
              </div>
              <div class="post--meta o-flex justify-space-between">
                <div class="post--author caption grey--text text--darken-1">
                  <span>
                    {{item.author}}
                  </span>
                  <time class="px-2">
                    {{item.createdAt}}
                  </time>
                  <a v-if="item.link" :href='item.link'>
                    Learn more
                  </a>
                </div>

              </div>
            </div>
          </div>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    items: { type: [Array, Object] },
    title: {type: String }
  },

  methods: {
    handleThumb () {
      // implement your own method here
    },
    handleComment () {
      // implement your own method here
    },
    handleFavorite () {
      // implement your own method here
    },
  }
};
</script>

<style scoped>
.ft-200 {
  font-weight: 200;
}
.post--item:hover{
  background: #f6f6f6;
}
.post--item a {
  text-decoration: none;
}
.flex-list.vertical {
  flex-direction: column;
}
.flex-list li{
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}
.flex-list li:last-child {
  border: none;
}

.flexbox-centering {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-scale:hover {
  transform: scale(1.05);
  transition: 0.7s;
}

</style>
