import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}   