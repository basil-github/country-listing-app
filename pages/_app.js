import '../styles/globals.css'
import Layout from '@layout/Default'
import store from '../app/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getCountries } from '../features/countries/countriesSlice'
import { fetchCountriesAPI } from '../features/countries/fetchCountriesAPI'
function MyApp ({ Component, pageProps }) {
  fetchCountriesAPI().then(res => {
    store.dispatch(getCountries(res))
  })

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
