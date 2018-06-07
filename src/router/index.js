import HelloWorld from '@/components/HelloWorld'
import AccountsList from '../components/Accounts/List'
import AccountsCreate from '../components/Accounts/Create.vue'
import AccountsView from '../components/Accounts/View.vue'
import AccountsEdit from '../components/Accounts/Edit.vue'

const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/contas', component: AccountsList },
  { path: '/contas/novo', component: AccountsCreate },
  { path: '/contas/:id', component: AccountsView },
  { path: '/contas/:id/editar', component: AccountsEdit }
]

export default routes
