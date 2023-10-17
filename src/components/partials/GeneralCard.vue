<script>
export default {
  name: 'GeneralCard',
  props: {
    card: Object,
  }


}
</script>

<template>
  <div class="col">
    <div class="card card-cst">

      <div class="title">
        <span class="fw-bold">Titolo:</span>
        <span>{{ card.title || card.name }}</span>
      </div>

      <div class="original-title">
        <span class="fw-bold">Titolo originale:</span>
        <span>OrigTitle{{ card.original_title || card.original_name }}</span>
      </div>

      <div class="language">
        <span class="language">{{ card.original_language }}</span>
      </div>

      <div class="vote">
        <span class="fw-bold">Voto:</span>
        <span>{{ card.vote_average }}</span>
      </div>
      <div class="Overview">
        <span class="fw-bold">Overview:</span>
        <span>{{ card.overview }}</span>
      </div>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.card-cst {
  width: 220px;
  height: 340px;
  font-size: 0.7rem;
  padding: 10px;
  overflow: auto;
  margin-bottom: 20px;
}

</style>