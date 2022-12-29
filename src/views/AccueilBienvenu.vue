<template><br><br><br>
    <b-container class="bv-example-row">
<!-- <b-row>
  <b-button v-b-modal.modal-prevent-closing>
    Modal
  </b-button>
  <b-modal
    id="modal-prevent-closing"
    ref="modal-5"
    title="Entrer votre nom"
    @show="modal5Reset"
    @hide="modal5Reset"
    @ok="modal5HandleOk"
  >
    <form ref="modal-5-form" @submit.stop.prevent="modal5HandleSubmit">
      <b-form-group
        :state="modal5_name_state"
        label="Name"
        label-for="name-input"
        invalid-feedback="Erreur"
      >
        <b-form-input
          id="name-input"
          v-model="modal5_name_input"
          :state="modal5_name_state"
          required
        >
        </b-form-input>
      </b-form-group>
    </form>

  </b-modal>
</b-row> -->

      <b-row>
          <img src="@/assets/img/imageStock.jpg" alt="">
      </b-row>
      
      <b-row>
        <h3>Présentation<i class="bi bi-arrow-down-up"></i></h3>
        Les stocks s’apparentent à l’ensemble des biens intervenant dans le cycle d’exploitation d’une société soit pour être consommé, soit pour être vendu en l’état ou à l’issu du processus de production. 
        Une bonne gestion des stocks permettra de satisfaire des besoins futurs. 
        Une bonne gestion des stocks constitue un facteur de flexibilité pour l’entreprise. En effet, les stocks  repésentent une charge financière et une immobilisation de capitaux. Cet application permet d’automatiser le mouvement des stocks de
        fournitures de Caisse d'Epargne de Madagascar. On utilise ici une interface simple et compréhensible. 
      </b-row><br>
      <b-row>
        <b-col sm="8">
          <h4>Utilisation</h4>
            En suivant cet instruction pour mieux manipuler l'application de stocks:
            <ol>
              <li>Gérer le type de fourniture</li>
              <li>Gérer la désignation</li>
              <li>Gérer le stock entrée</li>
              <li>Consulter le stock</li>
              <li>Gérer le departement</li>
              <li>Gérer la demande</li>
              <li>Consulter la consommation département</li>
              <li>Consulter la consommation total</li>
              <li>Gérer l'utilisateur</li>
            </ol>
        </b-col>
        <b-col sm="4">
          <h4>A savoir</h4>
          Toute entreprise, quelle que soit son activité, doit veiller à assurer une bonne gestion des stocks, 
          ainsi qu'une efficacité dans la rotation des stocks et la gestion des approvisionnements pour être performante et éviter le sur-stockage.
          La gestion des stocks est indispensable pour répondre au mieux aux demandes des departements. Un stock doit contenir les articles demandés en quantité adaptée.
        </b-col>
      </b-row>
    </b-container>

</template>

<script src="../data/AccueilBienvenu.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
