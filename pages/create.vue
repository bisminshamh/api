<template>
  <div>
    <v-form ref="createForm" @submit.prevent>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="name" label="Employee Name" required :rules="[genericRules.required]" single-line></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model.number="job" label="Employee job" single-line required :rules="[genericRules.required]"></v-text-field>
        </v-col>
      </v-row>
      <v-col class="text-center" sm="11">
          <v-btn small color="primary" @click="submit" type="submit">Submit</v-btn>
        </v-col>
    
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: '',
    job: '',
    genericRules: {
      required: t => t && t.length !== 0 || 'This Field is required'    
    }
  }),

  methods: {
    submit() {
      if (this.$refs.createForm.validate()) {
        this.$store.dispatch('employees/createEmployee', {
          name: this.name,
          job: this.job,
        })
      }
    }
  }
}

</script>
