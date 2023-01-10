<template><br><br><br>
    <b-container>
        <b-row>
            <b-col sm="9">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-danger">DEPARTEMENT</h6>
                    </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <!-- <th>Id</th> -->
                                            <th>Nom</th>
                                            <th>Code</th>
                                            <th>Emplacement</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="fourniture" v-for="departement in departement" :key="departement.id_dep">
                                                <td>{{departement.nom_dep}}</td>
                                                <td>{{departement.code_dep}}</td>
                                                <td>{{departement.emplacement_dep}}</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-secondary" @click="getModifDepartement(departement)" title="Modifier">
                                                        <font-awesome-icon icon="fa-solid fa-upload"/>
                                                    </button> &nbsp;
                                                    <button type="button" class="btn btn-outline-danger" @click="deleteDepartement(departement.id_dep)" title="Supprimer">
                                                        <font-awesome-icon icon="fa-solid fa-delete-left"/>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            </b-col>
            <b-col sm="3">
                <form>
                    <div class="form-group">
                    <br>
                    <input type="text" class="form-control" id="nom_dep" v-model="nom_dep" placeholder="Entrer nom"><br>
                    <input type="number" class="form-control" id="code_dep" v-model="code_dep" placeholder="Entrer code"><br>
                    <input type="text" class="form-control" id="emplacement_dep" v-model="emplacement_dep" placeholder="Entrer emplacement"><br>
                    <button type="submit" class="btn btn-success" @click="ajoutDepartement" title="Ajouter">
                        <font-awesome-icon icon="fa-solid fa-add"/>
                    </button>
                    </div><br>
                    <div>
                        <input type="text" class="form-control" id="nom_dep" v-model="departement.nom_dep" placeholder="Entrer nom"><br>
                        <input type="number" class="form-control" id="code_dep" v-model="departement.code_dep" placeholder="Entrer code"><br>
                        <input type="text" class="form-control" id="emplacement_dep" v-model="departement.emplacement_dep" placeholder="Entrer emplacement"><br>
                        <button type="submit" class="btn btn-success" @click="modifDepartement" title="Modifier">
                            <font-awesome-icon icon="fa-solid fa-upload"/>
                        </button>
                    </div>
                </form> 
            </b-col>
        </b-row>
    </b-container>

</template>
<script src="../data/departement.js"></script>