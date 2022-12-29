<template><br><br><br>
    <b-container>
        <b-row>
            <b-col sm="8">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-danger">COMPTE UTILISATEUR</h6>
                    </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead class="thead-inverse">
                                        <tr>
                                            <th>Numero de compte</th>
                                            <th>Nom compte</th>
                                            <th>Mot de passe</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="" v-for="compte_user in compte_user" :key="compte_user.num_compte">
                                                <!-- <td>{{compte_user.num_compte}}</td> -->
                                                <td>{{ compte_user.num_compte }}</td>
                                                <td>{{compte_user.username}}</td>
                                                <td>{{compte_user.mdp_user}}</td>
                                                <td>{{compte_user.nom_role}}</td>
                                                <td>
                                                    <button type="button" class="btn btn-outline-secondary" @click="getModifCompteUser(compte_user)">Modifier</button> &nbsp;
                                                    <button type="button" class="btn btn-outline-danger" @click="deleteCompteUser(compte_user.num_compte)">Supprimer</button>
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
                        <div>
                            Role: {{roles.nom_role}}
                        </div>
                            <select class="form-control" v-model="roles.nom_role">
                                <option v-for="roles in roles" :key="roles.id_role">
                                    {{roles.nom_role}}
                                </option>
                            </select>
                    <br>

                    <input type="text" class="form-control" id="nom_utilisateur" v-model="username" placeholder="Entrer le nom utilisateur"><br>
                    <input type="text" class="form-control" id="mot_de_passe_utilisateur" v-model="mdp_user" placeholder="Entrer le mot de passe utilisateur"><br>
                    <button type="submit" class="btn btn-success" @click="ajoutCompteUser">Ajouter</button>
                    </div><br>
                    <div>
                        <div>
                            Selectionner: {{compte_user.nom_role}}
                        </div>
                            <select class="form-control" v-model="compte_user.nom_role">
                                <option v-for="roles in roles" :key="roles.id_role">
                                    {{roles.nom_role}}
                                </option>
                            </select>
                            <br>

                        <input type="text" class="form-control" id="username" v-model="compte_user.username"><br>
                        <input type="text" class="form-control" id="mdp_user" v-model="compte_user.mdp_user"><br>
                        <button type="submit" class="btn btn-success" @click="modifCompteUser">Modifier</button>
                    </div>
                </form>        
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="../data/compte_user.js"></script>