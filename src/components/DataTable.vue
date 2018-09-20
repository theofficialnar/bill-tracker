<template>
  <section class="section">
    <div class="columns is-centered" v-if="loading">
      <app-loader size="120px"></app-loader>
    </div>
    
    <div class="has-text-centered" v-else>
      <div class="columns is-centered">
        <h1 class="title is-2 is-uppercase has-text-weight-bold">{{ data.date }}</h1>
      </div>

      <div class="date__container">
        <!-- headers -->
        <div class="columns header__container">
          <div class="column">
            <h1 class="title is-4 is-uppercase has-text-weight-bold header__title">Type</h1>
          </div>
          <div class="column">
            <h1 class="title is-4 is-uppercase has-text-weight-bold header__title">Amount</h1>
          </div>
          <div class="column">
            <h1 class="title is-4 is-uppercase has-text-weight-bold header__title">Date Paid</h1>
          </div>
          <div class="column">
            <h1 class="title is-4 is-uppercase has-text-weight-bold header__title">Paid By</h1>
          </div>
        </div>

        <!-- items -->
        <div class="columns is-desktop" v-for="item in data.items" :key="item.id">
          <div class="column is-vertical-center">
            <p class="is-size-5 is-uppercase has-text-weight-semibold">{{ item.type }}</p>
          </div>
          <div class="column is-vertical-center">
            <p class="is-size-5">&#8369; {{ item.amount }}</p>
          </div>
          <div class="column is-vertical-center">
            <p class="is-size-5">{{ item.date_paid || 'N/A' }}</p>
          </div>
          <div class="column is-vertical-center">
            <p class="is-size-5">{{ item.paid_by || 'N/A'}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "data-table",
  props: {
    data: {
      type: Object
    },
    loading: {
      type: Boolean
    }
  }
};
</script>

<style scoped>
</style>