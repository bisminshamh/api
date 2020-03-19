<template>
<div>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined>
      {{ user . name }}
    <v-list-item three-line >
      <V-flex >
      <v-list-item-content >
      
      <nuxt-link  v-for = "user in users" :key="user.id" class="list-data" >
        <div class="overline mb-10" >{{user.id}}</div>
        <v-list-item-title class="headline mb-1"> {{user.employee_name}} </v-list-item-title>
        <v-list-item-subtitle>{{user.employee_age}} </v-list-item-subtitle>
        <v-list-item-subtitle>{{user.employee_salary}}</v-list-item-subtitle>
        </nuxt-link >
      </v-list-item-content>
      </V-flex>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
  </v-card>
</div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData () {
    const {data} = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
    return{user : data}
  }
  }
</script>
