const craftSteps = [
    {
        title: "การคั่วข้าวตอก (Popping)",
        desc: "ใช้ข้าวเปลือกเหนียวคั่วในกระทะใบบัวหรือหม้อดินด้วยไฟปานกลางจนเมล็ดแตกตัวเสียงดัง 'เปรี้ยะ' เผยเนื้อแป้งสีขาวบริสุทธิ์คล้ายดอกไม้ทิพย์",
        detail: "ทักษะสำคัญคือการคุมไฟและความชื้นของข้าว ถ้าไฟแรงไปจะไหม้ ถ้าอ่อนไปจะไม่แตก",
    },
    {
        title: "การคัดแยก (Selection)",
        desc: "นำข้าวที่คั่วเสร็จมาร่อนแยกแกลบออก จากนั้นทำการ 'คัดดอก' อย่างประณีตทีละเมล็ด",
        detail: "ชาวบ้านจะคัดเฉพาะดอกที่บานเต็มที่ ไม่แตกหัก และมีสีขาวบริสุทธิ์ที่สุดเพื่อความเป็นสิริมงคล",
    },
    {
        title: "การร้อยมาลัย (Threading)",
        desc: "ใช้เข็มและด้ายร้อยข้าวตอกทีละดอกเรียงกันเป็นสายยาวสม่ำเสมอ ความยาวอาจสูงถึง 2-4 เมตร",
        detail: "ต้องใช้สมาธิสูงมากเพื่อไม่ให้ข้าวตอกแตกหักขณะร้อย มักทำรวมกันในชุมชนเพื่อสร้างความสามัคคี",
    },
    {
        title: "การประกอบ (Assembly)",
        desc: "นำมาลัยสายที่ร้อยเสร็จนับพันสายมาประกอบเข้ากับโครงไม้ไผ่ที่เตรียมไว้เป็นทรงปราสาทหรือพุ่มดอกไม้",
        detail: "ตกแต่งเพิ่มเติมด้วยกระดาษย่นหลากสีและธงทิวเพื่อความสวยงามตระการตาในขบวนแห่",
    },
];

function showView(viewId) {
    const container = document.getElementById("view-container");
    container.style.opacity = 0;

    setTimeout(() => {
        document.querySelectorAll('section[id^="view-"]').forEach((view) => {
            view.classList.add("hidden");
        });

        const targetView = document.getElementById(`view-${viewId}`);
        if (targetView) targetView.classList.remove("hidden");

        document.querySelectorAll('nav button[id^="nav-"]').forEach((btn) => {
            btn.classList.remove("nav-active");
        });

        const targetNav = document.getElementById(`nav-${viewId}`);
        if (targetNav) targetNav.classList.add("nav-active");

        window.scrollTo(0, 0);
        container.style.opacity = 1;
    }, 300);
}

function updateCraftInfo(index) {
    const step = craftSteps[index];
    const detailBox = document.getElementById("craft-detail-box");

    document.getElementById("craft-title").innerText = step.title;
    document.getElementById("craft-desc").innerText = step.desc;
    detailBox.innerText = step.detail;
    detailBox.classList.remove("italic", "text-gray-400");
    detailBox.classList.add("text-amber-900", "font-semibold");

    document.querySelectorAll(".step-card").forEach((card, i) => {
        card.classList.toggle("border-amber-600", i === index);
        card.classList.toggle("bg-amber-50", i === index);
    });
}

function initChart() {
    const ctx = document.getElementById("malaiTypeChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "มาลัยข้อ (Malai Kho)",
                "มาลัยสาย (Malai Sai)",
                "มาลัยจิ๋ว (Malai Jew)",
            ],
            datasets: [
                {
                    label: "ความซับซ้อน (ระดับ 1-10)",
                    data: [6, 10, 5],
                    backgroundColor: "rgba(180, 83, 9, 0.7)",
                    borderColor: "rgb(180, 83, 9)",
                    borderWidth: 1,
                },
                {
                    label: "เวลาที่ใช้ผลิต (ระดับ 1-10)",
                    data: [5, 10, 4],
                    backgroundColor: "rgba(209, 213, 219, 0.7)",
                    borderColor: "rgb(156, 163, 175)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, max: 10 },
            },
            plugins: {
                legend: { position: "bottom" },
            },
        },
    });
}

const footerLinksData = [
    { text: "Sanook Travel", url: "https://www.sanook.com/travel/921423/" },
    { text: "MGR", url: "https://mgronline.com/dhamma/detail/9590000011198" },
    { text: "ททท.", url: "https://thai.tourismthailand.org/Attraction/%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%98%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%95%E0%B8%AD%E0%B8%81" },
    { text: "E-Book", url: "https://anyflip.com/sydax/zymd/basic" },
    { text: "ปชส.", url: "https://yasothon.prd.go.th/th/content/category/detail/id/9/iid/363053" },
    { text: "เดลินิวส์", url: "https://www.dailynews.co.th/news/5432155/" },
    { text: "กรุงเทพธุรกิจ", url: "https://www.bangkokbiznews.com/lifestyle/travel/1114161" },
    { text: "ไทยโพสต์", url: "https://www.thaipost.net/main/detail/27572" },
];

function initFooterLinks() {
    const footerContainer = document.getElementById("footer-links");
    footerLinksData.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.textContent = link.text;
        a.className = "ref-link";
        footerContainer.appendChild(a);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initChart();
    initFooterLinks();
});



