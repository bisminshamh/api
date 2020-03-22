export const state = () => ({
  users: [],
  employee:{},
  singleuser:[]
})
export const actions = {
  fetchEmployees({commit}){
    this.$axios.get('https://reqres.in/api/users?page=2')
    .then(res=>{
      commit('setUsers', res.data.data)
    })
  },
  singleEmployees({commit}){
    this.$axios.get('https://reqres.in/api/users/2')
    .then(res=>{
      commit('setsingleUser', res.data.data)
    })
  },
  createEmployee ({commit}, payload) {
    this.$axios.post('http://dummy.restapiexample.com/api/v1/create', payload)
    .then(res => {
      commit('setEmployee', res.data.data)
    })

  }

}
export const mutations = {
  setsingleUser(state,singleuser){
      state.singleuser.push(singleuser)
    },
  setUsers(state,users){
    users.forEach((user,index) => {
      state.users.push(user)
    })
  },
  setEmployee(state,payload){
    state.employee=payload
  }

}