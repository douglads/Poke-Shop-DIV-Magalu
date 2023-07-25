import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import { BuyFinished } from '../screens/BuyFinished';
import { Page404 } from '../screens/Page404';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/finished-buy" element={<BuyFinished />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}   