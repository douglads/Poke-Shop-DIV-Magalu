import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import { BuyFinished } from '../screens/BuyFinished';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/finished-buy" element={<BuyFinished />} />
            </Routes>
        </BrowserRouter>
    )
}   