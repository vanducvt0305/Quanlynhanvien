import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChiTietNhanVien from "./pages/ChiTietNhanVien";
import ThemNhanVien from "./pages/ThemNhanVien";
import CapNhatThongTinNhanVien from "./pages/CapNhatThongTinNhanVien";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="danhsachnhanvien" element={<Home />} />
          <Route path="chitietnhanvien">
            <Route path=":id" element={<ChiTietNhanVien />} />
          </Route>
          <Route path="themnhanvien" element={<ThemNhanVien />} />
          <Route path="capnhatthongtinnhanvien">
            <Route path=":id" element={<CapNhatThongTinNhanVien />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
