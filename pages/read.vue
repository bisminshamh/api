<template>
<div><v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content v-for = "user in users" :key="user.id" >
        <div class="overline mb-4">EMPLOYEE ID:{{user.id}}</div>
        <v-list-item-title class="headline mb-1">EMPLOYEE NAME:{{user.employee_name}} </v-list-item-title>
        <v-list-item-subtitle>EMPLOYEE AGE:{{user.employee_age}}</v-list-item-subtitle>
         <v-list-item-subtitle>EMPLOYEE SALARY:{{user.employee_salary}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>DELETE</v-btn>
      <v-btn text>EDIT</v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            user:[]
        }
    },
    created(){
      axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => {
        this.user = response.data
    })
    }

  }
</script>