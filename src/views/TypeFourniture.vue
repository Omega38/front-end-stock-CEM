<template><br><br><br>
    <b-container>
        <b-row>
            <b-col sm="9">
                <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-danger">TYPE FOURNITURE</h6>
                </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead class="thead-inverse">
                                    <tr>
                                        <!-- <th>Id</th> -->
                                        <th>Fourniture</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <tr class="fourniture" v-for="type_fourniture in type_fourniture" :key="type_fourniture.id_type_fourniture">
                                            <!-- <td>{{type_fourniture.id_type_fourniture}}</td> -->
                                            <td>{{type_fourniture.libelle_type_fourniture}}</td>
                                            <td>
                                                <button type="button" class="btn btn-outline-secondary" @click="getModifFourniture(type_fourniture)">Modifier</button> &nbsp;
                                                <button type="button" class="btn btn-outline-danger" @click="deleteFourniture(type_fourniture.id_type_fourniture)">Supprimer</button>
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
                    <br><br>
                    <input type="text" class="form-control" id="fourniture" v-model="fourniture" placeholder="Entrer le type fourniture"><br>
                    <button type="submit" class="btn btn-success" @click="ajoutFourniture">Ajouter</button>
                    </div><br>
                    <div>
                        <!-- <input type="text" class="form-control" id="fourniture" v-model="type_fourniture.id_type_fourniture"> -->
                        <input type="text" class="form-control" id="fourniture" v-model="type_fourniture.libelle_type_fourniture"><br>
                        <button type="submit" class="btn btn-success" @click="modifFourniture">Modifier</button>
                    </div>
                </form>     
            </b-col>
        </b-row>
    </b-container>

</template>
<script src="../data/type_fourniture.js"></script>