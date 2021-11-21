import {Provider} from 'react-redux'
import generateStore from './redux/store'

import {BrowserRouter as Router,Switch,withRouter,Route} from "react-router-dom";

//Vistas
import Inicio from './views/home.jsx';
import Emprendimientos from './views/developments.jsx';
import Emprendimiento from './views/development.jsx';
import Propiedad from './views/property.jsx';
import PageContacto from './views/contact.jsx';
import PageNosotros from './views/about.jsx';
import Redi from './views/redi.jsx';
import Modulo from './views/modulo.jsx';
import Blog from './views/blog.jsx';
import RedirectView from './views/redirectView.jsx';

// Componentes
import Head from './components/head.jsx'
import ScrollToTop from './components/funcScrollToTop.jsx'
import { Footer } from './components/footer/Footer';
import { SectionForm } from './components/section-form/SectionForm';
import { Header } from './components/header/Header';
import Novedades from './views/novedades';

// Bool para producción-local

const production = false;
let routePath = ''
if(!production){
  routePath = "/clientes/flamma"
}

function App() {
  
  const store = generateStore()

  return (
    <Router>
      <ScrollToTop />
      <Provider store={store}>
      <Head />
      <Header />
          <Switch>
            <Route path={routePath + '/'} exact>
              <Inicio />
            </Route>     
            <Route path={routePath + '/tokko/:id'} exact>
              <RedirectView />
            </Route>     
            <Route path={routePath+'/desarrollos'} exact>
              <Emprendimientos/>
            </Route> 
            <Route path={routePath+'/desarrollo/:id/:title'} exact>
              <Emprendimiento />
            </Route>   
            <Route path={routePath + '/unidad/:operation/:type/:location/:id/:address'} exact>
              <Propiedad />
            </Route>   
            <Route path={routePath+'/nosotros'} exact>
              <PageNosotros />
            </Route>       
            <Route path={routePath+'/red-i'} exact>
              <Redi />
            </Route>       
            <Route path={routePath+'/modulo/:id/:name'} exact>
              <Modulo />
            </Route>       
            <Route path={routePath+'/novedades'} exact>
              <Novedades />
            </Route>       
            <Route path={routePath+'/novedades/blog/:id'} exact>
              <Blog />
            </Route>       
            <Route path={routePath+'/contacto'} exact>
              <PageContacto />
            </Route>       
          </Switch>
        <Footer />
      </Provider>
    </Router>
  );
}



export default withRouter(App);
