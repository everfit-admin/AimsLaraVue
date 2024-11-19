import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import DashboardAims from '../views/DashboardAims.vue'
import PurchaseOverview from '../views/PurchaseOverview.vue'
import PurchaseRequests from '../views/PurchaseRequests.vue'
import PurchaseApproval from '../views/PurchaseApproval.vue'
import BudgetFund from '../views/BudgetFund.vue'
import AssetManagement from '@/views/AssetManagement.vue'
import MovedAssetsIn from '@/views/MovedAssetsIn.vue'
import MovedAssetsOut from '@/views/MovedAssetsOut.vue'
import ScrappedAssets from '@/views/ScrappedAssets.vue'
import Category from '@/views/Category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard-aims',
      name: 'dashboard-aims',
      component: DashboardAims
    },
    {
      path: '/purchase-overview',
      name: 'purchase-overview',
      component: PurchaseOverview
    },
    {
      path: '/purchase-requests',
      name: 'purchase-requests',
      component: PurchaseRequests
    },
    {
      path: '/purchase-approval',
      name: 'purchase-approval',
      component: PurchaseApproval
    },
    {
      path: '/budget-fund',
      name: 'budget-fund',
      component: BudgetFund
    },
    {
      path: '/asset-management',
      name: 'asset-management',
      component: AssetManagement
    },
    {
      path: '/moved-assets-in',
      name: 'moved-assets-in',
      component: MovedAssetsIn
    },
    {
      path: '/moved-assets-out',
      name: 'moved-assets-out',
      component: MovedAssetsOut
    },
    {
      path: '/scrapped-assets',
      name: 'scrapped-assets',
      component: ScrappedAssets
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },


    

  ]
})

export default router
