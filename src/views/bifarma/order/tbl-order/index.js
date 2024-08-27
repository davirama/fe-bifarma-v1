// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Row, Col, Button } from 'reactstrap'

// ** Demo Components
// import TableServerSide from './TableServerSide'
// import TableAdvSearch from './TableAdvSearch'
import TableOrder from './TableOrder'


// ** Styles
import '@styles/react/libs/tables/react-dataTable-component.scss'

const Tables = () => {
  return (
    <Fragment>
    <Breadcrumbs title='Data Order Bifarma' data={[{ title: 'Order Bifarma' }, { title: 'Data Order Bifarma' }]} />
      <Row>
        <Col sm='12'>
          <TableOrder />
        </Col>
      </Row>
      
    </Fragment>
  )
}

export default Tables
