<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-10">ID</div>
        <v-list-item-title class="headline mb-1">EMPLOYEE NAME</v-list-item-title>
        <v-list-item-subtitle>AGE</v-list-item-subtitle>
        <v-list-item-subtitle>SALARY</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  mounted: function(){
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => console.log(response))
  }
  
}
</script>

