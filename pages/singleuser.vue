<template>
    <div>
        <v-container>
    <v-layout row wrap>
      <v-flex  :key="singleuser.id">
  <v-card class="ma-3">    
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">ID: {{singleuser.id}} </div>
        <v-list-item-title class="headline mb-1">{{singleuser.first_name}}</v-list-item-title>
        <v-list-item-subtitle>{{singleuser.last_name}}</v-list-item-subtitle>
        <v-list-item-subtitle> {{singleuser.email}}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn text>delete</v-btn>
      <v-btn text>Edit</v-btn>
    </v-card-actions>
</v-card>
      </v-flex>
    </v-layout>
    </v-container>

        <v-col class="text-center" sm="11">
          <v-btn small color="primary" @click="submit" type="submit">Submit</v-btn>
        </v-col>
    </div>
</template>
<script>
export default {
  methods: {
    submit() {
        this.$store.dispatch('employees/singleEmployees')
      }
    },computed:{
      singleuser() {
this.$store.state.singleuser
}
}
    }


</script>