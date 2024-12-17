import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const CapNhatThongTinNhanVien = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nhanVien, setNhanVien] = useState({
    maNhanVien: 0,
    tenNhanVien: "string",
    chucVu: "string",
    heSoChucVu: 0,
    luongCoBan: 0,
    soGioLamTrongThang: 0,
  });
  const layThongTinNhanVien = () => {
    axios({
      url: `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${id}
      `,
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        setNhanVien(response.data);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${nhanVien.maNhanVien}`,
      method: "PUT",
      data: nhanVien,
    })
      .then((response) => {
        alert("Cập nhật thông tin nhân viên thành công");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    layThongTinNhanVien();
  }, []);
  return (
    <div>
      <div>Nhân viên {nhanVien.tenNhanVien}</div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Mã nhân viên</span>
          <input
            className="text-center  p-4"
            type="text"
            placeholder="Mã nhân viên..."
            value={nhanVien.maNhanVien}
            disabled
          />
        </div>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Tên nhân viên</span>
          <input
            name="tenNhanVien"
            className="text-center  p-4"
            type="text"
            placeholder="Tên nhân viên..."
            value={nhanVien.tenNhanVien}
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
            value={nhanVien.chucVu}
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
            value={nhanVien.heSoChucVu}
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
            value={nhanVien.luongCoBan}
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
            value={nhanVien.soGioLamTrongThang}
            onInput={handleInput}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CapNhatThongTinNhanVien;