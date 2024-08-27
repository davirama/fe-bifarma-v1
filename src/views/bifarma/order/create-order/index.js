// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
// import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'
import FormCreate from './FormCreate'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/react-select/_react-select.scss'

const FormLayouts = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Form Permohonan Produk Untuk Penelitian' data={[{ title: 'Form' }, { title: 'Form Layouts' }]} />
      <Row>
        <Col sm='12'>
          <FormCreate />
        </Col>
      </Row>
    </Fragment>
  )
}
export default FormLayouts
