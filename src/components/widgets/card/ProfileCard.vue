<template>
  <v-card>
    <v-img src="static/creative_process/09.jpeg" height="390">
      <v-layout column class="media ma-0">
        <v-card-title>

        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-title class="black--text pl-5 pt-5">
          <div class="display-1 pl-5 pt-5">Mackenzie Clarkson
          </div>
        </v-card-title>
      </v-layout>
    </v-img>
    <v-list two-line class="pa-0">
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon color="indigo">phone</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>(705) 957-3025</v-list-tile-title>
          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>chat</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile href="mailto:mackenzie.clarkson@uoit.net">
        <v-list-tile-action>
          <v-icon color="indigo">mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            mackenzie.clarkson@uoit.net
          </v-list-tile-title>
          <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="#">
        <v-list-tile-action></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>mackenzie.clarkson@ibm.com</v-list-tile-title>
          <v-list-tile-sub-title>Work</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile href="#">
        <v-list-tile-action>
          <v-icon color="indigo">location_on</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Toronto</v-list-tile-title>
          <v-list-tile-sub-title>Ontario, Canada</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {

};
</script>
