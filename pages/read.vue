<template>
<div>
  
    <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="user in $store.state.employees.users" :key="user.id">
  <v-card class="ma-3">    
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">ID: {{user.id}} </div>
        <v-list-item-title class="headline mb-1">{{user.first_name}}</v-list-item-title>
        <v-list-item-subtitle>{{user.last_name}}</v-list-item-subtitle>
        <v-list-item-subtitle> {{user.email}}</v-list-item-subtitle>
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
  </div>
</template>
<script>
export default {
  created(){
    this.$store.dispatch('employees/fetchEmployees')
  }
}
</script>