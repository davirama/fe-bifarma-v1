// ** Navigation imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import charts from './charts'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import bifarma from './bifarma'

// ** Merge & Export
export default [...dashboards, ...bifarma,  ...apps, ...pages, ...uiElements, ...forms, ...tables, ...charts, ...others]
