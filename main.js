// ==========================================
// 1. MENU HAMBURGER & SIDEBAR
// ==========================================
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");

if (hamburger && sidebar) {
  hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    sidebar.classList.toggle("active");
  });
}

// Đóng menu khi ấn vào link trong sidebar
const menuLinks = document.querySelectorAll(".sidebar ul li a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (hamburger && sidebar) {
      hamburger.classList.remove("is-active");
      sidebar.classList.remove("active");
    }
  });
});

// ==========================================
// 2. TỪ ĐIỂN NGÔN NGỮ (DICTIONARY)
// ==========================================
const translations = {
  vi: {
    // ---- TRANG HOME & ABOUT (DÙNG CHUNG) ----
    home_profile_name: "Trang Nguyễn Kim Yến",
    home_profile_loc: "Sống tại Tp. Hồ Chí Minh, 24 tuổi.",
    home_profile_edu:
      "Tốt nghiệp chuyên ngành Hệ thống thông tin quản lý tại trường Đại học Ngân hàng Tp. Hồ Chí Minh.",
    home_profile_desc:
      "Chuyên sáng tạo nội dung video trên YouTube bằng các công cụ AI, tập trung tối ưu hóa Prompt để làm ra các thước phim với nhiều phong cách đa dạng từ hoạt hình 3D, 2D, chân thực (realistic) cho đến siêu thực (hyperrealistic).",

    // ---- TRANG HOME (INDEX) ----
    home_project_meta: "07/2025 | Thời lượng: 9 phút | Lượt xem: 429k",
    home_project_summary_title: "[Tóm tắt]",
    home_project_summary_desc:
      "“Mèo con chăm bệnh mèo mẹ” là video thiếu nhi kể về tình cảm giữa mèo con và mèo mẹ vàng. Hình ảnh được thể hiện theo phong cách realistic với chút nhân hóa, video mang đến thông điệp giản dị về tình yêu thương gia đình.",
    home_project_role_title: "[Vai trò]",
    home_project_role_desc: "Tạo ảnh và video minh họa.",
    home_project_tools_title: "[Công cụ]",

    // ---- TRANG ABOUT ----
    about_exp_linix_1: "→ Nghiên cứu xu hướng, đề xuất ý tưởng.",
    about_exp_linix_2: "→ Tối ưu prompt để tạo hình ảnh, video AI bằng Flow.",
    about_exp_linix_3: "→ Thiết kế và chỉnh sửa thumbnail bằng Canva.",
    about_exp_linix_4: "→ Biên tập và hoàn thiện video bằng CapCut.",
    about_linix_video1_views: "31K lượt xem",
    about_linix_video2_views: "957K lượt xem",
    about_linix_video3_views: "199K lượt xem",
    about_exp_chieu_1: "→ Nhận kịch bản và phân tích.",
    about_exp_chieu_2: "→ Tạo prompt từ ChatGPT.",
    about_exp_chieu_3: "→ Tạo ảnh và video minh họa.",
    about_exp_ying_1:
      "→ Phát triển nội dung sách thiếu nhi bằng AI (ChatGPT, Midjourney, Leonardo.Ai).",
    about_exp_ying_2: "→ Chỉnh sửa & thiết kế sách bằng Canva.",
    about_exp_ying_3: "→ Một số sách đã đăng:",
    about_skill_design: "<strong>Thiết Kế:</strong> Canva, Figma, Photoshop.",
    about_skill_dev: "<strong>Lập Trình:</strong> HTML, CSS, JavaScript.",
    about_skill_soft:
      "<strong>Kỹ năng mềm:</strong> Chú ý đến chi tiết, làm việc nhóm, giải quyết vấn đề.",
    about_cert_toeic:
      "<strong>TOEIC</strong> (Nghe & Đọc: 920/990, Nói & Viết: 310/400)",
    about_cert_mos:
      "<strong>MOS: </strong> Chứng chỉ Microsoft Office (Word, Excel, PowerPoint)",

    // ---- TRANG CONNECT ----
    connect_info:
      "Mail: trangnguyenkimyen@gmail.com <br /> SĐT: (+84) 85 293 3920",

    // ---- TRANG WORKS ----
    works_link_youtube: "Link YouTube",
    works_dog_meta: "08/2025 | Thời lượng: 8 phút | Lượt xem: 31k",

    works_six_meta:
      "11/2025 | Thời lượng: 1 phút 19 giây | Phong cách: Realistic",
    works_six_desc:
      "Video ngắn phong cách realistic, kể câu chuyện gia đình qua góc nhìn con trai, nói về tình mẫu tử và những khoảnh khắc cuối cùng bên người thân.",
    works_six_tool1: "Hình ảnh và video: Whisk, Google AI Studio, Grok, Veo3",
    works_six_tool2: "Giọng đọc nhân vật: ElevenLabs",
    works_tool_edit: "Edit: CapCut Pro",

    works_yearning_meta: "10/2025 | Thời lượng: 26 giây | Phong cách: Anime",
    works_yearning_desc:
      "Video anime ngắn được dựng dựa trên nhịp điệu của bài hát. Không theo cốt truyện cụ thể, mà tập trung vào cảm xúc, màu sắc và nhịp điệu chuyển động.",
    works_yearning_tool1: "Hình ảnh và video: MetaAI, Veo3",
  },
  en: {
    // ---- HOME & ABOUT (COMMON) ----
    home_profile_name: "Trang Nguyen Kim Yen",
    home_profile_loc: "Based in Ho Chi Minh City, 24 years old.",
    home_profile_edu:
      "Graduated with a degree in Management Information Systems from Banking University of Ho Chi Minh City.",
    home_profile_desc:
      "Specializing in YouTube video content creation using AI tools, with a focus on Prompt optimization to produce footage in a diverse range of styles, from 3D animation and 2D to realistic and hyperrealistic.",

    // ---- HOME PAGE (INDEX) ----
    home_project_meta: "07/2025 | Duration: 9 mins | Views: 429k",
    home_project_summary_title: "[Summary]",
    home_project_summary_desc:
      "“The kitten taking care of the sick mother cat” is a children's video about the bond between a kitten and its yellow mother. Rendered in a realistic style with a touch of personification, the video delivers a simple message about family love.",
    home_project_role_title: "[Role]",
    home_project_role_desc: "Creating illustrations and videos.",
    home_project_tools_title: "[Tools]",

    // ---- ABOUT PAGE ----
    about_exp_linix_1: "→ Research trends and propose ideas.",
    about_exp_linix_2:
      "→ Optimize prompts to generate AI images and videos using Flow.",
    about_exp_linix_3: "→ Design and edit thumbnails using Canva.",
    about_exp_linix_4: "→ Edit and finalize videos using CapCut.",
    about_linix_video1_views: "31K views",
    about_linix_video2_views: "957K views",
    about_linix_video3_views: "199K views",
    about_exp_chieu_1: "→ Receive and analyze scripts.",
    about_exp_chieu_2: "→ Generate prompts using ChatGPT.",
    about_exp_chieu_3: "→ Create illustrations and AI videos.",
    about_exp_ying_1:
      "→ Develop children's book content using AI (ChatGPT, Midjourney, Leonardo.Ai).",
    about_exp_ying_2: "→ Edit & design books using Canva.",
    about_exp_ying_3: "→ Published books:",
    about_skill_design: "<strong>Design:</strong> Canva, Figma, Photoshop.",
    about_skill_dev: "<strong>Programming:</strong> HTML, CSS, JavaScript.",
    about_skill_soft:
      "<strong>Soft skills:</strong> Attention to detail, teamwork, problem-solving.",
    about_cert_toeic:
      "<strong>TOEIC</strong> (Listening & Reading: 920/990, Speaking & Writing: 310/400)",
    about_cert_mos:
      "<strong>MOS: </strong> Microsoft Office Specialist (Word, Excel, PowerPoint)",

    // ---- CONNECT PAGE ----
    connect_info:
      "Mail: trangnguyenkimyen@gmail.com <br /> Phone: (+84) 85 293 3920",

    // ---- WORKS PAGE ----
    works_link_youtube: "YouTube Link",
    works_dog_meta: "08/2025 | Duration: 8 mins | Views: 31k",

    works_six_meta: "11/2025 | Duration: 1 min 19 secs | Style: Realistic",
    works_six_desc:
      "A short realistic video telling a family story from a son's perspective, focusing on maternal love and final moments with loved ones.",
    works_six_tool1: "Images and videos: Whisk, Google AI Studio, Grok, Veo3",
    works_six_tool2: "Character voiceover: ElevenLabs",
    works_tool_edit: "Edit: CapCut Pro",

    works_yearning_meta: "10/2025 | Duration: 26 secs | Style: Anime",
    works_yearning_desc:
      "A short anime video edited to the rhythm of a song. With no specific storyline, it focuses on emotions, colors, and dynamic movements.",
    works_yearning_tool1: "Images and videos: MetaAI, Veo3",
  },
};

// ==========================================
// 3. LOGIC CHUYỂN ĐỔI NGÔN NGỮ
// ==========================================
const langBtns = document.querySelectorAll(".lang-btn");
const langElements = document.querySelectorAll("[data-i18n]");

let currentLang = localStorage.getItem("portfolio_lang") || "vi";

applyLanguage(currentLang);

langBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    currentLang = e.target.getAttribute("data-lang");
    localStorage.setItem("portfolio_lang", currentLang);
    applyLanguage(currentLang);
  });
});

function applyLanguage(lang) {
  langBtns.forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  langElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// ==========================================
// 4. LOADER ẨN ĐI SAU KHI TẢI
// ==========================================
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    setTimeout(() => {
      loader.classList.add("loader-hidden");
      setTimeout(() => {
        loader.remove();
      }, 500);
    }, 300);
  }
});
