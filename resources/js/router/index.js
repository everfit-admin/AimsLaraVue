import { createRouter, createWebHistory } from 'vue-router'
//AIMS imports
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

//IT PORTAL imports
import PortalDashboard from '../views/itportal/PortalDashboard.vue'
import UserManagement from '../views/itportal/UserManagement.vue'
import DepartmentManagement from '../views/itportal/DepartmentManagement.vue'

//PROCUREMENT imports
import ProcurementDashboard from '../views/procurement/ProcurementDashboard.vue'
import DepartmentRequest from '../views/procurement/DepartmentRequest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //AIMS  router
    
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
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
    

    //IT PORTAL router
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
      path: '/department-management',
      name: 'department-management',
      component: DepartmentManagement
    },


    //PROCUREMENT router
    {
      path: '/procurement-dashboard',
      name: 'procurement-dashboard',
      component: ProcurementDashboard
    },
    {
      path: '/department-request',
      name: 'department-request',
      component: DepartmentRequest
    },
  ]
})

export default router
