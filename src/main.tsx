import ReactDOM from 'react-dom/client'
import App from './App'
import './reset.css'
import './global.css'
import { StrictMode } from 'react'
import { ListPokemonProvider } from './Context/ListPokemon'
import { CartItemsProvider } from './Context/CartItems'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ListPokemonProvider>
      <CartItemsProvider>
        <App />
      </CartItemsProvider>
    </ListPokemonProvider>
  </StrictMode>
)
