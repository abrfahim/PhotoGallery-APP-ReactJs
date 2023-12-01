import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain="dev-zoe8ungxgr1idnd7.us.auth0.com"
    clientId="nae6yjKj4Uur1L2f4fwAOLOkh28aq6AS"
    authorizationParams={{
    redirect_uri: window.location.origin
    }}>
  
    <App/>
</Auth0Provider>,
)
