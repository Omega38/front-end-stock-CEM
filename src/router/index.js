import { createRouter, createWebHistory } from "vue-router";

import AuthLogin from '@/views/AuthLogin'

import AccueilBienvenu from '@/views/AccueilBienvenu'
import DemandeStock from '@/views/DemandeStock'
import TypeFourniture from '@/views/TypeFourniture'
import DesignationStock from '@/views/DesignationStock'
import EntreeStock from '@/views/EntreeStock'
import StockDisponible from '@/views/StockDisponible'
import ConsommationDepartement from '@/views/ConsommationDepartement'
import ConsommationTotal from '@/views/ConsommationTotal'
import UtilisateurApp from '@/views/UtilisateurApp'
import CompteUtilisateurApp from '@/views/CompteUtilisateurApp'
import DepartementDemande from '@/views/DepartementDemande'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AccueilBienvenu
        },
        {
            path: '/type',
            component: TypeFourniture
        },
        {
            path: '/designation',
            component: DesignationStock
        },
        {
            path: '/entree',
            component: EntreeStock
        },
        {
            path: '/stock',
            component: StockDisponible
        },
        {
            path: '/departement',
            component: DepartementDemande
        },
        {
            path: '/demande',
            component: DemandeStock
        },
        {
            path: '/consodep',
            component: ConsommationDepartement
        },
        {
            path: '/consototal',
            component: ConsommationTotal
        },
        {
            path: '/utilisateur',
            component: UtilisateurApp
        },
        {
            path: '/compteuser',
            component: CompteUtilisateurApp
        },
        {
            path: '/login',
            component: AuthLogin
        },
    ]
})

export default router;