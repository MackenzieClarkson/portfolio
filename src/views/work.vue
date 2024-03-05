<template>
  <div>
    <v-flex lg12 sm12 xs12>
      <post-list-card :items="personalProjects" title="Personal Projects"></post-list-card>
      <post-list-card :items="workProjects" title="Work Projects"></post-list-card>

    </v-flex>
  </div>
</template>

<script>
import { getPersonalProjects, getWorkProjects } from '@/api/projects';
import ProfileCard from '@/components/widgets/card/ProfileCard';
import PostListCard from '@/components/widgets/card/PostListCard';
export default {
  components:{
    PostListCard
  },
  computed: {
    personalProjects () {
      return getPersonalProjects();
    },
    workProjects () { 
      return getWorkProjects()
    }
  },
  data () {
    return {

    };
  },
}
</script>
