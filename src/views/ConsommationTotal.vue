<template><br><br><br>
    <div class="container">                             
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-danger">CONSOMMATION TOTAL</h6>
            <div class="text-center">
                <input type="date" name="" id="" v-model="date_debut">&nbsp;
                <input type="date" name="" id="" v-model="date_fin">&nbsp;
                <input type="submit" value="recherche" @click="getConsoTotByDate()">&nbsp;
                <button type="button" class="btn btn-outline-secondary" @click="load()">Actualiser</button>
            </div>
          </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead class="thead-inverse">
                            <tr>
                                <th>Designation</th>
                                <th>Quantite</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="consommation_total in consommation_total" :key="consommation_total.id_conso_dep">
                                    <td>{{consommation_total.libelle_designation_conso_dep}}</td>
                                    <td>{{consommation_total.quantite_conso_dep}}</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../data/consommation_total.js"></script>