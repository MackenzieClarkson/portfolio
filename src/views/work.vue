<template>
  <div>
    <v-flex lg12 sm12 xs12>
      <post-list-card :items="projects"></post-list-card>
    </v-flex>
  </div>
</template>

<script>
import { getProjects } from '@/api/projects';
import ProfileCard from '@/components/widgets/card/ProfileCard';
import PostListCard from '@/components/widgets/card/PostListCard';
export default {
  components:{
    PostListCard
  },
  computed: {
    projects () {
      return getProjects();
    }
  },
  data () {
    return {

    };
  },
}
</script>
