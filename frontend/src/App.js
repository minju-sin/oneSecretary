import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/page/user/MainPage';
import LoginPage from './components/page/user/LoginPage';
import SignUpPage from './components/page/user/SignUpPage';

import LocationPage from './components/page/user/LocationPage.js';
import MyLocationPage from './components/page/user/MyLocationPage.js';
import HeartPage from './components/page/user/HeartPage.js';
import MyPage from './components/page/user/MyPage.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<MainPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                
                
                <Route path="/location" element={<LocationPage />} />
                <Route path="/mylocation" element={<MyLocationPage />} />
                <Route path="/heart" element={<HeartPage />} />
                <Route path="/my" element={<MyPage />} />


            </Routes>
        </BrowserRouter>
    );
}

export default App;