<template><br><br><br>
    <b-container>
        <b-row>
                        <b-col sm="6">
                            <div>
                                    PERSONNEL
                            </div>
                                <select class="form-control" v-model="utilisateur.nom_user">
                                    <option v-for="utilisateur in utilisateur" :key="utilisateur.id_user">
                                        {{utilisateur.nom_user}}
                                    </option>
                                </select><br>
                                <div>
                                    DEPARTEMENT
                                </div>
                                <select class="form-control" v-model="dep_demande.departement_demande">
                                    <option v-for="dep_demande in dep_demande" :key="dep_demande.id_dep">
                                        {{dep_demande.departement_demande}}
                                    </option>
                                </select><br>
                                <div>
                                    DESIGNATION
                                </div>
                                <select class="form-control" v-model="designation.libelle_designation">
                                    <option v-for="designation in designation" :key="designation.id_designation">
                                        {{designation.libelle_designation}}
                                    </option>
                                </select><br>
                                <input type="number" class="form-control" id="quantite" v-model="quantite" placeholder="Entrer quantité"><br>
                                <textarea class="form-control" name="" id="description" cols="12" rows="2" v-model="description" placeholder="Entrer description"></textarea><br>
                                <input type="date" class="form-control" id="date" v-model="date" placeholder="Entrer la date"><br>
                            <button type="submit" class="btn btn-success" @click="ajoutDemande" title="Ajouter">
                                <font-awesome-icon icon="fa-solid fa-add"/>
                            </button>
                        </b-col>
                        <b-col sm="6">
                            <div>
                               <br>
                                <select class="form-control" v-model="demande.nom_user">
                                    <option v-for="utilisateur in utilisateur" :key="utilisateur.id_user">
                                        {{utilisateur.nom_user}}
                                    </option>
                                </select><br>
                                
                                <select class="form-control" v-model="demande.departement_demande">
                                    <option v-for="dep_demande in dep_demande" :key="dep_demande.id_dep">
                                        {{dep_demande.departement_demande}}
                                    </option>
                                </select><br>
            
                                <select class="form-control" v-model="demande.libelle_designation">
                                    <option v-for="designation in designation" :key="designation.id_designation">
                                        {{designation.libelle_designation}}
                                    </option>
                                </select><br>
                                <input type="number" class="form-control" id="quantite" v-model="demande.quantite_demande" placeholder="Entrer quantité"><br>
                                <textarea class="form-control" name="" id="description" cols="12" rows="2" v-model="demande.description_demande" placeholder="Entrer description"></textarea><br>
                                <input type="date" class="form-control" id="date" v-model="demande.date_demande" placeholder="Entrer la date"><br>
                        <br><br><button type="submit" class="btn btn-success" @click="modifDemande" title="Modifier">
                                    <font-awesome-icon icon="fa-solid fa-upload"/>
                                </button>
                            </div>
                        </b-col>     
        </b-row><br>
        <b-row>
                <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-danger">LISTE DE DEMANDE</h6>
                    <div class="text-center">
                        <input type="date" name="" id="" v-model="date_debut">&nbsp;
                        <input type="date" name="" id="" v-model="date_fin">&nbsp;
                        <button type="button" class="btn btn-outline-secondary" @click="getDemandeByDate()" title="Recherche">
                            <font-awesome-icon icon="fa-solid fa-search"/>
                        </button> &nbsp;
                        <button type="button" class="btn btn-outline-secondary" @click="load()">Actualiser</button>
                    </div>
                           
                </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead class="thead-inverse">
                                    <tr>
                                        <!-- <th>Id</th> -->
                                        <th>Saisie par</th>
                                        <th>Departement</th>
                                        <th>Designation</th>
                                        <th>Quantite</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="" v-for="demande in demande" :key="demande.id_demande">
                                            <td>{{demande.nom_user}}</td>
                                            <td>{{demande.nom_dep +" "+ demande.code_dep +" "+ demande.emplacement_dep}}</td>
                                            <td>{{demande.libelle_designation}}</td>
                                            <td>{{demande.quantite_demande}}</td>
                                            <td>{{demande.description_demande}}</td>
                                            <td>{{getDate(demande.date_demande)}}</td>
                                            <td>
                                                <button type="button" class="btn btn-outline-secondary" @click="getModifDemande(demande)" title="Modifier">
                                                    <font-awesome-icon icon="fa-solid fa-upload"/>
                                                </button> &nbsp;
                                                <button type="button" class="btn btn-outline-danger" @click="deleteDemande(demande.id_demande)" title="Supprimer">
                                                    <font-awesome-icon icon="fa-solid fa-delete-left"/>
                                                </button>
                                                <button type="button" class="btn btn-outline-success" @click="ajoutConsoDep(demande)" title="Valider">
                                                    <font-awesome-icon icon="fa-solid fa-file-contract"/> 
                                                </button>   
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
<script src="../data/demande.js"></script>