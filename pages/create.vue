<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="Employee Id" single-line></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="Employee Name" single-line></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="Employee Salery" single-line></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field label="Employee Age" single-line></v-text-field>
      </v-col>
      <v-col class="text-center"  sm="11">
        <v-btn small color="primary" @click="save">Submit</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
