<script>
export default {
  name: 'GeneralCard',
  props: {
    Title: String,
    OrigTitle: String,
    OrigLanguage: String,
    Vote: Number,
    Overview: String,
  }


}
</script>

<template>
  <div class="col-2">
    <div class="card card-cst">

      <div class="title">
        <span class="fw-bold">Titolo:</span>
        <span>{{ Title }}</span>
      </div>

      <div class="original-title">
        <span class="fw-bold">Titolo originale:</span>
        <span>OrigTitle{{ OrigTitle }}</span>
      </div>

      <div class="language">
        <span class="language">{{ OrigLanguage }}</span>
      </div>

      <div class="vote">
        <span class="fw-bold">Voto:</span>
        <span>{{ Vote }}</span>
      </div>
      <div class="Overview">
        <span class="fw-bold">Overview:</span>
        <span>{{ Overview }}</span>
      </div>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.card-cst {
  font-size: 0.8rem;
  padding: 10px;
}

</style>