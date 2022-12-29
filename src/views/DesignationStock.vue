<template><br><br><br>
    <b-container>
        <b-row>
            <b-col sm="9">
                        <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-danger">DESIGNATION</h6>
                </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead class="thead-inverse">
                                    <tr>
                                        <!-- <th>Id</th> -->
                                        <th>Type fourniture</th>
                                        <th>Designation</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="designation" v-for="designation in designation" :key="designation.id_designation">
                                            <td>{{designation.libelle_type_fourniture}}</td>
                                            <td>{{designation.libelle_designation}}</td>
                                            <td>
                                                <button type="button" class="btn btn-outline-secondary" @click="getModifDesignation(designation)">Modifier</button> &nbsp;
                                                <button type="button" class="btn btn-outline-danger" @click="deleteDesignation(designation.id_designation)">Supprimer</button>
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
                        <div>
                            Type de fourniture
                        </div>
                            <select class="form-control" v-model="type_fourniture.libelle_type_fourniture">
                                <option v-for="type_fourniture in type_fourniture" :key="type_fourniture.id_type_fourniture">
                                    {{type_fourniture.libelle_type_fourniture}}
                                </option>
                            </select>
                        <br>

                    <input type="text" class="form-control" id="designation" v-model="article" placeholder="Entrer le designation"><br>
                    <button type="submit" class="btn btn-success" @click="ajoutDesignation">Ajouter</button>
                    </div><br>
                    <div>
                        <select class="form-control" v-model="designation.libelle_type_fourniture">
                            <option v-for="type_fourniture in type_fourniture" :key="type_fourniture.id_type_fourniture">
                                {{type_fourniture.libelle_type_fourniture}}
                            </option>
                        </select>
                            <br>

                        <input type="text" class="form-control" id="designation" v-model="designation.libelle_designation"><br>
                        <button type="submit" class="btn btn-success" @click="modifDesignation">Modifier</button>
                    </div>
                </form>        
            </b-col>
        </b-row>
    </b-container>
</template>
<script src="../data/designation.js"></script>