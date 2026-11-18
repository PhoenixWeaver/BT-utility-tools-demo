# 🔔 PhoenixFlixReminder — Bill & Task Reminder / Nhắc Hóa Đơn & Việc (PWA)

👉 **[phoenixflix.vercel.app/reminder](https://phoenixflix.vercel.app/reminder)** 📅

🌐 **[English](#english)** &nbsp;|&nbsp; **[App Screenshots](#screenshots)** &nbsp;|&nbsp; **[Tiếng Việt](#vietnamese)**

---
<a id="english"></a>
## 🇬🇧 English Guide

A zero-dependency, offline-first **Progressive Web App (PWA)** designed to help you never miss monthly recurring utility bills (electricity, water, phone/internet), personal schedules (sports events, club meetings, interviews), or time-sensitive kitchen timers (boiling water, turning off the stove).

Built as a single self-contained `index.html` file using **Vanilla JavaScript**, **Tailwind CSS**, and the **Web Audio API**, it works seamlessly both online and 100% offline on Android, iOS, and desktop browsers.

### 💡 The Backstory

**PhoenixFlixReminder** started from a simple, everyday need at home: helping my mom remember to pay monthly utility bills online before late fees kicked in, and giving her a reliable, unmistakable alarm when boiling water so she wouldn't forget to turn off the stove and let the whole pot boil dry!

What began as a practical tool for mom would be useful for everyone around us—whether it's helping a sports teammate show up on time to a scheduled match, reminding you before an important job interview, or alerting you to wrap up and prepare for an upcoming meeting.

### ✨ Key Features

- **Flexible Reminder Schedules:**
  - Choose **One Time** for a single appointment or task.
  - Choose **Weekly** for repeating events such as Saturday morning sports or Sunday morning church.
  - Choose **Monthly** for recurring bills and other month-to-month obligations.
  - Completing a weekly or monthly reminder automatically advances the due date to the next week or month.
- **Monthly Recurring Bills & Late-Fee Shield:**
  - Pre-configured reminders for Electricity (EVN), Water, and Mobile/Wi-Fi bills.
  - Smart urgency badges automatically highlight bills that are **Due Tomorrow**, **Due Today**, or **Overdue** to prevent late fees or service disconnection.
  - Marking a monthly bill as **Paid** logs it in your **Monthly Log** and automatically shifts the due date forward by one month.
- **Personal Tasks, Matches & Meetings:**
  - Quickly add one-off or recurring personal reminders (e.g., *Sports Team Match*, *Job Interview*, *Team Meeting Prep*, *Weekend Club Meeting*).
  - Attach customer IDs, payment amounts, or meeting locations, and assign a custom ringtone to each task.
- **Quick Countdown Timers (Kitchen & Focus):**
  - High-contrast countdown display with a circular SVG progress ring and one-tap **Start / Pause / Reset** controls.
  - 1-tap quick presets for everyday tasks (*Boil Water 5 min*, *Turn Off Stove 10 min*, *Simmer / Stew 20 min*, *Power Break 15 min*).
  - Run multiple timers simultaneously with a live floating mini-timer banner when switching tabs, or save your own custom presets.
- **Offline Synthesized Ringtones & Fullscreen Alarm:**
  - Uses the browser's native **Web Audio API** to synthesize three ringtone styles with zero external audio files: **Urgent Alert** (bills/stove), **Standard Chime** (phone-style ring), and **Gentle Melody** (meetings/breaks).
  - Fullscreen flashing alarm overlay with **Dismiss Alarm**, **Snooze 5 Min**, and **Mark Paid / Mark Done** actions, plus optional device vibration on Android.
- **Bilingual Interface (`VN` / `EN`) & Offline PWA:**
  - Switch between Vietnamese and English anytime from the top header without interrupting active timers.
  - Installable directly to your home screen via Web App Manifest and Service Worker caching so it works 100% offline.

### 🚀 How to Use

1. **Open the App:** Visit **[phoenixflix.vercel.app/reminder](https://phoenixflix.vercel.app/reminder)** on your phone or computer—no sign-up or download required.
2. **Manage Bills & Tasks:**
   - Open the **Bills & Tasks** tab to view urgent bills (*Due Tomorrow / Overdue*) at the top.
   - Tap the circular checkbox next to any bill to mark it **Paid** and auto-schedule next month's due date.
   - Tap **`+ Add Task`** at the bottom right to add a new bill or personal task (or pick a 1-tap template like *Club Meeting*), set the date and alarm time, select **One Time**, **Weekly**, or **Monthly**, choose a ringtone, then tap **Save**.
   - Use **Weekly** for appointments such as Saturday morning sports or Sunday morning church. Completing the reminder moves it forward by seven days.
   - Tap the **Pencil (`✏️`)** icon on any card to edit its schedule or notes.
3. **Run Kitchen & Focus Timers:**
   - Switch to the **Quick Timers** tab and tap any preset (such as *Boil Water 5 min* or *Turn Off Stove 10 min*) to start counting down immediately.
   - Scroll to **+ Create Custom Timer** to set a custom duration and optionally check **"Save as a 1-tap preset"**.
   - When the alarm rings, tap **DISMISS ALARM** or **SNOOZE 5 MIN**.
4. **Customize Ringtones & Language:**
   - Open the **Ringtones** tab to preview and choose your default ringtone, toggle vibration, or test the fullscreen alarm.
   - Tap **`🌐 VN` / `🌐 EN`** in the top header to switch languages anytime.

### 📲 Install as an Offline App (PWA)

1. Open **[phoenixflix.vercel.app/reminder](https://phoenixflix.vercel.app/reminder)** in your browser.
2. Tap the **Install** button in the top-right header, or use your browser menu:
   - **iPhone / iPad (Safari):** Tap **Share** at the bottom bar → **"Add to Home Screen"**.
   - **Android (Chrome):** Tap the **3-dot menu (`⋮`)** at the top right → **"Install app"** or **"Add to Home screen"**.
   - **Desktop (Chrome / Edge):** Click the **Install (`+`)** icon on the right side of the address bar.

---

<a id="screenshots"></a>
## 📸 App Screenshots / Ảnh Chụp Màn Hình

| Home Dashboard / Bảng Điều Khiển (`VN` / `EN`) | Add New Reminder / Thêm Lịch Nhắc | Edit Date & Alarm Time / Chỉnh Ngày & Giờ Báo |
| :---: | :---: | :---: |
| ![Home Dashboard](reminder_EN.jpg) | ![Add New Reminder](reminder_AddingSchedule.jpg) | ![Edit Date & Alarm Time](reminder_EditingSchedule.jpg) |

| Running & Parallel Timers / Hẹn Giờ Chạy Song Song | Create Custom Timer / Tạo Hẹn Giờ Tùy Chỉnh | Ringtone & Vibration Settings / Cài Đặt Chuông & Rung |
| :---: | :---: | :---: |
| ![Running Timers](reminder_RunningTimer.jpg) | ![Create Custom Timer](reminder_AddNewTimer.jpg) | ![Ringtone Settings](reminder_Setting.jpg) |

| Bill Payment Alarm / Báo Thức Hóa Đơn | Timer Alarm / Báo Thức Hẹn Giờ | Offline PWA Install / Cài Đặt PWA Ngoại Tuyến |
| :---: | :---: | :---: |
| ![Bill Payment Alarm](reminder_AlertingSchedule.jpg) | ![Timer Alarm](reminder_AlertingTimer.jpg) | ![Offline PWA Install](reminder_Install.jpg) |

---

<a id="vietnamese"></a>
## 🇻🇳 Hướng Dẫn Tiếng Việt

**PhoenixFlixReminder** là ứng dụng web tiến bộ (**PWA**) gọn nhẹ, không phụ thuộc thư viện ngoài và hoạt động **100% Offline**, giúp bạn không bao giờ quên đóng các hóa đơn định kỳ hàng tháng (tiền điện, nước, điện thoại/internet), lịch hẹn cá nhân (thi đấu thể thao, họp CLB, phỏng vấn) hay các bộ hẹn giờ nấu bếp khẩn cấp (nấu nước sôi, tắt bếp).

Được đóng gói trong một tệp `index.html` duy nhất bằng **Vanilla JavaScript**, **Tailwind CSS** và **Web Audio API**, ứng dụng chạy mượt mà cả khi có mạng lẫn ngoại tuyến trên Android, iOS và máy tính.

### 💡 Câu Chuyện Ra Đời

**PhoenixFlixReminder** bắt nguồn từ một nhu cầu giản dị hằng ngày trong gia đình: giúp mẹ tôi nhớ đóng tiền điện, nước, điện thoại trực tuyến đúng hạn trước khi bị phạt trễ hạn, đồng thời có một tiếng chuông báo thức thật rõ ràng mỗi khi nấu nước sôi để mẹ không quên tắt bếp làm cạn khô nồi!

Từ một công cụ nhỏ dành cho mẹ, ứng dụng có thể trở nên hữu ích cho mọi người xung quanh — từ việc nhắc đồng đội đến sân đúng giờ thi đấu, nhắc lịch phỏng vấn xin việc quan trọng, cho đến báo thức chuẩn bị trước các cuộc họp.

### ✨ Tính Năng Nổi Bật

- **Chu Kỳ Nhắc Linh Hoạt:**
  - Chọn **Một lần** cho cuộc hẹn hoặc công việc chỉ cần nhắc một lần.
  - Chọn **Hàng tuần** cho lịch lặp lại, ví dụ thể thao sáng thứ Bảy hoặc đi nhà thờ sáng Chủ Nhật.
  - Chọn **Hàng tháng** cho hóa đơn và các khoản phải thực hiện theo tháng.
  - Sau khi đánh dấu hoàn thành, lịch hàng tuần tự dời sang tuần sau và lịch hàng tháng tự dời sang tháng sau.
- **Quản Lý Hóa Đơn Định Kỳ & Tránh Phí Phạt:**
  - Tạo sẵn lịch nhắc cho tiền Điện (EVN), Nước và Điện thoại/Wi-Fi.
  - Nhãn cảnh báo thông minh tự động làm nổi bật các khoản **Sắp đến hạn**, **Hôm nay**, hoặc **Quá hạn** để tránh bị phạt trễ hạn hay cắt dịch vụ.
  - Khi bấm **Đã đóng**, giao dịch được lưu vào mục **Lịch sử tháng** và tự động dời ngày đến hạn sang tháng kế tiếp.
- **Công Việc Cá Nhân, Lịch Thi Đấu & Họp:**
  - Thêm nhanh các sự kiện một lần hoặc định kỳ (ví dụ: *Đi họp CLB*, *Đá bóng / Thi đấu*, *Phỏng vấn xin việc*, *Chuẩn bị họp nhóm*).
  - Ghi chú mã khách hàng, số tiền, địa điểm họp và chọn kiểu chuông riêng cho từng công việc.
- **Hẹn Giờ Đếm Ngược Nhanh (Nấu Bếp & Tập Trung):**
  - Màn hình đếm ngược chữ lớn dễ nhìn kèm vòng tròn tiến trình SVG và nút bấm 1 chạm **Bắt đầu / Tạm dừng / Đặt lại**.
  - Các mẫu bấm nhanh cho sinh hoạt hằng ngày (*Nấu nước sôi 5p*, *Tắt bếp / Nấu ăn 10p*, *Hầm / Kho 20p*, *Nghỉ ngắn 15p*).
  - Hỗ trợ chạy song song nhiều bộ đếm cùng lúc, hiển thị thanh đếm thu nhỏ ở đầu trang khi chuyển tab và cho phép lưu mẫu tùy chỉnh.
- **Chuông Báo Thức Offline & Cảnh Báo Toàn Màn Hình:**
  - Sử dụng **Web Audio API** của trình duyệt để tự tổng hợp 3 kiểu chuông hoạt động 100% không cần mạng: **Báo động khẩn cấp** (hóa đơn/tắt bếp), **Chuông tiêu chuẩn** (chuông điện thoại), và **Nhạc nhẹ nhàng** (họp CLB/nghỉ ngơi).
  - Màn hình báo thức nhấp nháy toàn màn hình với nút **Tắt chuông**, **Báo lại 5 phút**, và **Đã đóng / Hoàn thành**, kèm chế độ rung trên điện thoại Android.
- **Giao Diện Song Ngữ (`VN` / `EN`) & Cài Đặt Offline:**
  - Chuyển đổi tức thì giữa tiếng Việt và tiếng Anh ngay trên thanh tiêu đề mà không làm gián đoạn đồng hồ đang chạy.
  - Cài đặt trực tiếp lên màn hình chính điện thoại qua Web App Manifest và Service Worker để sử dụng ngay cả khi mất Wi-Fi hay dữ liệu di động.

### 🚀 Hướng Dẫn Sử Dụng

1. **Mở Ứng Dụng:** Truy cập trực tiếp **[phoenixflix.vercel.app/reminder](https://phoenixflix.vercel.app/reminder)** trên điện thoại hoặc máy tính — không cần đăng ký tài khoản.
2. **Quản Lý Hóa Đơn & Công Việc:**
   - Mở tab **Hóa đơn & Việc** để xem các khoản cần đóng gấp (*Sắp đến hạn / Quá hạn*) ngay trên cùng.
   - Bấm vào ô tròn bên cạnh hóa đơn để đánh dấu **Đã đóng** và tự động gia hạn sang tháng sau.
   - Bấm nút **`+ Thêm việc`** ở góc dưới bên phải để tạo lịch nhắc mới (hoặc chọn mẫu *Đi họp CLB*, *Bảo hiểm xe*), chọn ngày, giờ báo chuông, chu kỳ **Một lần**, **Hàng tuần** hoặc **Hàng tháng**, kiểu chuông rồi bấm **Lưu**.
   - Dùng **Hàng tuần** cho lịch như thể thao sáng thứ Bảy hoặc đi nhà thờ sáng Chủ Nhật. Sau khi hoàn thành, lịch tự dời sang đúng một tuần sau.
   - Bấm biểu tượng **Bút chì (`✏️`)** trên từng thẻ để chỉnh sửa lịch hoặc ghi chú.
3. **Dùng Bộ Hẹn Giờ Nấu Bếp & Tập Trung:**
   - Chuyển sang tab **Hẹn giờ nhanh** và bấm vào mẫu có sẵn (như *Nấu nước sôi 5p* hoặc *Tắt bếp / Nấu ăn 10p*) để bắt đầu đếm ngược ngay.
   - Kéo xuống mục **+ Tạo hẹn giờ tùy chỉnh** để đặt thời gian bất kỳ và tick chọn **"Lưu thành mẫu bấm nhanh"** nếu muốn dùng lại.
   - Khi chuông reo, bấm **TẮT CHUÔNG** để dừng hoặc **BÁO LẠI 5 PHÚT** để nhắc lại sau 5 phút.
4. **Tùy Chỉnh Chuông Báo & Ngôn Ngữ:**
   - Mở tab **Cài đặt chuông** để nghe thử, chọn nhạc chuông mặc định, bật/tắt chế độ rung hoặc kiểm tra màn hình báo thức.
   - Bấm nút **`🌐 EN` / `🌐 VN`** trên thanh tiêu đề để đổi ngôn ngữ bất cứ lúc nào.

### 📲 Cài Đặt Dùng Offline Như Ứng Dụng (PWA)

1. Mở **[phoenixflix.vercel.app/reminder](https://phoenixflix.vercel.app/reminder)** trên trình duyệt điện thoại hoặc máy tính.
2. Bấm nút **Cài App (`Install`)** ở góc trên bên phải, hoặc làm theo hướng dẫn trên trình duyệt:
   - **iPhone / iPad (Safari):** Bấm biểu tượng **Chia sẻ** ở thanh dưới cùng → chọn **"Thêm vào MH chính"**.
   - **Android (Chrome):** Bấm biểu tượng **3 chấm (`⋮`)** ở góc trên bên phải → chọn **"Cài đặt ứng dụng"** hoặc **"Thêm vào Màn hình chính"**.
   - **Máy tính (Chrome / Edge):** Bấm biểu tượng **Cài đặt (`+`)** ở góc phải thanh địa chỉ trình duyệt.

## 🛠️ Tech Stack & Privacy / Công Nghệ & Bảo Mật

- **Frontend / Giao diện:** HTML5, Vanilla JavaScript (ES6+), Tailwind CSS (CDN)
- **Audio / Âm thanh:** Native Web Audio API (`AudioContext` oscillators — zero external audio files / *tổng hợp âm thanh trực tiếp không cần tệp ngoài*)
- **Offline & Storage / Lưu trữ:** Service Worker API, Web App Manifest, and Browser `localStorage`
- **Privacy First / Bảo mật tuyệt đối:** 100% of your data stays locally on your device—no accounts, cloud databases, or tracking scripts. *(Toàn bộ dữ liệu được lưu cục bộ ngay trên thiết bị của bạn — không cần tài khoản, không lưu đám mây và không theo dõi người dùng).*