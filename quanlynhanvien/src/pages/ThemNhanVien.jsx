import React from "react";

const ThemNhanVien = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = () => {};
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex mt-4 w-[400px]  items-center mx-auto">
          <span>Mã nhân viên</span>
          <input
            className="text-center  p-4"
            type="text"
            placeholder="Mã nhân viên..."
            // value={nhanVien.maNhanVien}
            // disabled
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThemNhanVien;
