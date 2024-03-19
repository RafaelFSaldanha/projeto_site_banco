import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/landingpage/landingpage';
import Login from './pages/login/login';
import Cadastro from './pages/cadastro/cadastro';
import Pix from './pages/pix/pix';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landingpage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/pix' element={<Pix />} />
            </Routes>
        </BrowserRouter>
    )
}