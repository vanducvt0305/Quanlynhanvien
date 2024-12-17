import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ThemNhanVien = () => {
  const navigate = useNavigate();
  const [nhanVien, setNhanVien] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/ThemNhanVien
      `,
      method: "POST",
      data: nhanVien,
    })
      .then((response) => {
        alert("Thêm nhân viên thành công");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setNhanVien({
      ...nhanVien,
      [name]: value,
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Mã nhân viên</span>
          <input
            name="maNhanVien"
            className="text-center  p-4"
            type="text"
            placeholder="Mã nhân viên..."
            // value={nhanVien.maNhanVien}
            // disabled
            onInput={handleInput}
          />
        </div>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Tên nhân viên</span>
          <input
            name="tenNhanVien"
            className="text-center  p-4"
            type="text"
            placeholder="Tên nhân viên..."
            // value={nhanVien.tenNhanVien}
            onInput={handleInput}
          />
        </div>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Chức vụ</span>
          <input
            name="chucVu"
            className="text-center  p-4"
            type="text"
            placeholder="Chức vụ"
            // value={nhanVien.chucVu}
            onInput={handleInput}
          />
        </div>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Hệ số chức vụ</span>
          <input
            name="heSoChucVu"
            className="text-center  p-4"
            type="text"
            placeholder="Hệ số chức vụ"
            // value={nhanVien.heSoChucVu}
            onInput={handleInput}
          />
        </div>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Lương cơ bản</span>
          <input
            name="luongCoBan"
            className="text-center  p-4"
            type="text"
            placeholder="Lương cơ bản"
            // value={nhanVien.luongCoBan}
            onInput={handleInput}
          />
        </div>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Số giờ làm trong tháng</span>
          <input
            name="soGioLamTrongThang"
            className="text-center  p-4"
            type="text"
            placeholder="Số giờ làm trong tháng"
            // value={nhanVien.soGioLamTrongThang}
            onInput={handleInput}
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-12 py-4 rounded hover:bg-orange-700 mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThemNhanVien;
