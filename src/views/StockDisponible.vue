<template><br><br><br>
    <div class="container">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-danger">STOCK</h6>
            <div>
                <input type="date" name="" id="" v-model="date_debut">&nbsp;
                <input type="date" name="" id="" v-model="date_fin">&nbsp;
                <button type="button" class="btn btn-outline-secondary" @click="getStockByDate()" title="Recherche">
                    <font-awesome-icon icon="fa-solid fa-search"/>
                </button> &nbsp;
                <button type="button" class="btn btn-outline-success" @click="load()">Actualiser</button>
            </div>
          </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead class="thead-inverse">
                            <tr>
                                <!-- <th>Id</th> -->
                                <th>Designation</th>
                                <th>Quantite total</th>
                                <th>CUMP</th>
                                <th>Montant stock</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="stock in stock" :key="stock.id_stock">
                                    <td>{{stock.libelle_designation}}</td>
                                    <td>{{stock.quantite_stock}}</td>
                                    <td>{{stock.cump_stock}}</td>
                                    <td>{{stock.montant_stock}}</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../data/stock.js"></script>