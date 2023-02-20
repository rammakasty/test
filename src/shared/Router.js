import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="works" element={<works />} />
            </Routes>
        </BrowserRouter>
    );
};
