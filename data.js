/* =========================================================
   ไฟล์ข้อมูลของเว็บไซต์  —  แก้ไข/เพิ่มเติมเนื้อหาได้ที่ไฟล์นี้ไฟล์เดียว
   - เพิ่มผลงานใหม่: คัดลอกบล็อก { ... } ใน works แล้วแก้ข้อความ
   - category ต้องตรงกับ key ใน categories
   - ช่องไหนไม่ต้องการ ให้ใส่ "" (ว่าง) หรือลบทั้งบรรทัดได้
   ========================================================= */

window.SITE = {
  name: "ฤทธิไกร นามเกษ",
  nickname: "ฤทธิไกร",                 // ชื่อที่แสดงตัวใหญ่ในหน้าแรก
  role: "นักวิชาการสาธารณสุขปฏิบัติการ",
  org: "กองระบาดวิทยา กรมควบคุมโรค",
  greeting: "สวัสดีครับ",
  intro:
    "ทำงานด้านระบาดวิทยาและการเฝ้าระวังโรค สนใจการใช้วิทยาศาสตร์ข้อมูลและ AI เพื่อช่วยให้งานป้องกันควบคุมโรคทำได้เร็วและแม่นยำขึ้น",

  about: [
    "งานของผมอยู่ระหว่าง \"ข้อมูล\" กับ \"คนที่ต้องใช้ข้อมูล\" ตั้งแต่จัดการและวิเคราะห์ข้อมูลเฝ้าระวัง สอบสวนโรค ไปจนถึงทำรายงานและแดชบอร์ดให้ทีมใช้ตัดสินใจ",
    "อีกส่วนหนึ่งคือการเป็นวิทยากร แบ่งปันเรื่องการวิเคราะห์ข้อมูล Data Visualization และการนำ AI มาใช้ในงานระบาดวิทยา",
  ],

  /* รูปโปรไฟล์: เว้นว่างไว้ = ใช้ภาพการ์ตูน
     ถ้ามีภาพการ์ตูนจากเครื่องมือ AI ให้วางไฟล์ไว้ในโฟลเดอร์ images แล้วใส่ เช่น "images/profile.png" */
  photo: "images/profile.jpg",

  /* คำที่สลับพิมพ์ในหน้าแรก */
  typer: ["นักระบาดวิทยา", "นักพัฒนาเว็บ & แอป", "คนทำงานสาย Data & AI"],

  /* ความสามารถเด่น (featured: true = การ์ดใหญ่) */
  highlights: [
    {
      art: "epi", featured: true,
      title: "นักระบาดวิทยา",
      subtitle: "เฝ้าระวัง สอบสวนโรค และสื่อสารสถานการณ์ด้วยข้อมูล",
      points: [
        "ผ่านหลักสูตร FEMT รุ่นที่ 16",
        "จัดทำรายงานสถานการณ์โรคระดับเขตและจังหวัด",
        "ร่วมเขียนบทความใน WESR และวารสารวิชาการ",
        "รองชนะเลิศอันดับ 1 Thailand EOC Network Conference 2024",
      ],
      tags: ["Surveillance", "Outbreak investigation", "Epi Info", "Stata"],
    },
    {
      art: "web", featured: true,
      title: "พัฒนาเว็บ & แอป",
      subtitle: "สร้างเครื่องมือที่ทีมสาธารณสุขใช้งานได้จริง",
      points: [
        "แดชบอร์ดเฝ้าระวังโรคในสถานการณ์อุทกภัย และแบบจำลองการระบาดไข้เลือดออก",
        "ระบบเฝ้าระวังผู้ป่วยไข้เลือดออก พร้อมแดชบอร์ดและแผนที่",
        "แบบฟอร์มสอบสวนโรคด้วย Google Sheets & AppSheet",
        "Interactive dashboard ด้วย Looker Studio / Power BI",
        "วิทยากรหัวข้อการพัฒนาเว็บแอปด้วย AI",
      ],
      tags: ["Google Apps Script", "JavaScript", "AppSheet", "Chart.js", "Leaflet"],
    },
    {
      art: "ai",
      title: "Data Science & AI",
      subtitle: "วิเคราะห์ข้อมูลสุขภาพ และนำ AI มาช่วยงานควบคุมโรค",
      points: [
        "ปริญญาโท วิทยาศาสตร์ข้อมูลชีวการแพทย์",
        "ระบบสร้างรายงานระบาดวิทยาอัตโนมัติด้วย LLM (JITMM 2025)",
        "แบบจำลองการแพร่ระบาดของโรค (SEIR)",
      ],
      tags: ["Python", "LLM", "QGIS", "Tableau"],
    },
  ],

  education: [
    { title: "ปริญญาโท วิทยาศาสตร์ข้อมูลชีวการแพทย์", place: "มหาวิทยาลัยเกษตรศาสตร์" },
    { title: "ปริญญาตรี อนามัยสิ่งแวดล้อม", place: "มหาวิทยาลัยเทคโนโลยีสุรนารี" },
  ],

  experience: [
    { title: "นักวิชาการสาธารณสุขปฏิบัติการ", place: "กองระบาดวิทยา กรมควบคุมโรค", now: true },
    { title: "นักวิชาการสุขาภิบาล", place: "สำนักงานเขตวัฒนา กรุงเทพฯ" },
  ],

  categories: {
    all: "ทั้งหมด",
    app: "เว็บแอป & ระบบ",
    media: "สื่อการสอน",
    talk: "นำเสนอ & รางวัล",
    paper: "บทความตีพิมพ์",
    report: "รายงาน",
  },

  works: [
    {
      title: "เฝ้าระวังโรคติดต่อในสถานการณ์อุทกภัย ปี 2569",
      category: "app",
      text: "แดชบอร์ดติดตามแนวโน้มผู้ป่วยรายวัน/รายสัปดาห์ แยกโรคและพื้นที่ พร้อมปฏิทินเฝ้าระวังโรคหลังน้ำท่วม อัปเดตอัตโนมัติวันละ 3 ครั้ง",
      year: "2026",
      tags: ["DDS", "Dashboard", "Flood"],
      link: "https://ddsflood.pages.dev/",
    },
    {
      title: "ตารางคุมการปรับแผน",
      category: "app",
      text: "เครื่องมือช่วยนักวิเคราะห์นโยบายและแผน บันทึกและควบคุมการปรับแผนงาน/งบประมาณรายไตรมาส สำรองข้อมูลเป็น Excel ได้",
      tags: ["Planning", "Excel export"],
      link: "https://planrevisioncontrol.netlify.app/",
    },
    {
      title: "Dengue Simulation for Surveillance",
      category: "app",
      text: "ห้องปฏิบัติการจำลองการระบาดไข้เลือดออกแบบ 3D ปรับพารามิเตอร์ได้ ดู epidemic curve และค่า Rt (ข้อมูลสมมติ)",
      tags: ["Simulation", "3D", "R0/Rt"],
      link: "https://ddssimu.pages.dev/",
    },
    {
      title: "ระบบสืบค้นรายชื่อโรคและรหัสโรคใน DDS",
      category: "app",
      text: "ค้นหาชื่อโรคและรหัสโรคที่ใช้ในระบบ DDS ได้รวดเร็ว",
      tags: ["Google Apps Script", "DDS"],
      link: "https://script.google.com/macros/s/AKfycbwisEN9pJWHNcjhgB2LFNftRA0M4B8M9xEqbf7L7NSkuPH0HFwfoNEmoZ8fAVuUedAI/exec",
    },
    {
      title: "ชุด Prompt เขียนรายงานสถานการณ์โรคด้วย AI",
      category: "media",
      text: "รวม prompt สำหรับใช้ AI ช่วยเขียนรายงานสถานการณ์โรค",
      tags: ["AI", "Prompt", "Situation report"],
      link: "https://docs.google.com/document/d/1KfQEX8w6-OlyD6vdX2aWwbUqQLJWhcUoRmaCdVwunH4/edit",
    },
    {
      title: "วิดีโอสาธิต: เขียนรายงานสถานการณ์โรคด้วย AI",
      category: "media",
      text: "สาธิตการใช้ภาพจาก DDS Dashboard ร่วมกับชุด Prompt สร้างรายงานสถานการณ์โรคเบื้องต้น",
      tags: ["AI", "DDS", "YouTube"],
      youtube: "D-Pu2dqmfZo",
      link: "https://youtu.be/D-Pu2dqmfZo",
    },
    {
      title: "การทำแผนที่ด้วย QGIS — EP.1 การนำเข้า Shapefile",
      category: "media",
      text: "คลิปสอนการทำแผนที่ด้วย QGIS ช่อง Epi Focus",
      tags: ["QGIS", "YouTube"],
      youtube: "iIUEGNVaSvc",
      link: "https://youtu.be/iIUEGNVaSvc",
    },
    {
      title: "Looker Studio Workshop",
      category: "media",
      text: "เวิร์กช็อปสร้างแดชบอร์ดด้วย Looker Studio ช่อง Epi Focus",
      tags: ["Looker Studio", "YouTube"],
      youtube: "T10XcqKOCz4",
      link: "https://youtu.be/T10XcqKOCz4?list=PLFLiELonK8FdjPL8zmA-QTOS5zYmtGa6Q",
    },
    {
      title: "รายงานระบาดวิทยาและการเฝ้าระวังที่สร้างอัตโนมัติด้วย LLM",
      category: "talk",
      text: "นำเสนอผลงานในการประชุมวิชาการนานาชาติด้านโรคเขตร้อน (JITMM)",
      year: "2025",
      tags: ["LLM", "Automated reporting"],
      link: "",
    },
    {
      title: "วิทยาศาสตร์ข้อมูลเพื่อการสอบสวนโรคและตอบสนองภาวะฉุกเฉิน",
      category: "talk",
      badge: "รองชนะเลิศอันดับ 1",
      text: "กรณีศึกษาการระบาดโรคอุจจาระร่วง จังหวัดภูเก็ต — Thailand EOC Network Conference",
      year: "2024",
      tags: ["Outbreak", "EOC"],
      link: "",
    },
    {
      title: "การเสียชีวิตที่เกี่ยวเนื่องจากภาวะอากาศหนาว",
      category: "paper",
      text: "รายงานการเฝ้าระวังทางระบาดวิทยาประจำสัปดาห์ (WESR)",
      year: "2025",
      tags: ["ผู้ร่วมเขียน"],
      link: "https://doi.org/10.59096/wesr.v56i1.4154",
    },
    {
      title: "ข้อเสนอเชิงนโยบายลดการนอนโรงพยาบาลของผู้ป่วย COPD จาก PM2.5 ในกรุงเทพฯ",
      category: "paper",
      text: "Journal of Health Science of Thailand",
      year: "2024",
      tags: ["ผู้ร่วมเขียน", "PM2.5"],
      link: "https://thaidj.org/index.php/JHS/article/view/15714",
    },
    {
      title: "ระบาดวิทยาของบุคลากรทางการแพทย์ที่ติดเชื้อ COVID-19",
      category: "paper",
      text: "รายงานการเฝ้าระวังทางระบาดวิทยาประจำสัปดาห์ (WESR)",
      year: "2022",
      tags: ["ผู้ร่วมเขียน", "COVID-19"],
      link: "https://he05.tci-thaijo.org/index.php/WESR/article/view/1045",
    },
    {
      title: "การขาดอากาศหายใจและสูดดมแก๊สพิษจากเครื่องทำน้ำอุ่นระบบแก๊ส",
      category: "paper",
      text: "รายงานการเฝ้าระวังทางระบาดวิทยาประจำสัปดาห์ (WESR)",
      year: "2021",
      tags: ["ผู้ร่วมเขียน"],
      link: "https://he05.tci-thaijo.org/index.php/WESR/article/view/170",
    },
    {
      title: "รายงานสถานการณ์โรคระดับเขตและจังหวัด",
      category: "report",
      text: "รายงานสถานการณ์ไข้เลือดออก ไข้หวัดใหญ่ และโรคเฝ้าระวังสำคัญ จากข้อมูลแดชบอร์ด DDS",
      tags: ["DDS", "Situation report"],
      link: "",
    },
    {
      title: "รายงานเฝ้าระวังโรคไข้สมองอักเสบเจอี ประจำปี 2568",
      category: "report",
      text: "รายงานประจำปี พร้อมตารางและกราฟ จากการรวมข้อมูลหลายแหล่ง",
      tags: ["รายงานประจำปี", "JE"],
      link: "",
    },
    {
      title: "ระบบเฝ้าระวังผู้ป่วยไข้เลือดออก",
      category: "app",
      text: "เว็บแอปบันทึกข้อมูลผู้ป่วย พร้อมกราฟสรุปและแผนที่",
      tags: ["Google Apps Script", "Chart.js", "Leaflet"],
      link: "",
    },
    {
      title: "ระบบจัดตารางเวรพยาบาล",
      category: "app",
      text: "ต้นแบบหน้าจอจัดเวร ขอลา และช่วยจัดตารางอัตโนมัติ สำหรับหอผู้ป่วย",
      tags: ["HTML/CSS/JS", "Prototype"],
      link: "",
    },
    {
      title: "แผน Analytics Foundation & Data Pipeline",
      category: "app",
      text: "แผนงาน 5 ปี ด้านระบบข้อมูล แบบจำลองคาดการณ์โรค และแดชบอร์ด",
      tags: ["Data Pipeline", "Planning"],
      link: "",
    },
  ],

  teaching: [
    "ประยุกต์ใช้ AI ในงานระบาดวิทยา",
    "AI สำหรับสืบค้นงานวิจัยและเขียนรายงาน",
    "AI For Presentation & อินโฟกราฟิก",
    "พัฒนาเว็บแอปด้วย AI",
    "Data Visualization & Interactive Dashboard",
    "Excel สำหรับระบาดวิทยาภาคสนาม",
    "แบบฟอร์มสอบสวนโรคด้วย Google Sheets & AppSheet",
    "Spatial analysis ด้วย QGIS",
  ],

  tools: [
    "Python", "Stata", "Jamovi", "Epi Info", "Excel",
    "Looker Studio", "Power BI", "Tableau", "QGIS",
    "Google Sheets", "AppSheet", "Google Apps Script",
  ],

  training: [
    "Field Epidemiology and Management Training (FEMT) รุ่นที่ 16",
    "Artificial Intelligence / Machine Learning — สจล.",
    "Applied Big Data and AI Technologies for General Users — สจล. & สถาบันข้อมูลขนาดใหญ่",
    "Mathematical Modelling and Control of Infectious Diseases — มหาวิทยาลัยมหิดล",
    "Mathematical Modeling of Disease Transmission (SEIR) — มหาวิทยาลัยมหิดล",
    "GEEKS: Data Science รุ่นที่ 1 — กรมควบคุมโรค",
    "Data Science for Health Promotion and Disease Prevention — กองระบาดวิทยา",
    "Data Sci Bootcamp — DataRockie",
  ],

  /* ช่องทางติดต่อ — ช่องที่ url ว่างจะไม่แสดง */
  links: [
    { label: "GitHub", url: "https://github.com/rittiin" },
    { label: "LinkedIn", url: "" },
  ],
};
