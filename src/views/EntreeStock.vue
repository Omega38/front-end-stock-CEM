<template><br><br><br>
        <b-container>
            <b-row>
                <b-col sm="6">
                    <div>
                    Designation: {{designation.libelle_designation}}
                    </div>
                            <select class="form-control" v-model="designation.libelle_designation">
                                <option v-for="designation in designation" :key="designation.id_designation">
                                    {{designation.libelle_designation}}
                                </option>
                            </select>
                    <br>

                    <input type="number" class="form-control" id="quantite" v-model="quantite" placeholder="Entrer la quantité"><br>
                    <input type="number" class="form-control" id="pu" v-model="pu" placeholder="Entrer le prix unitaire"><br>
                    <input type="date" class="form-control" id="date" v-model="date" placeholder="Entrer la date"><br>
                    <button type="submit" class="btn btn-success" @click="ajoutEntreeStock">Ajouter</button>
                </b-col>
                <b-col sm="6">
                    <div>
                        <div>
                            Designation: {{entree_stock.libelle_designation}}
                        </div>
                            <select class="form-control" v-model="entree_stock.libelle_designation">
                                <option v-for="designation in designation" :key="designation.id_designation">
                                    {{designation.libelle_designation}}
                                </option>
                            </select>
                            <br>

                        <input type="number" class="form-control" id="quantite" v-model="entree_stock.quantite_entree"><br>
                        <input type="number" class="form-control" id="pu" v-model="entree_stock.pu_entree"><br>
                        <input type="date" class="form-control" id="date" v-model="entree_stock.date_entree"><br>
                        <button type="submit" class="btn btn-success" @click="modifEntreeStock">Modifier</button>
                    </div>
                </b-col>
            </b-row><br>
            <b-row>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-danger">ENTREE STOCK</h6>
                        <div class="text-center">
                            <input type="date" name="" id="" v-model="date_debut">&nbsp;
                            <input type="date" name="" id="" v-model="date_fin">&nbsp;
                            <input type="submit" value="recherche" @click="getEntreeStockByDate()">&nbsp;
                            <button type="button" class="btn btn-outline-success" @click="load()">Actualiser</button>
                        </div><br>
                        <div class="container">
                            <b-card no-body class="text-center" header-tag="header">
                                <template #header>
                                    <h5 class="mb-0">MONTANT TOTAL</h5>
                                </template>
                                <h5 v-for="entree_stock_montant in entree_stock_montant" :key="entree_stock_montant.id_entree">
                                    {{ entree_stock_montant.somme_montant }} Ar
                                </h5>
                            </b-card>
                        </div>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <!-- <th>Id</th> -->
                                            <th>Designation</th>
                                            <th>Quantite</th>
                                            <th>PU</th>
                                            <th>Montant</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="" v-for="entree_stock in entree_stock" :key="entree_stock.id_entree">
                                                <td>{{entree_stock.libelle_designation}}</td>
                                                <td>{{entree_stock.quantite_entree}}</td>
                                                <td>{{entree_stock.pu_entree}}</td>
                                                <td>{{entree_stock.montant_entree}}</td>
                                                <td>{{entree_stock.date_entree}}</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-secondary" @click="getModifEntreeStock(entree_stock)">Modifier</button> &nbsp;
                                                    <button type="button" class="btn btn-outline-danger" @click="deleteEntreeStock(entree_stock.id_entree)">Supprimer</button>&nbsp;
                                                    <button type="button" class="btn btn-outline-success" @click="ajoutStock(entree_stock)">Stocker</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </b-row>
        </b-container>
</template>
<script src="../data/entree_stock.js"></script>