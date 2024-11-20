import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import DashboardAims from '../views/aims/DashboardAims.vue'
import PurchaseOverview from '../views/aims/PurchaseOverview.vue'
import PurchaseRequests from '../views/aims/PurchaseRequests.vue'
import PurchaseApproval from '../views/aims/PurchaseApproval.vue'
import BudgetFund from '../views/aims/BudgetFund.vue'
import AssetManagement from '../views/aims/AssetManagement.vue'
import MovedAssetsIn from '../views/aims/MovedAssetsIn.vue'
import MovedAssetsOut from '../views/aims/MovedAssetsOut.vue'
import ScrappedAssets from '../views/aims/ScrappedAssets.vue'
import Category from '../views/aims/Category.vue'

import PortalDashboard from '../views/itportal/PortalDashboard.vue'
import UserManagement from '../views/itportal/UserManagement.vue'

import ProcurementDashboard from '../views/procurement/ProcurementDashboard.vue'
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
    {
      path: '/portal-dashboard',
      name: 'portal-dashboard',
      component: PortalDashboard
    },

    {
      path: '/user-management',
      name: 'user-management',
      component: UserManagement
    },
    {
      path: '/procurement-dashboard',
      name: 'procurement-dashboard',
      component: ProcurementDashboard
    },

    

  ]
})

export default router
