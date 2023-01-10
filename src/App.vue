<template>
  <div>
      <b-navbar toggleable="lg" type="dark" variant="danger" style="color:crimson;" fixed="top">
        <b-col sm="3">
          <b-navbar-brand href="#">GESTION DES STOCKS</b-navbar-brand>
        </b-col>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">ACCUEIL</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown text="FOURNITURE" right>
              <b-dropdown-item to="type">TYPE</b-dropdown-item>
              <b-dropdown-item to="designation">DESIGNATION</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown text="STOCK" right>
              <b-dropdown-item to="entree">ENTREE</b-dropdown-item>
              <b-dropdown-item to="stock">STOCK</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item to="departement">DEPARTEMENT</b-nav-item>

            <b-nav-item to="demande">DEMANDE</b-nav-item>

            <b-nav-item-dropdown text="CONSOMMATION" right>
              <b-dropdown-item to="consodep">DEPARTEMENT</b-dropdown-item>
              <b-dropdown-item to="consototal">TOTAL</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <template #button-content>
                <em>UTILISATEUR</em>
              </template>
              <b-dropdown-item to="utilisateur">PROFILE</b-dropdown-item>
              <b-dropdown-item to="compteuser">COMPTE</b-dropdown-item>
              <b-dropdown-item to="login">Deconnexion</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
   
</style>
