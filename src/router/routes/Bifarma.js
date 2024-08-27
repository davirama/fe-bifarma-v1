import { lazy } from 'react'

const Reactstrap = lazy(() => import('../../views/tables/reactstrap'))
const DTBasic = lazy(() => import('../../views/tables/data-tables/basic'))
const DTAdvance = lazy(() => import('../../views/tables/data-tables/advance'))
const DTOrder = lazy(() => import('../../views/bifarma/order/tbl-order'))
const FormOrder = lazy(() => import('../../views/bifarma/order/create-order'))

const BifarmaRoutes = [
  {
    path: '/bifarma/tblorder',
    element: <DTOrder />
  },
  {
    path: '/bifarma/create-order',
    element: <FormOrder />
  }
  // {
  //   path: '/tables/reactstrap',
  //   element: <Reactstrap />
  // },
  // {
  //   path: '/datatables/basic',
  //   element: <DTBasic />
  // },
  // {
  //   path: '/datatables/advance',
  //   element: <DTAdvance />
  // }
]

export default BifarmaRoutes
