# Inventory Management Dashboard

Một dashboard quản lý tồn kho và doanh thu, gồm ứng dụng client (Next.js + React + Tailwind) và API server (TypeScript + Express + Prisma). Dự án được thiết kế để dễ mở rộng, thuận tiện cho việc phát triển tính năng quản lý sản phẩm, kho, mua hàng, bán hàng và báo cáo.

---

## ✨ Mục tiêu dự án

- Cung cấp giao diện quản trị trực quan cho việc theo dõi sản phẩm, tồn kho, mua hàng và doanh thu.
- Xây dựng backend gọn gàng với API REST, sử dụng Prisma để map dữ liệu với database.
- Tạo các UI components tái sử dụng (dashboard cards, forms, modals, bảng dữ liệu).
- Hỗ trợ seed dữ liệu mẫu để nhanh chóng demo và kiểm thử.

---

## 📚 Tính năng chính

- Bảng dashboard tóm tắt: số liệu doanh thu, chi phí, mua/bán theo khoảng thời gian.
- Quản lý sản phẩm: tạo, sửa, xoá, xem chi tiết sản phẩm.
- Quản lý kho: theo dõi số lượng tồn, cảnh báo tồn thấp.
- Quản lý đơn mua và doanh số bán hàng.
- Quản lý người dùng và phân quyền cơ bản.
- API RESTful kèm seed data để khởi tạo môi trường demo.

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (TypeScript), React, Tailwind CSS
- **State:** Redux / Context (client `src/app/redux.tsx`)
- **Backend:** Node.js, Express, TypeScript
- **ORM:** Prisma (schema và client trong `inventory-management-server/prisma`)
- **DB:** SQLite / PostgreSQL (tùy cấu hình `DATABASE_URL`)
- **Tooling:** npm, ts-node, Prisma CLI

---

## 🏗️ Cấu trúc dự án (tóm tắt)

```
.
├── inventory-management-client/    # Next.js frontend
│   ├── public/
│   ├── src/
│   │   ├── app/                    # pages & components
│   │   └── state/                  # client-side API/state
│   └── package.json
├── inventory-management-server/    # API server + Prisma
│   ├── prisma/                     # schema.prisma, migrations, seed
│   ├── src/
│   │   ├── controllers/
│   │   └── routes/
│   └── package.json
├── package.json                     # (monorepo scripts or helper scripts)
└── README.md
```

Tham khảo các file chính: `inventory-management-client/src/app/page.tsx`, `inventory-management-client/src/app/redux.tsx`, `inventory-management-server/src/index.ts`, `inventory-management-server/prisma/schema.prisma`.

---

## 🚀 Chạy dự án (Development)

### Yêu cầu

- Node.js 18+ và `npm` hoặc `yarn`.

### Các bước nhanh

```bash
# Clone repo
git clone <repo-url>
cd <repo>

# Frontend
cd inventory-management-client
npm install
npm run dev

# Mở tab mới để chạy API server
cd ../inventory-management-server
npm install
# Nếu có script dev, ví dụ:
npm run dev
# Hoặc:
npm run start
```

Lưu ý: tên script có thể khác trong từng `package.json`; kiểm tra [inventory-management-client/package.json](inventory-management-client/package.json) và [inventory-management-server/package.json](inventory-management-server/package.json).

---

## ⚙️ Biến môi trường quan trọng

- `DATABASE_URL` — kết nối database cho Prisma (ví dụ SQLite file hoặc PostgreSQL URL).
- `PORT` — cổng chạy API server.
- `NEXT_PUBLIC_API_BASE_URL` — base URL để frontend gọi API (nếu cần thiết).

Tạo file `.env` ở thư mục `inventory-management-server/` hoặc theo tài liệu của dự án.

---

## 🧩 Các lệnh hữu ích (Prisma & seed)

```bash
# Tạo/migrate database
cd inventory-management-server
npx prisma migrate dev --name init

# Tạo client Prisma
npx prisma generate

# Chạy seed (nếu repo cung cấp)
node prisma/seed.js  # hoặc `npm run seed` nếu có script
```

---

## 🧭 Hướng dẫn phát triển nhanh

- Thêm component UI: tạo file dưới `inventory-management-client/src/app/components`.
- API mới: thêm route trong `inventory-management-server/src/routes` và controller tương ứng trong `controllers`.
- Khi sửa schema Prisma: chỉnh `prisma/schema.prisma` → `npx prisma generate` → tạo migration nếu cần.

---

## 🤝 Đóng góp

- Fork → tạo branch mới → commit → push → gửi pull request.
- Viết unit/integration tests cho API hoặc component UI khi thêm tính năng.

---

## 📄 License

Kiểm tra file `LICENSE` trong repo hoặc thêm giấy phép phù hợp (ví dụ MIT).

---

Nếu bạn muốn, tôi có thể:

- Dịch sang tiếng Anh.
- Mở rộng phần hướng dẫn deploy.
- Thêm badge, logo hoặc ví dụ ảnh màn hình.
