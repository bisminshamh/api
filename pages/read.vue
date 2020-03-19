<template>
<div>

<head>
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
</head>

  <div id="app"
       class="ui container">
    <h1>Employee Details</h1>
    <div class="ui cards">
      <employee-details 
        v-for="employeename in employeenames"
        :employeename="employeename"
      ></employee-details>
    </div>
    <script type="text/x-template" id="employee-id-template">
    <div class="ui card">
      <div class="image">
        <img :src="user.avatar_url">
      </div>
      <div class="content">
        <a :href="`https://github.com/${employeename}`" class="header">{{user.name}}</a>
        <div class="meta">
          <span class="date">Joined in {{user.created_at}}</span>
        </div>
        <div class="description">
          {{user.bio}}
        </div>
      </div>
      <div class="extra content">
        <a :href="`https://github.com/${employeename}?tab=followers`">
          <i class="user icon"></i>
          {{user.followers}} Friends
        </a>
      </div>
    </div>
  </script>
</div>
</template> 
  <script type="text/x-template" id="employee-id-template">
  </script>

  <script>
      vue.component('employee-details',{
          template: '#employee-id-template',
          props:{
              employeename:{
                  type: string,
                  required: true

              }

          },
          data(){
              return{
                  user:{}
              }

          },
          created(){
              axios.get(`http://dummy.restapiexample.com/api/v1/employees/${this.employeename}`)
              .then(respons => {
                  this.user = response.data
              })
          }
      })
    new Vue({
      el: '#app',
      data: {
        usernames: []
      }
    })
  </script>
