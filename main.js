// =========================
// MENU MOBILE
// =========================
const bgc = document.querySelector(".bgc__menu");
const menu = document.querySelector(".div__menu");
const img = document.querySelector("#icon__nav");

let isOpen = false;

function openMenu() {
    if (!bgc || !menu) return;

    bgc.style.visibility = "visible";
    bgc.style.opacity = "1";

    menu.style.visibility = "visible";
    menu.style.transform = "translateX(0)";

    isOpen = true;
}

function closeMenu() {
    if (!bgc || !menu) return;

    bgc.style.opacity = "0";
    menu.style.transform = "translateX(-100%)";

    setTimeout(function () {
        bgc.style.visibility = "hidden";
        menu.style.visibility = "hidden";
    }, 400);

    isOpen = false;
}

if (bgc && menu && img) {
    img.addEventListener("click", function () {
        if (isOpen === false) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    bgc.addEventListener("click", closeMenu);
}
// datphong
// =========================
// DỮ LIỆU KHÁCH SẠN / PHÒNG
// Sau này muốn thêm ảnh thì sửa mảng images của từng phòng.
// =========================
const danhSachKhachSan = [
    {
        id: "fiesta-phu-quoc",
        destination: "fiesta-phu-quoc",
        name: "Fiesta Phú Quốc",
        area: "Phú Quốc",
        address: "Khu Du lịch Bãi Dài, khu phố Gành Dầu, đặc khu Phú Quốc, tỉnh An Giang",
        rating: "4.8 / 5",
        reviews: "769 Đánh giá",
        description: "Được thiết kế theo lối kiến trúc mạnh mẽ, vững chãi nhưng không kém phần tinh tế, Fiesta Phú Quốc là lựa chọn hàng đầu để nghỉ dưỡng và gắn kết cho khách hàng từ gia đình, nhóm bạn trẻ đến đoàn khách số lượng lớn.",
        image: "./img/wPhuQuoc.jpg",
        rooms: [
            {
                id: "pq-standard-double",
                name: "Phòng Tiêu Chuẩn Giường Đôi",
                capacity: 4,
                area: "28m²",
                bed: "1 giường đôi",
                price: 1550000,
                 images: ["./img/phongpq2.jpg", "./img/phongpq.webp"]
            },
            {
                id: "pq-family-suite",
                name: "Phòng Gia Đình",
                capacity: 6,
                area: "55m²",
                bed: "2 giường đôi",
                price: 2600000,
                 images: ["./img/phonggd.webp", "./img/phonggd2.webp"]
            }
        ]
    },
    {
        id: "wonderland-phu-quoc",
        destination: "wonderland-phu-quoc",
        name: " Wonderland Phú Quốc",
        area: "Phú Quốc",
        address: "Bãi Dài, Phú Quốc, Kiên Giang",
        rating: "4.7 / 5",
        reviews: "512 Đánh giá",
        description: "Khu nghỉ dưỡng gần tổ hợp vui chơi giải trí, phù hợp với gia đình có trẻ nhỏ và nhóm bạn muốn kết hợp nghỉ dưỡng cùng khám phá.",
        image: "./img/phuquoc3.jpg",
        rooms: [
            {
                id: "wonder-superior",
                name: "Phòng Superior Garden",
                capacity: 3,
                area: "36m²",
                bed: "1 giường đôi + 1 giường đơn",
                price: 1800000,
                images: ["./img/phongpq2.jpg", "./img/phongpq.webp"]
            },
            {
                id: "wonder-deluxe",
                name: "Phòng Deluxe View Biển",
                capacity: 4,
                area: "42m²",
                bed: "1 giường đôi lớn",
                price: 2200000,
                images: ["./img/phonggd.webp", "./img/phonggd2.webp"]
            }
        ]
    },
    {
        id: "resort-phu-quoc",
        destination: "resort-phu-quoc",
        name: "Luxury Resort Phú Quốc",
        area: "Phú Quốc",
        address: "Bãi Trường, Phú Quốc, Kiên Giang",
        rating: "4.9 / 5",
        reviews: "621 Đánh giá",
        description: "Resort nghỉ dưỡng cao cấp với hồ bơi ngoài trời, không gian rộng rãi và dịch vụ phù hợp cho kỳ nghỉ dài ngày.",
        image: "./img/download.jpg",
        rooms: [
            {
                id: "resort-villa-pool",
                name: "Villa Hồ Bơi Riêng",
                capacity: 8,
                area: "120m²",
                bed: "3 phòng ngủ",
                price: 4200000,
                images: ["./img/hoboi.jpg", "./img/phongpq.webp"]
            }
        ]
    },
    {
        id: "nha-trang-resort",
        destination: "nha-trang-resort",
        name: " Luxury Nha Trang",
        area: "Nha Trang",
        address: "Đảo Hòn Tre, Nha Trang, Khánh Hòa",
        rating: "4.8 / 5",
        reviews: "842 Đánh giá",
        description: "Khu nghỉ dưỡng ven biển với không gian hiện đại, bãi biển đẹp và nhiều tiện ích giải trí ngoài trời.",
        image: "./img/nhatrangbeach.jpg",
        rooms: [
            {
                id: "nt-ocean-view",
                name: "Phòng Ocean View",
                capacity: 3,
                area: "35m²",
                bed: "1 giường đôi",
                price: 1700000,
                images: ["./img/hoboi.jpg", "./img/phongpq.webp"]
            },
            {
                id: "nt-family",
                name: "Căn Hộ 2 Phòng Ngủ Gần Biển",
                capacity: 6,
                area: "75m²",
                bed: "2 phòng ngủ",
                price: 3000000,
                images: ["./img/phongpq2.jpg", "./img/phongpq.webp"]
            }
        ]
    },
    {
        id: "nha-trang-beach",
        destination: "nha-trang-beach",
        name: "Nha Trang Beach Hotel",
        area: "Nha Trang",
        address: "Đường Trần Phú, Nha Trang, Khánh Hòa",
        rating: "4.6 / 5",
        reviews: "388 Đánh giá",
        description: "Khách sạn gần biển, thuận tiện di chuyển đến các điểm ăn uống, vui chơi và tham quan trong thành phố.",
        image: "./img/nhatrangbeach.jpg",
        rooms: [
            {
                id: "beach-standard",
                name: "Phòng Tiêu Chuẩn Gần Biển",
                capacity: 4,
                area: "32m²",
                bed: "1 giường đôi lớn",
                price: 1450000,
                images: ["./img/phongpq2.jpg", "./img/phongpq.webp"]
            }
        ]
    },
    {
        id: "resort-golf-hoi-an",
        destination: "resort-golf-hoi-an",
        name: "Resort & Golf Hội An",
        area: "Hội An",
        address: "Cửa Đại, Hội An, Quảng Nam",
        rating: "4.7 / 5",
        reviews: "436 Đánh giá",
        description: "Không gian nghỉ dưỡng yên tĩnh, gần phố cổ Hội An và phù hợp cho du khách muốn kết hợp nghỉ dưỡng với trải nghiệm văn hóa.",
        image: "./img/Hoi An At Night.jpg",
        rooms: [
            {
                id: "ha-classic",
                name: "Phòng Hội An Classic",
                capacity: 3,
                area: "34m²",
                bed: "1 giường đôi",
                price: 1600000,
                images: ["./img/hoboi.jpg", "./img/phongpq.webp"]
            },
            {
                id: "ha-golf-villa",
                name: "Biệt Thự Sân Golf",
                capacity: 8,
                area: "150m²",
                bed: "3 phòng ngủ + phòng khách",
                price: 5000000,
                images : ["./img/golf.jpg", "./img/phongpq.webp"]
            }
        ]
    }
];

const destinationText = {
    "fiesta-phu-quoc": " Fiesta Phú Quốc",
    "wonderland-phu-quoc": " Wonderland Phú Quốc",
    "resort-phu-quoc": "Luxury Resort Phú Quốc",
    "nha-trang-resort": " Luxury Nha Trang",
    "nha-trang-beach": "Nha Trang Beach Hotel",
    "resort-golf-hoi-an": "Resort & Golf Hội An"
};

const STORAGE_KEY = "luxury_hotel_booking";

function dinhDangTien(value) {
    return new Intl.NumberFormat("vi-VN").format(value) + " đ";
}

function dinhDangNgay(value) {
    if (!value) return "Chưa chọn";

    const date = new Date(value + "T00:00:00");
    return date.toLocaleDateString("vi-VN", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

function tinhSoDem(dayin, dayout) {
    if (!dayin || !dayout) return 1;

    const start = new Date(dayin + "T00:00:00");
    const end = new Date(dayout + "T00:00:00");
    const distance = end - start;
    const oneDay = 24 * 60 * 60 * 1000;
    const nights = Math.ceil(distance / oneDay);

    return nights > 0 ? nights : 1;
}

function tinhGiamGia(coupon) {
    const code = String(coupon || "").trim().toUpperCase().replace(/\s+/g, "");
    return code === "LUXURYHOTEL" ? 0.1 : 0;
}

function layDuLieuForm() {
    return {
        destination: document.querySelector("#destination")?.value || "",
        dayin: document.querySelector("#dayin")?.value || "",
        dayout: document.querySelector("#dayout")?.value || "",
        rooms: document.querySelector("#room_count")?.value || "1",
        adult: document.querySelector("#people__old")?.value || "1",
        child: document.querySelector("#people__child")?.value || "0",
        coupon: document.querySelector("#coupon")?.value.trim() || ""
    };
}

function layDuLieuTuUrl() {
    const params = new URLSearchParams(window.location.search);

    return {
        destination: params.get("destination") || "",
        dayin: params.get("dayin") || "",
        dayout: params.get("dayout") || "",
        rooms: params.get("rooms") || "1",
        adult: params.get("adult") || "1",
        child: params.get("child") || "0",
        coupon: params.get("coupon") || ""
    };
}

function doDuLieuVaoForm(data) {
    const fields = {
        destination: document.querySelector("#destination"),
        dayin: document.querySelector("#dayin"),
        dayout: document.querySelector("#dayout"),
        rooms: document.querySelector("#room_count"),
        adult: document.querySelector("#people__old"),
        child: document.querySelector("#people__child"),
        coupon: document.querySelector("#coupon")
    };

    Object.keys(fields).forEach(function (key) {
        if (fields[key]) {
            fields[key].value = data[key] || "";
        }
    });
}

function taoQueryString(data) {
    const params = new URLSearchParams();

    Object.keys(data).forEach(function (key) {
        if (data[key] !== "") {
            params.set(key, data[key]);
        }
    });

    return params.toString();
}

function kiemTraForm(data) {
    if (!data.destination) {
        alert("Bạn cần chọn khách sạn / điểm đến.");
        return false;
    }

    if (!data.dayin || !data.dayout) {
        alert("Bạn cần chọn ngày nhận phòng và ngày trả phòng.");
        return false;
    }

    const dayin = new Date(data.dayin + "T00:00:00");
    const dayout = new Date(data.dayout + "T00:00:00");

    if (dayout <= dayin) {
        alert("Ngày trả phòng phải sau ngày nhận phòng.");
        return false;
    }

    return true;
}

function timKhachSan(destination) {
    return danhSachKhachSan.find(function (hotel) {
        return hotel.destination === destination;
    });
}

function timPhong(hotelId, roomId) {
    const hotel = danhSachKhachSan.find(function (item) {
        return item.id === hotelId;
    });

    if (!hotel) return null;

    const room = hotel.rooms.find(function (item) {
        return item.id === roomId;
    });

    if (!room) return null;

    return { hotel, room };
}

function locPhongTheoSoNguoi(hotel, searchData) {
    const adult = Number(searchData.adult) || 0;
    const child = Number(searchData.child) || 0;
    const totalGuests = adult + child;

    return hotel.rooms.filter(function (room) {
        return room.capacity >= totalGuests;
    });
}

function luuDatPhong(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function layDatPhong() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
        return JSON.parse(raw);
    } catch (error) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
    }
}

function xoaDatPhong() {
    localStorage.removeItem(STORAGE_KEY);
}

// =========================
// XỬ LÝ FORM TÌM KIẾM Ở INDEX.HTML VÀ DATPHONG.HTML
// =========================
const searchForm = document.querySelector("#searchForm");

if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const data = layDuLieuForm();

        if (!kiemTraForm(data)) {
            return;
        }

        // Khi tìm kiếm lại thì xóa phòng cũ để phần bên phải không bị giữ dữ liệu sai.
        xoaDatPhong();

        window.location.href = "./datphong.html?" + taoQueryString(data);
    });
}

// =========================
// HIỂN THỊ TRANG ĐẶT PHÒNG
// =========================
const pageDatPhong = document.querySelector("#datPhongPage");

function taoIconSearchBar(type) {
    const icons = {
        location: `<svg viewBox="0 0 24 24"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"></path><circle cx="12" cy="9" r="2.8"></circle></svg>`,
        calendar: `<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M8 3v4M16 3v4M4 10h16"></path></svg>`,
        user: `<svg viewBox="0 0 24 24"><path d="M16 11a4 4 0 1 0-8 0"></path><circle cx="12" cy="7" r="3"></circle><path d="M4 21a8 8 0 0 1 16 0"></path></svg>`,
        coupon: `<svg viewBox="0 0 24 24"><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"></path><path d="M13 6v12"></path></svg>`
    };

    return icons[type] || icons.location;
}

function taoItemSearchBar(icon, label, value) {
    return `
        <div class="summary-item" title="${value}">
            <span class="summary-icon" aria-hidden="true">${taoIconSearchBar(icon)}</span>
            <div class="summary-text">
                <p>${label}</p>
                <b>${value}</b>
            </div>
        </div>
    `;
}

function renderSearchSummary(searchData, hotel) {
    const box = document.querySelector("#searchSummary");
    if (!box) return;

    const roomCount = Number(searchData.rooms) || 1;
    const adult = Number(searchData.adult) || 0;
    const child = Number(searchData.child) || 0;

    const hotelName = hotel ? hotel.name : "Chưa chọn";
    const dateText = `${dinhDangNgay(searchData.dayin)} - ${dinhDangNgay(searchData.dayout)}`;
    const peopleText = `${roomCount} Phòng: ${adult} Người lớn${child > 0 ? `, ${child} Trẻ em` : ""}`;
    const couponText = searchData.coupon ? searchData.coupon : "Chưa nhập";

    box.innerHTML = [
        taoItemSearchBar("location", "Khách sạn - Điểm đến", hotelName),
        taoItemSearchBar("calendar", "Ngày nhận - Trả phòng", dateText),
        taoItemSearchBar("user", "Số phòng - Khách", peopleText),
        taoItemSearchBar("coupon", "Mã giảm giá", couponText)
    ].join("");
}

function layDanhSachAnhKhachSan(hotel) {
    const images = [hotel.image];

    hotel.rooms.forEach(function (room) {
        room.images.forEach(function (image) {
            if (!images.includes(image)) {
                images.push(image);
            }
        });
    });

    return images;
}

function renderHotelCard(hotel) {
    const box = document.querySelector("#hotelResult");
    if (!box) return;

    if (!hotel) {
        box.innerHTML = `
            <div class="empty-card">
                Không tìm thấy khách sạn phù hợp. Bạn hãy quay lại trang chủ và chọn lại điểm đến.
            </div>
        `;
        return;
    }

    const hotelImages = layDanhSachAnhKhachSan(hotel).map(function (image) {
        return `<img src="${image}" alt="${hotel.name}">`;
    }).join("");

    box.innerHTML = `
        <article class="hotel-card">
            <div class="hotel-card__image" data-current-slide="0">
                ${hotelImages}
                <button type="button" class="slide-btn slide-btn--left" aria-label="Ảnh trước">‹</button>
                <button type="button" class="slide-btn slide-btn--right" aria-label="Ảnh sau">›</button>
            </div>
            <div class="hotel-card__content">
                <h2>${hotel.name}</h2>
                <div class="hotel-rating">
                    <span class="owl">🦉</span>
                    <span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot half"></span>
                    <b>${hotel.rating}</b>
                    <span>(${hotel.reviews})</span>
                </div>
                <p class="hotel-address">⌖ ${hotel.address}</p>
                <p class="hotel-description">${hotel.description}</p>
                <a href="#roomResults" class="detail-link">Xem chi tiết ›</a>
            </div>
        </article>
    `;
}

function renderRooms(hotel, searchData) {
    const box = document.querySelector("#roomResults");
    const title = document.querySelector("#chooseRoomTitle");
    if (!box || !title) return;

    if (!hotel) {
        title.textContent = "Chọn phòng 0/0";
        box.innerHTML = "";
        return;
    }

    const rooms = locPhongTheoSoNguoi(hotel, searchData);
    title.textContent = `Chọn phòng ${rooms.length}/${hotel.rooms.length}`;

    if (rooms.length === 0) {
        box.innerHTML = `
            <div class="empty-card">
                Không có phòng đủ sức chứa theo số khách đã chọn. Hãy giảm số khách hoặc đổi khách sạn.
            </div>
        `;
        return;
    }

    box.innerHTML = rooms.map(function (room) {
        const images = room.images.map(function (image) {
            return `<img src="${image}" alt="${room.name}">`;
        }).join("");

        return `
            <article class="room-card">
                <div class="room-card__images" data-current-slide="0">
                    ${images}
                    <button type="button" class="slide-btn slide-btn--left" aria-label="Ảnh trước">‹</button>
                    <button type="button" class="slide-btn slide-btn--right" aria-label="Ảnh sau">›</button>
                </div>
                <div class="room-card__content">
                    <div>
                        <h3>${room.name}</h3>
                        <p class="room-meta">♟ ${room.capacity} Người &nbsp;&nbsp;↗ ${room.area}</p>
                        <p class="room-bed">${room.bed}</p>
                    </div>
                    <div class="room-price-box">
                        <p>Giá công bố</p>
                        <strong>${dinhDangTien(room.price)}</strong>
                        <span>/ phòng / đêm</span>
                        <button type="button" class="btn-book" data-hotel-id="${hotel.id}" data-room-id="${room.id}">Đặt phòng</button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function renderBookingPanel(searchData) {
    const box = document.querySelector("#bookingPanel");
    if (!box) return;

    const booking = layDatPhong();
    const nights = tinhSoDem(searchData.dayin, searchData.dayout);
    const discountRate = tinhGiamGia(searchData.coupon);
    const hotel = searchData.destination ? timKhachSan(searchData.destination) : null;

    if (!booking) {
        box.innerHTML = `
            <aside class="booking-card">
                <h2>Chuyến đi</h2>
                <div class="booking-body">
                    <h3>${hotel ? hotel.name : "Chưa chọn khách sạn"}</h3>
                    <p>${dinhDangNgay(searchData.dayin)} → ${dinhDangNgay(searchData.dayout)}</p>
                    <p>${nights} Đêm</p>
                    <hr>
                    <div class="booking-empty">
                        Bạn chưa chọn phòng. Hãy bấm <b>Đặt phòng</b> ở danh sách bên trái.
                    </div>
                </div>
            </aside>
        `;
        return;
    }

    const found = timPhong(booking.hotelId, booking.roomId);

    if (!found) {
        xoaDatPhong();
        renderBookingPanel(searchData);
        return;
    }

    const subtotal = found.room.price * nights;
    const discount = subtotal * discountRate;
    const total = subtotal - discount;

    box.innerHTML = `
        <aside class="booking-card">
            <h2>Chuyến đi</h2>
            <div class="booking-body">
                <h3>${found.hotel.name}</h3>
                <p>${dinhDangNgay(searchData.dayin)} → ${dinhDangNgay(searchData.dayout)}</p>
                <p>${nights} Đêm</p>
                <hr>
                <div class="selected-room">
                    <img src="${found.room.images[0]}" alt="${found.room.name}">
                    <div>
                        <b>${found.room.name}</b>
                        <p>${found.room.capacity} Người · ${found.room.area}</p>
                    </div>
                </div>
                <div class="price-row">
                    <span>Giá phòng</span>
                    <b>${dinhDangTien(found.room.price)} x ${nights}</b>
                </div>
                <div class="price-row">
                    <span>Tạm tính</span>
                    <b>${dinhDangTien(subtotal)}</b>
                </div>
                <div class="price-row">
                    <span>Giảm giá</span>
                    <b>-${dinhDangTien(discount)}</b>
                </div>
                <div class="price-total">
                    <span>Tổng thanh toán</span>
                    <strong>${dinhDangTien(total)}</strong>
                </div>
                <button type="button" class="btn-confirm">Đã đặt phòng</button>
                <button type="button" class="btn-remove-booking" id="removeBooking">Xóa phòng đã đặt</button>
            </div>
        </aside>
    `;
}

function khoiTaoTrangDatPhong() {
    if (!pageDatPhong) return;

    const searchData = layDuLieuTuUrl();
    doDuLieuVaoForm(searchData);

    const hotel = timKhachSan(searchData.destination);

    renderSearchSummary(searchData, hotel);
    renderHotelCard(hotel);
    renderRooms(hotel, searchData);
    renderBookingPanel(searchData);
}

khoiTaoTrangDatPhong();

function chuyenAnh(slideButton) {
    const imageBox = slideButton.closest(".hotel-card__image, .room-card__images");
    if (!imageBox) return;

    const images = Array.from(imageBox.querySelectorAll("img"));
    if (images.length <= 1) return;

    let currentIndex = Number(imageBox.dataset.currentSlide || 0);

    if (slideButton.classList.contains("slide-btn--left")) {
        currentIndex = currentIndex - 1;
    } else {
        currentIndex = currentIndex + 1;
    }

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    imageBox.dataset.currentSlide = String(currentIndex);

    images.forEach(function (image, index) {
        image.style.display = index === currentIndex ? "block" : "none";
    });
}

document.addEventListener("click", function (event) {
    const slideButton = event.target.closest(".slide-btn");

    if (slideButton) {
        event.preventDefault();
        chuyenAnh(slideButton);
        return;
    }

    const bookButton = event.target.closest(".btn-book");

    if (bookButton) {
        const searchData = layDuLieuTuUrl();

        luuDatPhong({
            hotelId: bookButton.dataset.hotelId,
            roomId: bookButton.dataset.roomId,
            searchData: searchData,
            createdAt: new Date().toISOString()
        });

        renderBookingPanel(searchData);
        alert("Đặt phòng thành công. Thông tin đã hiển thị ở bên phải.");
        return;
    }

    const removeButton = event.target.closest("#removeBooking");

    if (removeButton) {
        xoaDatPhong();
        renderBookingPanel(layDuLieuTuUrl());
    }
});
// thanh toan thanh cong

