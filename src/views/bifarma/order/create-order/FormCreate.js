import { useState, Fragment } from 'react'
import Flatpickr from 'react-flatpickr'
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'

const FormCreate = () => {
  const [picker, setPicker] = useState(new Date())
  const [basic, setBasic] = useState(new Date())
  const doctorOptions = [
    { value: 'dr_smith', label: 'Dr. Smith' },
    { value: 'dr_johnson', label: 'Dr. Johnson' },
    { value: 'dr_williams', label: 'Dr. Williams' },
    { value: 'dr_brown', label: 'Dr. Brown' },
    { value: 'dr_jones', label: 'Dr. Jones' }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>Data Pemohon</CardTitle>
      </CardHeader>

      <CardBody>
        <Form>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='default-picker' >
                Tanggal Permintaan
              </Label>
              <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' 
                options={{
                    dateFormat: 'd-m-Y' // Format tanggal dd-mm-yy
                }}/>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label'>Basic</Label>
              <Select
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                defaultValue={null}
                options={doctorOptions}
                isClearable={false}
                placeholder="Silahkan Pilih Dokter"
              />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='nameMulti'>
                Nama Lengkap
              </Label>
              <Input type='text' name='name' id='nameMulti' placeholder='First Name' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='lastNameMulti'>
                Nomor Kontak
              </Label>
              <Input type='text' name='lastname' id='lastNameMulti' placeholder='Last Name' />
            </Col>
            <Col sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Fasilitas Kesehatan
              </Label>
              <Input type='text' name='city' id='cityMulti' placeholder='City' />
            </Col>
            <Col sm='12' className='mb-1'>
              <Label className='form-label' for='cityMulti'>
                Tujuan/Indikasi
              </Label>
              <Input type='text' name='city' id='cityMulti' placeholder='City' />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' for='default-picker' >
                Tanggal Permintaan Serah Terima
              </Label>
              <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' 
                options={{
                    dateFormat: 'd-m-Y' // Format tanggal dd-mm-yy
                }}/>
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label' id='timepicker'>
                Jam Permintaan Serah Terima
              </Label>
              <Flatpickr
                className='form-control'
                value={basic}
                id='timepicker'
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                  time_24hr: true
                }}
                onChange={date => setBasic(date)}
              />
            </Col>
            <Col sm='12' className='mb-1'>
              <Label className='form-label' id='timepicker'>
                Permintaan Khusus (Jika Ada)
              </Label>
              <Input type='textarea' name='text' id='exampleText' rows='3' placeholder='Textarea' />
            </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button>
                <Button outline color='secondary' type='reset'>
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default FormCreate
