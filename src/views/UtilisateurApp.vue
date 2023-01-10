<template><br><br><br>
    <b-container>
        <b-row>
            <b-col sm="8">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-danger">UTILISATEUR</h6>
                    </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <th>Numero de compte</th>
                                            <th>Nom</th>
                                            <th>Code</th>
                                            <th>Departement</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="" v-for="utilisateur in utilisateur" :key="utilisateur.id_user">
                                                <td>{{utilisateur.num_compte}}</td>
                                                <td>{{utilisateur.nom_user}}</td>
                                                <td>{{utilisateur.code_user}}</td>
                                                <td>{{utilisateur.departement}}</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-secondary" @click="getModifUtilisateur(utilisateur)" title="Modifier">
                                                        <font-awesome-icon icon="fa-solid fa-upload"/>
                                                    </button> &nbsp;
                                                    <button type="button" class="btn btn-outline-danger" @click="deleteUtilisateur(utilisateur.id_user)" title="Supprimer">
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
            <b-col sm="4">
                <form>
                    <div class="form-group">
                    <br>
                        <div>
                            NUM COMPTE
                        </div>
                            <select class="form-control" v-model="compte_user.num_compte">
                                <option v-for="compte_user in compte_user" :key="compte_user.id_compte_user">
                                    {{compte_user.num_compte}}
                                </option>
                            </select>
                    <br>

                    <input type="text" class="form-control" id="nom_user" v-model="nom_user" placeholder="Entrer nom"><br>
                    <input type="number" class="form-control" id="code_user" v-model="code_user" placeholder="Entrer code"><br>
                    <input type="text" class="form-control" id="departement" v-model="departement" placeholder="Entrer departement"><br>
                    <button type="submit" class="btn btn-success" @click="ajoutUtilisateur" title="Ajouter">
                        <font-awesome-icon icon="fa-solid fa-add"/>
                    </button>
                    </div><br>
                    <div>
                        <input type="text" class="form-control" id="nom_user" v-model="utilisateur.nom_user"><br>
                        <input type="text" class="form-control" id="code_user" v-model="utilisateur.code_user"><br>
                        <input type="text" class="form-control" id="departement" v-model="utilisateur.departement"><br>
                        <button type="submit" class="btn btn-success" @click="modifUtilisateur" title="Modifier">
                            <font-awesome-icon icon="fa-solid fa-upload"/>
                        </button>
                    </div>
                </form>        
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="../data/utilisateur.js"></script>