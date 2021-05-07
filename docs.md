SERVERSIDE

1. Packaget Modules:
``` Javascript:
- "body-parser": "^1.19.0"
- "cors": "^2.8.5"
- "dotenv": "^8.2.0"
- "express": "^4.17.1"
- "redis": "^3.1.2"
- "socket.io": "^4.0.1"
```

2. Require Modules
3. server.js
- `dotenv` là một mô-đun không phụ thuộc, tải các biến môi trường từ tệp .env vào process.env
- `express` là framework, ...
- `http` có nhiệm vụ khởi tạo một cổng kết nối HTTP server trả về client. (module có sẵn)
- `body-parser`
- `cors` là một cơ chế cho phép nhiều tài nguyên khác nhau (fonts, Javascript, v.v…) của một trang web có thể được truy vấn
    từ domain khác với domain của trang đó

- Khởi tạo server sử dụng expressJS với cổng kết nối http
- `app.use()` các phương thức mà server sử dụng

- Require module io từ socket.io, đưa io vào server, đồng thời export nó
- Cho phép tất cả các địa chỉ client khác được kết nối tới server `{ cors: { ... } }`
- Đóng gói các phương thức giao tiếp của io vào 1 module `socketManager`
- Một khi client được kết nối tới máy chủ, gọi đến các method có trong socketManager

4. socketManager.js
- Một khi client thực hiện send "code" => server gửi lại "code" tới tất cả các client, ngoại trừ client thực hiện gửi
    `broadcast.emit`

5. routes.js
- Server có 2 router ứng với 2 api: gửi (server post), nhận (server get)
- controller.js sẽ remote đến 2 api này

6. controller.js
* gửi (server post): saveCallId
const { id, signalData } = req.body;
- Lấy id và signalData từ client
- Một khi lấy được, đệ quy saveCallId

