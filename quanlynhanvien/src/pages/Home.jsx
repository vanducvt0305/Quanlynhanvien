import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [arrNhanVien, setArrNhanVien] = useState([]);
  const layDanhSachNhanVien = () => {
    axios({
      url: "https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien",
      method: "GET",
    })
      .then((response) => {
        setArrNhanVien(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (maNhanVien) => {
    axios({
      url: `https://apitraining.cybersoft.edu.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`,
      method: "DELETE",
    })
      .then((response) => {
        alert("Đã xoá nhân viên thành công");
        layDanhSachNhanVien();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleDelete();
  }, []);
  useEffect(() => {
    layDanhSachNhanVien();
  }, []);
  return (
    <div>
      <div className="text-center text-3xl  mb-10">Danh Sách Nhân Viên</div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-6 text-left">Mã nhân viên</th>
            <th className="py-3 px-6 text-left">Tên nhân viên</th>
            <th className="py-3 px-6 text-left">Chức vụ</th>
            <th className="py-3 px-6 text-left">Hệ số chức vụ</th>
            <th className="py-3 px-6 text-left">Lương cơ bản</th>
            <th className="py-3 px-6 text-left">Số giờ làm trong tháng</th>
            <th className="py-3 px-6 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {arrNhanVien?.map((nhanVien) => {
            return (
              <tr key={nhanVien.maNhanVien}>
                <td className="py-3 px-6 border-b">{nhanVien.maNhanVien}</td>
                <td className="py-3 px-6 border-b">{nhanVien.tenNhanVien}</td>
                <td className="py-3 px-6 border-b">{nhanVien.chucVu}</td>
                <td className="py-3 px-6 border-b">{nhanVien.heSoChucVu}</td>
                <td className="py-3 px-6 border-b">{nhanVien.luongCoBan}</td>
                <td className="py-3 px-6 border-b">
                  {nhanVien.soGioLamTrongThang}
                </td>
                <td className="py-3 px-6 border-b">
                  <div className="flex justify-between">
                    <NavLink
                      className="text-white bg-orange-800 p-4 mr-4 rounded-md"
                      to={`capnhatthongtinnhanvien/${nhanVien.maNhanVien}`}
                    >
                      Sửa
                    </NavLink>
                    <button
                      className="text-white bg-orange-800 p-4 rounded-md"
                      onClick={() => {
                        handleDelete(nhanVien.maNhanVien);
                      }}
                    >
                      Xoá
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
