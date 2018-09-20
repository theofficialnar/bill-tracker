<template>
  <app-data-table :data="thisMonth" :loading="isLoading"></app-data-table>
</template>

<script>
import DataTable from "@/components/DataTable";
import { types } from "@/store/mutation-types";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  created() {
    this.$store.dispatch("getThisMonth");
  },
  destroyed() {
    this.$store.commit(types.ENABLE_LOADING);
  },
  computed: {
    ...mapGetters(["thisMonth", "isLoading"])
  },
  components: {
    "app-data-table": DataTable
  }
};
</script>

<style scoped>
</style>

