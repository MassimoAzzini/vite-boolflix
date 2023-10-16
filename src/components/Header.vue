<script>
export default {
  name: 'Header'

}
</script>

<template>
  <header class="d-flex justify-content-between align-items-center px-5">
    <div class="logo">
      <img src="/public/logo-boolflix.png" alt="">

    </div>

    <div class="search-bar d-flex">
      <select class="form-select me-3" aria-label="Default select example">
        <option selected value="All">All</option>
        <option value="Film">Film</option>
        <option value="SerieTv">SerieTv</option>
      </select>

      <input class="search-name me-3" type="text" placeholder="Ricerca per nome">
      <button class="btn btn-danger">Cerca</button>

    </div>
  </header>
</template>


<style lang="scss" scoped>

header {
  width: 100%;
  height: 100px;
  background-color: black;

  .logo {
    width: 200px;
    img {
      width: 100%;
    }
  }
}

</style>