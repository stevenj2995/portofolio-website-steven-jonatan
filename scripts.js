/* ==========================================================================
   Steven Jonatan — Portfolio Scripts
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. TRANSLATIONS
   -------------------------------------------------------------------------- */
const translations = {
  en: {
    /* Nav */
    skip_link: "Skip to content",
    nav_about: "About",
    nav_skills: "Skills",
    nav_coursework: "Coursework",
    nav_projects: "Projects",
    nav_contact: "Contact",

    /* Hero */
    hero_badge: "✦ CS Student · Turning data into decisions",
    hero_tagline: "CS Student &amp; ",
    hero_tagline_highlight: "AI / Data Science Enthusiast",
    hero_uni: "BINUS University — Computer Science (Global Class) · Former Visiting Student @ Mahidol University, Thailand",
    hero_desc: "Dedicated computer science student with a passion for technology, problem-solving, and building intelligent systems. Where curiosity meets code — and music meets machine learning.",
    hero_cta1: "View My Work",
    hero_cta2: "Get in Touch",

    /* About */
    sec_about_label: "01 / About",
    sec_about_title: "Who I am",
    about_p1: "I'm Steven Jonatan, an undergraduate Computer Science student at BINUS University with a focus on Artificial Intelligence and Data Science. My academic journey took me beyond borders — I spent time as a visiting student at Mahidol University of International College in Thailand, which broadened both my technical perspective and my understanding of global tech communities.",
    about_p2: "I'm deeply passionate about the intersection of data and intelligence — building systems that learn, adapt, and solve real-world problems. Whether it's training models, crafting clean code, or diving into a new framework, I thrive in environments that push me to keep growing.",
    about_p3: "Outside the terminal, I'm a music lover. I believe creativity fuels great engineering — the same attention to structure and flow that makes a good song also makes good software.",
    stat_grad: "Expected Graduation",
    stat_projects: "Projects Built",
    stat_sem: "Semesters Completed",
    stat_gpa: "GPA (out of 4.00)",

    /* Skills */
    sec_skills_label: "02 / Skills &amp; Profile",
    sec_skills_title: "What I work with",
    tab_edu: "Education",
    tab_exp: "Experience",
    tab_cert: "Certifications &amp; Achievements",
    skills_tech_title: "Technical Skills",
    skg_ai: "AI &amp; Data Science",
    skg_lang: "Programming Languages",
    skg_web: "Web &amp; Mobile",
    skg_tools: "Tools &amp; Infrastructure",
    skills_lang_title: "Languages",
    lang_en: "English",
    lang_en_lvl: "Upper Intermediate",
    lang_id: "Indonesian",
    lang_id_lvl: "Native",
    skills_soft_title: "Soft Skills",
    soft_1: "🤝 Coordination",
    soft_2: "🧩 Problem-Solving",
    soft_3: "🔄 Adaptation",
    soft_4: "⏱️ Time-Management",
    soft_5: "🔍 Attention to Detail",

    /* Education tab */
    edu1_badge: "🎓 Degree",
    edu1_title: "Bachelor of Computer Science (Global Class)",
    edu1_desc: "Specialising in Artificial Intelligence &amp; Data Science. GPA 3.76/4.00. Active member of HIMTI BINUS 2024/2025 (CS student organisation) and UKM Band BINUS 2024/2025.",
    edu1_t1: "AI &amp; Data Science",
    edu2_badge: "🌏 Study Abroad",
    edu2_title: "Visiting Student · Computer Science",
    edu2_desc: "Semester abroad studying advanced CS subjects in an international academic environment. Coursework included Programming Paradigms, Minds &amp; Machines, NLP &amp; Speech Processing, and Statistics for Research.",
    edu2_t1: "International",
    edu2_t3: "Research",
    edu3_badge: "🏫 High School",
    edu3_title: "Science Major",
    edu3_desc: "Completed high school under the science stream, building a strong foundation in mathematics, physics, and computer science fundamentals.",
    edu3_t1: "Science Stream",
    edu3_t2: "Mathematics",

    /* Experience tab */
    exp1_title: "Multiple Roles — HIMTI BINUS University",
    exp1_desc: "Active member of HIMTI (the CS student organisation at BINUS University) across multiple divisions and events over two consecutive periods:",
    exp1_li1: "<strong>Vice Manager of HIMTI Band</strong> (2025/2026) — leading rehearsals, performances, and creative direction.",
    exp1_li2: "<strong>Activist of HIMTI Care</strong> (2024/2025 &amp; 2025/2026) — social welfare and community engagement programmes.",
    exp1_li3: "<strong>Vice Chairman of HIMTI Farewell 2025</strong> — co-led event planning for HIMTI's flagship farewell event.",
    exp1_li4: "<strong>Mentor of SESVENT 2024</strong> — guided new CS students through orientation and early university life.",
    exp2_title: "Activist of Publication &amp; Documentation",
    exp2_desc: "Handled publication and documentation duties for UKM Band BINUS for two consecutive periods (2024/2025 &amp; 2025/2026). Covered inauguration performances and collaborated with artists including Maysha Jhuan.",
    exp3_title: "Escort Division Staff",
    exp3_desc: "Part of the escort division committee for ICPC 2024, one of the world's most prestigious collegiate programming competitions. Supported participant coordination and logistics during the event.",
    exp4_badge: "💼 Work Experience",
    exp4_title: "Event Organizer",
    exp4_desc: "Worked with the organizing committee to design event flow, managed logistics including audiovisual setup and essential resources, and compiled event reports through documentation and recordings.",
    exp5_title: "Chairman of Spiritual Division — OSIS SMAS 2 Kristen Kalam Kudus Jakarta",
    exp5_desc: "Led the Spiritual Division of the student council (OSIS) at SMAS 2 Kristen Kalam Kudus Jakarta, organising major school spiritual events including Christmas Day, Easter Day, and MPLS 2021 orientation.",
    exp6_title: "Coordinator — Band Competition HIRAETH 2022",
    exp6_desc: "Coordinated the Band Competition segment of HIRAETH 2022 over 7 months, managing participant registration, stage logistics, judging panels, and event flow. Received a HIRAETH Committee Certificate of Appreciation.",
    exp7_title: "Staff of Spiritual Division — OSIS SMPK Kalam Kudus Kosambi Baru",
    exp7_desc: "Active member of the Spiritual Division in the junior high school student council, contributing to school worship and praise activities including the Praise and Worship Band.",
    exp8_title: "Mentor of MPLS 2019",
    exp8_desc: "Served as a mentor during MPLS 2019 (new student orientation), guiding incoming junior high school students through their transition into school life.",

    /* Certifications tab */
    cert_badge_pro: "☁️ Professional Certification",
    cert_badge_pro2: "🤖 Professional Certification",
    cert_view: "View Credential ↗",
    cert1_date: "May 2025 · Valid until May 2027",
    cert1_desc: "Successfully completed the Alibaba Cloud Certification requirements and officially obtained the Cloud Engineer Associate certificate. Credential ID: IACA13250500210513L",
    cert2_desc: "Completed NVIDIA's Fundamentals of Deep Learning course, covering neural network architectures, training techniques, and practical deep learning applications using Python. Credential ID: 1tO0Ys3ITkGJkXM3sgBKrQ",
    cert3_title: "Staff of Disciplinary Division — HILET 2025",
    cert3_desc: "E-Certificate awarded for active service as Staff of Disciplinary Division during HILET 2025 (HIMTI Leadership Training), held by HIMTI BINUS University on February 16–23, 2025.",
    cert4_title: "Volunteer of Mentor Division — SESVENT 2024",
    cert4_desc: "Certificate awarded for participation as Volunteer of Mentor Division during HIMTI SESVENT JKT-BDG 2024 \"Campus Monopoly Adventure: Building Strong Activists Network\", held on October 13–20, 2024.",
    cert5_title: "Staff of PTK Division — HISHOT 2024",
    cert5_desc: "Certificate of outstanding services and dedication as Staff of PTK (Equipment, Transportation &amp; Consumption) Division during HISHOT 2024, held June 22–December 7, 2024.",
    cert6_title: "Committee — HISHOT 2024 Seminar",
    cert6_desc: "Certificate awarded for serving as Committee during the HISHOT 2024 Seminar \"Introducing Secure Cyber Futures: Exploring the New Era of Enhanced Intelligence\", held by HIMTI BINUS University.",
    cert7_title: "Activist of HIMTI Care 2024/2025",
    cert7_desc: "Certificate of Appreciation presented for active contribution as an Activist of HIMTI Care during the 2024/2025 period, signed by the Chairman of HIMTI 2024 and the Dean of School of Computer Science.",
    cert8_title: "Committee — HIRAETH 2022 Band Competition",
    cert8_desc: "Certificate of Appreciation for active and invaluable participation during the HIRAETH event as a committee member, presented by the Principal and Student Council Supervisor of SMAK Kalam Kudus Jakarta.",

    /* Shared tags */
    tag_leadership: "Leadership", tag_leadership2: "Leadership", tag_leadership3: "Leadership",
    tag_eventmgmt: "Event Management",
    tag_mentoring: "Mentoring", tag_mentoring2: "Mentoring", tag_mentoring3: "Mentoring",
    tag_community: "Community", tag_community2: "Community",
    tag_teamwork: "Teamwork",
    tag_documentation: "Documentation", tag_documentation2: "Documentation",
    tag_publication: "Publication",
    tag_strategy: "Strategy",
    tag_communication: "Communication",
    tag_compprog: "Competitive Programming",
    tag_eventcoord: "Event Coordination", tag_eventcoord2: "Event Coordination",
    tag_collab: "Collaboration &amp; Teamwork",
    tag_eventplan: "Event Planning",
    tag_coordination: "Coordination", tag_coordination2: "Coordination",
    tag_eventorg: "Event Organisation",
    tag_spiritual: "Spiritual",
    tag_music: "Music", tag_music2: "Music", tag_music3: "Music",
    tag_management: "Management",
    tag_worship: "Worship",
    tag_council: "Student Council",
    tag_orientation: "Orientation",
    tag_cloud: "Cloud Computing",
    tag_cloudsec: "Cloud Security",
    tag_dl: "Deep Learning",
    tag_nn: "Neural Networks",
    tag_discipline: "Discipline",
    tag_engagement: "Student Engagement",
    tag_logistics: "Logistics",
    tag_operations: "Operations",
    tag_cyberevent: "Cybersecurity Event",
    tag_cybersec: "Cybersecurity",
    tag_committee: "Committee",
    tag_social: "Social Impact",
    tag_evcommittee: "Event Committee",

    /* Coursework */
    sec_cw_label: "03 / Coursework",
    sec_cw_title: "What I've studied",
    cw_btn_sem: "By Semester",
    cw_btn_topic: "By Topic",
    sem_word: "Semester", sem_word2: "Semester", sem_word3: "Semester",
    sem_word4: "Semester", sem_word5: "Semester", sem_word6: "Semester",
    sem_abroad: "Study Abroad",

    c_algprog: "Algorithm and Programming", c_algprog_2: "Algorithm and Programming",
    c_basicstat: "Basic Statistics", c_basicstat_2: "Basic Statistics",
    c_cb_pancasila: "Character Building: Pancasila", c_cb_pancasila_2: "Character Building: Pancasila",
    c_discmath: "Discrete Mathematics", c_discmath_2: "Discrete Mathematics",
    c_indonesian: "Indonesian", c_indonesian_2: "Indonesian",
    c_linalg: "Linear Algebra", c_linalg_2: "Linear Algebra",
    c_progdesign: "Program Design Methods", c_progdesign_2: "Program Design Methods",
    c_calculus: "Calculus", c_calculus_2: "Calculus",
    c_cb_kwn: "Character Building: Kewarganegaraan", c_cb_kwn_2: "Character Building: Kewarganegaraan",
    c_datastruct: "Data Structures", c_datastruct_2: "Data Structures",
    c_ent_ideation: "Entrepreneurship: Ideation", c_ent_ideation_2: "Entrepreneurship: Ideation",
    c_hci: "Human and Computer Interaction", c_hci_2: "Human and Computer Interaction",
    c_scicomp: "Scientific Computing", c_scicomp_2: "Scientific Computing",
    c_ada: "Algorithm Design and Analysis", c_ada_2: "Algorithm Design and Analysis",
    c_ai: "Artificial Intelligence", c_ai_2: "Artificial Intelligence",
    c_cb_agama: "Character Building: Agama", c_cb_agama_2: "Character Building: Agama",
    c_compphys: "Computational Physics", c_compphys_2: "Computational Physics",
    c_comnet: "Computer Networks", c_comnet_2: "Computer Networks",
    c_dbtech: "Database Technology", c_dbtech_2: "Database Technology",
    c_compbio: "Computational Biology", c_compbio_2: "Computational Biology",
    c_cloud: "Introduction to Cloud Infrastructure", c_cloud_2: "Introduction to Cloud Infrastructure",
    c_ml: "Machine Learning", c_ml_2: "Machine Learning",
    c_multimedia: "Multimedia Systems", c_multimedia_2: "Multimedia Systems",
    c_oop: "Object Oriented Programming", c_oop_2: "Object Oriented Programming",
    c_rmcs: "Research Methodology in Computer Science", c_rmcs_2: "Research Methodology in Computer Science",
    c_se: "Software Engineering", c_se_2: "Software Engineering",
    c_compil: "Compilation Techniques", c_compil_2: "Compilation Techniques",
    c_cv: "Computer Vision", c_cv_2: "Computer Vision",
    c_dm: "Data Mining", c_dm_2: "Data Mining",
    c_ent_market: "Entrepreneurship: Market Validation", c_ent_market_2: "Entrepreneurship: Market Validation",
    c_nlp: "Natural Language Processing", c_nlp_2: "Natural Language Processing",
    c_os: "Operating System", c_os_2: "Operating System",
    c_webprog: "Web Programming", c_webprog_2: "Web Programming",
    c_paradigms: "Programming Paradigms", c_paradigms_2: "Programming Paradigms",
    c_minds: "Minds and Machines", c_minds_2: "Minds and Machines",
    c_nlsp: "Natural Language and Speech Processing", c_nlsp_2: "Natural Language and Speech Processing",
    c_compess: "Computer Essentials", c_compess_2: "Computer Essentials",
    c_statres: "Statistics for Research in Computer Engineering", c_statres_2: "Statistics for Research in Computer Engineering",

    tp_ai: "AI &amp; Machine Learning",
    tp_math: "Mathematics &amp; Statistics",
    tp_se: "Software Engineering",
    tp_data: "Data &amp; Systems",
    tp_research: "Research &amp; Design",
    tp_general: "General &amp; Character",

    /* Projects */
    sec_proj_label: "04 / Projects",
    sec_proj_title: "Things I've built",
    pf_all: "All",
    pf_ai: "AI / ML",
    pf_web: "Web &amp; Mobile",
    pf_data: "Data &amp; Systems",
    proj_featured: "★ Featured",
    proj_pminum_desc: "A cross-platform Android app that recommends personalised daily water intake. A machine learning model classifies user activity level and is served through a Flask REST API deployed on Render, with a Flutter front-end handling logging, reminders, and progress tracking.",
    proj_water_desc: "A machine learning system that classifies water pollution levels and flags anomalies to support sustainable water management. The Random Forest model reached an F1-score of 99.51%, precision of 99.13%, and recall of 99.89%, deployed through an interactive Streamlit dashboard.",
    proj_depr_desc: "An NLP model fine-tuned on roughly 7,700 Reddit posts to detect linguistic signs of depression, achieving 98.7% accuracy and a 98.69% F1-score. The research was published through BINUS Research Methodology in Computer Science.",
    proj_match_desc: "A semantic matching engine using SBERT (all-MiniLM-L6-v2) to pair candidate resumes with job descriptions via cosine similarity. Processed 2,483 resume PDFs against more than 30,000 job postings, reaching 99.16% Top-3 accuracy for Business Development roles.",
    proj_crop_desc: "A recommendation system that suggests optimal crops from soil and climate data, achieving 93% accuracy and a 97% F1-score. SHAP analysis identified nitrogen as the most influential factor, and a business simulation projected 97.88% of ideal profit.",
    proj_posture_desc: "A real-time posture monitoring app that uses MediaPipe pose estimation to detect slouching and alert users. Features a custom Calibration Lock algorithm so the system adapts to each user's neutral sitting position.",
    proj_visit_desc: "A full-stack bilingual (EN/ID) travel article platform built with Laravel. Includes full CRUD, user authentication, image uploads, and pagination — a complete content-management experience for showcasing Indonesian destinations.",
    proj_portfolio_title: "Personal Portfolio Website",
    proj_portfolio_desc: "This site — hand-coded from scratch with no framework or template. Features a full EN/ID bilingual system, responsive layout, tabbed timelines, project filtering, and a dark theme built entirely on custom CSS variables.",
    proj_network_title: "Campus Enterprise Network Design",
    proj_network_desc: "A complete enterprise network topology for a university campus, designed and simulated in Cisco Packet Tracer. Covers VLAN segmentation, inter-VLAN routing, DHCP configuration, and subnet planning across multiple buildings.",
    proj_warehouse_desc: "A predictive analysis using polynomial regression and Taylor Series approximation to forecast when a warehouse would reach its 25,000-unit capacity, giving roughly a 13-month lead time for planning and expansion decisions.",
    proj_library_desc: "A full-scale relational database for a library management system, covering schema design, entity relationships, and normalisation — built to handle members, book inventory, borrowing records, and transactions.",
    proj_invadio_desc: "A Space Invaders-style arcade game built with Pygame using object-oriented design. Features three progressive levels ending in a multi-phase MechaBot boss with randomised attack patterns, animated sprite explosions, health bars, sound effects, and multiple game states.",

    /* Contact */
    sec_contact_label: "05 / Contact",
    contact_title_1: "Let's work",
    contact_title_2: "together.",
    contact_sub: "I'm actively seeking internship opportunities in AI, data science, and software engineering. If you think I'd be a good fit — or just want to talk tech — reach out anytime.",
    contact_loc: "📍 Based in West Jakarta, Indonesia · Open to relocation",
    footer_text: "Built by "
  },

  id: {
    /* Nav */
    skip_link: "Lompat ke konten",
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_coursework: "Mata Kuliah",
    nav_projects: "Proyek",
    nav_contact: "Kontak",

    /* Hero */
    hero_badge: "✦ Mahasiswa Ilmu Komputer · Mengubah data menjadi keputusan",
    hero_tagline: "Mahasiswa Ilmu Komputer &amp; ",
    hero_tagline_highlight: "Peminat AI / Data Science",
    hero_uni: "Universitas BINUS — Ilmu Komputer (Kelas Global) · Mantan Mahasiswa Tamu @ Mahidol University, Thailand",
    hero_desc: "Mahasiswa ilmu komputer yang berdedikasi dengan minat besar pada teknologi, pemecahan masalah, dan pembangunan sistem cerdas. Tempat rasa ingin tahu bertemu kode — dan musik bertemu machine learning.",
    hero_cta1: "Lihat Karya Saya",
    hero_cta2: "Hubungi Saya",

    /* About */
    sec_about_label: "01 / Tentang",
    sec_about_title: "Siapa Saya",
    about_p1: "Saya Steven Jonatan, mahasiswa S1 Ilmu Komputer di Universitas BINUS dengan fokus pada Kecerdasan Buatan dan Data Science. Perjalanan akademik saya membawa saya melampaui batas negara — saya sempat menjadi mahasiswa tamu di Mahidol University of International College, Thailand, yang memperluas perspektif teknis saya sekaligus pemahaman saya tentang komunitas teknologi global.",
    about_p2: "Saya sangat tertarik pada titik temu antara data dan kecerdasan — membangun sistem yang belajar, beradaptasi, dan menyelesaikan masalah nyata. Baik itu melatih model, menulis kode yang rapi, maupun mempelajari framework baru, saya berkembang di lingkungan yang mendorong saya untuk terus bertumbuh.",
    about_p3: "Di luar dunia coding, saya seorang pecinta musik. Saya percaya kreativitas mendorong rekayasa yang baik — perhatian terhadap struktur dan alur yang menghasilkan lagu yang bagus juga menghasilkan perangkat lunak yang bagus.",
    stat_grad: "Perkiraan Kelulusan",
    stat_projects: "Proyek Dibangun",
    stat_sem: "Semester Selesai",
    stat_gpa: "IPK (dari 4,00)",

    /* Skills */
    sec_skills_label: "02 / Keahlian &amp; Profil",
    sec_skills_title: "Yang saya gunakan",
    tab_edu: "Pendidikan",
    tab_exp: "Pengalaman",
    tab_cert: "Sertifikasi &amp; Pencapaian",
    skills_tech_title: "Keahlian Teknis",
    skg_ai: "AI &amp; Data Science",
    skg_lang: "Bahasa Pemrograman",
    skg_web: "Web &amp; Mobile",
    skg_tools: "Peralatan &amp; Infrastruktur",
    skills_lang_title: "Bahasa",
    lang_en: "Inggris",
    lang_en_lvl: "Menengah Atas",
    lang_id: "Indonesia",
    lang_id_lvl: "Bahasa Ibu",
    skills_soft_title: "Soft Skill",
    soft_1: "🤝 Koordinasi",
    soft_2: "🧩 Pemecahan Masalah",
    soft_3: "🔄 Adaptasi",
    soft_4: "⏱️ Manajemen Waktu",
    soft_5: "🔍 Ketelitian",

    /* Education tab */
    edu1_badge: "🎓 Sarjana",
    edu1_title: "Sarjana Ilmu Komputer (Kelas Global)",
    edu1_desc: "Mengambil peminatan Kecerdasan Buatan &amp; Data Science. IPK 3,76/4,00. Anggota aktif HIMTI BINUS 2024/2025 (organisasi mahasiswa Ilmu Komputer) dan UKM Band BINUS 2024/2025.",
    edu1_t1: "AI &amp; Data Science",
    edu2_badge: "🌏 Studi Luar Negeri",
    edu2_title: "Mahasiswa Tamu · Ilmu Komputer",
    edu2_desc: "Satu semester di luar negeri mempelajari mata kuliah Ilmu Komputer lanjutan dalam lingkungan akademik internasional. Mata kuliah meliputi Programming Paradigms, Minds &amp; Machines, NLP &amp; Speech Processing, dan Statistics for Research.",
    edu2_t1: "Internasional",
    edu2_t3: "Penelitian",
    edu3_badge: "🏫 SMA",
    edu3_title: "Jurusan IPA",
    edu3_desc: "Menyelesaikan pendidikan SMA jurusan IPA, membangun dasar yang kuat dalam matematika, fisika, dan fundamental ilmu komputer.",
    edu3_t1: "Jurusan IPA",
    edu3_t2: "Matematika",

    /* Experience tab */
    exp1_title: "Berbagai Peran — HIMTI Universitas BINUS",
    exp1_desc: "Anggota aktif HIMTI (organisasi mahasiswa Ilmu Komputer Universitas BINUS) di berbagai divisi dan acara selama dua periode berturut-turut:",
    exp1_li1: "<strong>Wakil Manajer HIMTI Band</strong> (2025/2026) — memimpin latihan, penampilan, dan arahan kreatif.",
    exp1_li2: "<strong>Aktivis HIMTI Care</strong> (2024/2025 &amp; 2025/2026) — program kesejahteraan sosial dan keterlibatan komunitas.",
    exp1_li3: "<strong>Wakil Ketua HIMTI Farewell 2025</strong> — turut memimpin perencanaan acara perpisahan utama HIMTI.",
    exp1_li4: "<strong>Mentor SESVENT 2024</strong> — membimbing mahasiswa baru Ilmu Komputer melewati masa orientasi dan awal kehidupan kampus.",
    exp2_title: "Aktivis Publikasi &amp; Dokumentasi",
    exp2_desc: "Menangani tugas publikasi dan dokumentasi UKM Band BINUS selama dua periode berturut-turut (2024/2025 &amp; 2025/2026). Meliput penampilan inaugurasi dan berkolaborasi dengan musisi termasuk Maysha Jhuan.",
    exp3_title: "Staf Divisi Escort",
    exp3_desc: "Bagian dari panitia divisi escort ICPC 2024, salah satu kompetisi pemrograman tingkat universitas paling bergengsi di dunia. Mendukung koordinasi peserta dan logistik selama acara berlangsung.",
    exp4_badge: "💼 Pengalaman Kerja",
    exp4_title: "Event Organizer",
    exp4_desc: "Bekerja bersama panitia untuk merancang alur acara, mengelola logistik termasuk penataan audiovisual dan kebutuhan penting lainnya, serta menyusun laporan acara melalui dokumentasi dan rekaman.",
    exp5_title: "Ketua Divisi Kerohanian — OSIS SMAS 2 Kristen Kalam Kudus Jakarta",
    exp5_desc: "Memimpin Divisi Kerohanian OSIS di SMAS 2 Kristen Kalam Kudus Jakarta, menyelenggarakan acara kerohanian besar sekolah termasuk Natal, Paskah, dan orientasi MPLS 2021.",
    exp6_title: "Koordinator — Kompetisi Band HIRAETH 2022",
    exp6_desc: "Mengoordinasikan segmen Kompetisi Band HIRAETH 2022 selama 7 bulan, mengelola pendaftaran peserta, logistik panggung, panel juri, dan alur acara. Menerima Sertifikat Penghargaan Panitia HIRAETH.",
    exp7_title: "Staf Divisi Kerohanian — OSIS SMPK Kalam Kudus Kosambi Baru",
    exp7_desc: "Anggota aktif Divisi Kerohanian di OSIS SMP, berkontribusi pada kegiatan ibadah dan pujian sekolah termasuk Praise and Worship Band.",
    exp8_title: "Mentor MPLS 2019",
    exp8_desc: "Menjadi mentor pada MPLS 2019 (orientasi siswa baru), membimbing siswa SMP baru dalam masa transisi mereka memasuki kehidupan sekolah.",

    /* Certifications tab */
    cert_badge_pro: "☁️ Sertifikasi Profesional",
    cert_badge_pro2: "🤖 Sertifikasi Profesional",
    cert_view: "Lihat Kredensial ↗",
    cert1_date: "Mei 2025 · Berlaku hingga Mei 2027",
    cert1_desc: "Berhasil memenuhi persyaratan Sertifikasi Alibaba Cloud dan resmi memperoleh sertifikat Cloud Engineer Associate. ID Kredensial: IACA13250500210513L",
    cert2_desc: "Menyelesaikan kursus Fundamentals of Deep Learning dari NVIDIA, mencakup arsitektur jaringan saraf, teknik pelatihan, dan penerapan deep learning praktis menggunakan Python. ID Kredensial: 1tO0Ys3ITkGJkXM3sgBKrQ",
    cert3_title: "Staf Divisi Kedisiplinan — HILET 2025",
    cert3_desc: "E-Sertifikat diberikan atas pelayanan aktif sebagai Staf Divisi Kedisiplinan pada HILET 2025 (HIMTI Leadership Training) yang diselenggarakan HIMTI Universitas BINUS pada 16–23 Februari 2025.",
    cert4_title: "Relawan Divisi Mentor — SESVENT 2024",
    cert4_desc: "Sertifikat diberikan atas partisipasi sebagai Relawan Divisi Mentor pada HIMTI SESVENT JKT-BDG 2024 \"Campus Monopoly Adventure: Building Strong Activists Network\", diselenggarakan pada 13–20 Oktober 2024.",
    cert5_title: "Staf Divisi PTK — HISHOT 2024",
    cert5_desc: "Sertifikat atas pelayanan dan dedikasi luar biasa sebagai Staf Divisi PTK (Perlengkapan, Transportasi &amp; Konsumsi) pada HISHOT 2024, diselenggarakan 22 Juni–7 Desember 2024.",
    cert6_title: "Panitia — Seminar HISHOT 2024",
    cert6_desc: "Sertifikat diberikan atas peran sebagai Panitia pada Seminar HISHOT 2024 \"Introducing Secure Cyber Futures: Exploring the New Era of Enhanced Intelligence\" yang diselenggarakan HIMTI Universitas BINUS.",
    cert7_title: "Aktivis HIMTI Care 2024/2025",
    cert7_desc: "Sertifikat Penghargaan atas kontribusi aktif sebagai Aktivis HIMTI Care pada periode 2024/2025, ditandatangani oleh Ketua HIMTI 2024 dan Dekan School of Computer Science.",
    cert8_title: "Panitia — Kompetisi Band HIRAETH 2022",
    cert8_desc: "Sertifikat Penghargaan atas partisipasi aktif dan berharga selama acara HIRAETH sebagai anggota panitia, diberikan oleh Kepala Sekolah dan Pembina OSIS SMAK Kalam Kudus Jakarta.",

    /* Shared tags */
    tag_leadership: "Kepemimpinan", tag_leadership2: "Kepemimpinan", tag_leadership3: "Kepemimpinan",
    tag_eventmgmt: "Manajemen Acara",
    tag_mentoring: "Mentoring", tag_mentoring2: "Mentoring", tag_mentoring3: "Mentoring",
    tag_community: "Komunitas", tag_community2: "Komunitas",
    tag_teamwork: "Kerja Sama Tim",
    tag_documentation: "Dokumentasi", tag_documentation2: "Dokumentasi",
    tag_publication: "Publikasi",
    tag_strategy: "Strategi",
    tag_communication: "Komunikasi",
    tag_compprog: "Competitive Programming",
    tag_eventcoord: "Koordinasi Acara", tag_eventcoord2: "Koordinasi Acara",
    tag_collab: "Kolaborasi &amp; Kerja Sama Tim",
    tag_eventplan: "Perencanaan Acara",
    tag_coordination: "Koordinasi", tag_coordination2: "Koordinasi",
    tag_eventorg: "Penyelenggaraan Acara",
    tag_spiritual: "Kerohanian",
    tag_music: "Musik", tag_music2: "Musik", tag_music3: "Musik",
    tag_management: "Manajemen",
    tag_worship: "Ibadah",
    tag_council: "OSIS",
    tag_orientation: "Orientasi",
    tag_cloud: "Komputasi Awan",
    tag_cloudsec: "Keamanan Cloud",
    tag_dl: "Deep Learning",
    tag_nn: "Jaringan Saraf Tiruan",
    tag_discipline: "Kedisiplinan",
    tag_engagement: "Keterlibatan Mahasiswa",
    tag_logistics: "Logistik",
    tag_operations: "Operasional",
    tag_cyberevent: "Acara Keamanan Siber",
    tag_cybersec: "Keamanan Siber",
    tag_committee: "Kepanitiaan",
    tag_social: "Dampak Sosial",
    tag_evcommittee: "Panitia Acara",

    /* Coursework */
    sec_cw_label: "03 / Mata Kuliah",
    sec_cw_title: "Yang telah saya pelajari",
    cw_btn_sem: "Per Semester",
    cw_btn_topic: "Per Topik",
    sem_word: "Semester", sem_word2: "Semester", sem_word3: "Semester",
    sem_word4: "Semester", sem_word5: "Semester", sem_word6: "Semester",
    sem_abroad: "Studi Luar Negeri",

    c_algprog: "Algoritma dan Pemrograman", c_algprog_2: "Algoritma dan Pemrograman",
    c_basicstat: "Statistika Dasar", c_basicstat_2: "Statistika Dasar",
    c_cb_pancasila: "Character Building: Pancasila", c_cb_pancasila_2: "Character Building: Pancasila",
    c_discmath: "Matematika Diskret", c_discmath_2: "Matematika Diskret",
    c_indonesian: "Bahasa Indonesia", c_indonesian_2: "Bahasa Indonesia",
    c_linalg: "Aljabar Linear", c_linalg_2: "Aljabar Linear",
    c_progdesign: "Metode Perancangan Program", c_progdesign_2: "Metode Perancangan Program",
    c_calculus: "Kalkulus", c_calculus_2: "Kalkulus",
    c_cb_kwn: "Character Building: Kewarganegaraan", c_cb_kwn_2: "Character Building: Kewarganegaraan",
    c_datastruct: "Struktur Data", c_datastruct_2: "Struktur Data",
    c_ent_ideation: "Kewirausahaan: Ideasi", c_ent_ideation_2: "Kewirausahaan: Ideasi",
    c_hci: "Interaksi Manusia dan Komputer", c_hci_2: "Interaksi Manusia dan Komputer",
    c_scicomp: "Komputasi Ilmiah", c_scicomp_2: "Komputasi Ilmiah",
    c_ada: "Perancangan dan Analisis Algoritma", c_ada_2: "Perancangan dan Analisis Algoritma",
    c_ai: "Kecerdasan Buatan", c_ai_2: "Kecerdasan Buatan",
    c_cb_agama: "Character Building: Agama", c_cb_agama_2: "Character Building: Agama",
    c_compphys: "Fisika Komputasi", c_compphys_2: "Fisika Komputasi",
    c_comnet: "Jaringan Komputer", c_comnet_2: "Jaringan Komputer",
    c_dbtech: "Teknologi Basis Data", c_dbtech_2: "Teknologi Basis Data",
    c_compbio: "Biologi Komputasi", c_compbio_2: "Biologi Komputasi",
    c_cloud: "Pengantar Infrastruktur Cloud", c_cloud_2: "Pengantar Infrastruktur Cloud",
    c_ml: "Machine Learning", c_ml_2: "Machine Learning",
    c_multimedia: "Sistem Multimedia", c_multimedia_2: "Sistem Multimedia",
    c_oop: "Pemrograman Berorientasi Objek", c_oop_2: "Pemrograman Berorientasi Objek",
    c_rmcs: "Metodologi Penelitian Ilmu Komputer", c_rmcs_2: "Metodologi Penelitian Ilmu Komputer",
    c_se: "Rekayasa Perangkat Lunak", c_se_2: "Rekayasa Perangkat Lunak",
    c_compil: "Teknik Kompilasi", c_compil_2: "Teknik Kompilasi",
    c_cv: "Computer Vision", c_cv_2: "Computer Vision",
    c_dm: "Penambangan Data", c_dm_2: "Penambangan Data",
    c_ent_market: "Kewirausahaan: Validasi Pasar", c_ent_market_2: "Kewirausahaan: Validasi Pasar",
    c_nlp: "Pemrosesan Bahasa Alami", c_nlp_2: "Pemrosesan Bahasa Alami",
    c_os: "Sistem Operasi", c_os_2: "Sistem Operasi",
    c_webprog: "Pemrograman Web", c_webprog_2: "Pemrograman Web",
    c_paradigms: "Paradigma Pemrograman", c_paradigms_2: "Paradigma Pemrograman",
    c_minds: "Minds and Machines", c_minds_2: "Minds and Machines",
    c_nlsp: "Pemrosesan Bahasa Alami dan Suara", c_nlsp_2: "Pemrosesan Bahasa Alami dan Suara",
    c_compess: "Computer Essentials", c_compess_2: "Computer Essentials",
    c_statres: "Statistika untuk Penelitian Teknik Komputer", c_statres_2: "Statistika untuk Penelitian Teknik Komputer",

    tp_ai: "AI &amp; Machine Learning",
    tp_math: "Matematika &amp; Statistika",
    tp_se: "Rekayasa Perangkat Lunak",
    tp_data: "Data &amp; Sistem",
    tp_research: "Penelitian &amp; Perancangan",
    tp_general: "Umum &amp; Karakter",

    /* Projects */
    sec_proj_label: "04 / Proyek",
    sec_proj_title: "Yang telah saya bangun",
    pf_all: "Semua",
    pf_ai: "AI / ML",
    pf_web: "Web &amp; Mobile",
    pf_data: "Data &amp; Sistem",
    proj_featured: "★ Unggulan",
    proj_pminum_desc: "Aplikasi Android lintas platform yang merekomendasikan asupan air harian secara personal. Model machine learning mengklasifikasikan tingkat aktivitas pengguna dan disajikan melalui REST API Flask yang di-deploy di Render, dengan antarmuka Flutter yang menangani pencatatan, pengingat, dan pelacakan progres.",
    proj_water_desc: "Sistem machine learning yang mengklasifikasikan tingkat pencemaran air dan menandai anomali untuk mendukung pengelolaan air berkelanjutan. Model Random Forest mencapai F1-score 99,51%, presisi 99,13%, dan recall 99,89%, di-deploy melalui dashboard Streamlit interaktif.",
    proj_depr_desc: "Model NLP yang di-fine-tune pada sekitar 7.700 unggahan Reddit untuk mendeteksi tanda-tanda linguistik depresi, mencapai akurasi 98,7% dan F1-score 98,69%. Penelitian ini dipublikasikan melalui BINUS Research Methodology in Computer Science.",
    proj_match_desc: "Mesin pencocokan semantik menggunakan SBERT (all-MiniLM-L6-v2) untuk memasangkan resume kandidat dengan deskripsi pekerjaan melalui cosine similarity. Memproses 2.483 PDF resume terhadap lebih dari 30.000 lowongan, mencapai akurasi Top-3 sebesar 99,16% untuk posisi Business Development.",
    proj_crop_desc: "Sistem rekomendasi yang menyarankan tanaman optimal berdasarkan data tanah dan iklim, mencapai akurasi 93% dan F1-score 97%. Analisis SHAP mengidentifikasi nitrogen sebagai faktor paling berpengaruh, dan simulasi bisnis memproyeksikan 97,88% dari keuntungan ideal.",
    proj_posture_desc: "Aplikasi pemantauan postur real-time yang menggunakan estimasi pose MediaPipe untuk mendeteksi posisi membungkuk dan memberi peringatan kepada pengguna. Dilengkapi algoritma Calibration Lock khusus sehingga sistem menyesuaikan dengan posisi duduk netral setiap pengguna.",
    proj_visit_desc: "Platform artikel wisata dwibahasa (EN/ID) full-stack yang dibangun dengan Laravel. Mencakup CRUD lengkap, autentikasi pengguna, unggah gambar, dan paginasi — pengalaman manajemen konten yang utuh untuk menampilkan destinasi Indonesia.",
    proj_portfolio_title: "Website Portofolio Pribadi",
    proj_portfolio_desc: "Situs ini — dibuat sendiri dari nol tanpa framework maupun template. Memiliki sistem dwibahasa EN/ID penuh, tata letak responsif, timeline bertab, filter proyek, dan tema gelap yang sepenuhnya dibangun dengan CSS variable kustom.",
    proj_network_title: "Perancangan Jaringan Enterprise Kampus",
    proj_network_desc: "Topologi jaringan enterprise lengkap untuk kampus universitas, dirancang dan disimulasikan di Cisco Packet Tracer. Mencakup segmentasi VLAN, routing antar-VLAN, konfigurasi DHCP, dan perencanaan subnet di beberapa gedung.",
    proj_warehouse_desc: "Analisis prediktif menggunakan regresi polinomial dan aproksimasi Deret Taylor untuk memperkirakan kapan gudang akan mencapai kapasitas 25.000 unit, memberikan sekitar 13 bulan waktu persiapan untuk keputusan perencanaan dan ekspansi.",
    proj_library_desc: "Basis data relasional berskala penuh untuk sistem manajemen perpustakaan, mencakup perancangan skema, relasi antar-entitas, dan normalisasi — dibangun untuk menangani anggota, inventaris buku, catatan peminjaman, dan transaksi.",
    proj_invadio_desc: "Gim arkade bergaya Space Invaders yang dibangun dengan Pygame menggunakan desain berorientasi objek. Memiliki tiga level progresif yang berakhir pada bos MechaBot multi-fase dengan pola serangan acak, animasi ledakan sprite, health bar, efek suara, dan berbagai state permainan.",

    /* Contact */
    sec_contact_label: "05 / Kontak",
    contact_title_1: "Mari bekerja",
    contact_title_2: "bersama.",
    contact_sub: "Saya sedang aktif mencari kesempatan magang di bidang AI, data science, dan rekayasa perangkat lunak. Jika Anda merasa saya cocok — atau sekadar ingin berdiskusi soal teknologi — silakan hubungi saya kapan saja.",
    contact_loc: "📍 Berdomisili di Jakarta Barat, Indonesia · Terbuka untuk relokasi",
    footer_text: "Dibuat oleh "
  }
};

/* --------------------------------------------------------------------------
   2. LANGUAGE SWITCHING
   -------------------------------------------------------------------------- */
let currentLang = 'en';

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  applyTranslations();

  document.getElementById('langBtnEN').classList.toggle('lang-btn-active', lang === 'en');
  document.getElementById('langBtnID').classList.toggle('lang-btn-active', lang === 'id');
  document.documentElement.lang = lang;

  try { localStorage.setItem('portfolio-lang', lang); } catch (e) { /* storage unavailable */ }
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'id' : 'en');
}

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
}

function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('portfolio-lang'); } catch (e) { /* ignore */ }

  if (!saved) {
    const browserLang = (navigator.language || 'en').toLowerCase();
    saved = browserLang.startsWith('id') ? 'id' : 'en';
  }
  setLang(saved);
}

/* --------------------------------------------------------------------------
   3. TABS & VIEWS
   -------------------------------------------------------------------------- */
function switchTab(tab, btn) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('tab-content-active'));
  document.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('tab-active');
    el.setAttribute('aria-selected', 'false');
  });

  const panel = document.getElementById('tab-' + tab);
  if (panel) panel.classList.add('tab-content-active');
  btn.classList.add('tab-active');
  btn.setAttribute('aria-selected', 'true');
}

function switchView(view) {
  const sem = document.getElementById('view-semester');
  const top = document.getElementById('view-topic');
  if (!sem || !top) return;

  sem.classList.toggle('cw-view-hidden', view !== 'semester');
  top.classList.toggle('cw-view-hidden', view !== 'topic');

  document.querySelectorAll('.cw-toggle').forEach((btn, i) => {
    btn.classList.toggle('active', (view === 'semester' && i === 0) || (view === 'topic' && i === 1));
  });
}

/* --------------------------------------------------------------------------
   4. PROJECT FILTER
   -------------------------------------------------------------------------- */
function filterProjects(cat, btn) {
  document.querySelectorAll('.proj-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    const cats = (card.getAttribute('data-cat') || '').split(' ');
    const show = cat === 'all' || cats.includes(cat);
    card.classList.toggle('is-hidden', !show);
  });
}

/* --------------------------------------------------------------------------
   5. MOBILE MENU
   -------------------------------------------------------------------------- */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const toggle = document.getElementById('navToggle');
  if (!links || !toggle) return;

  const isOpen = links.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
}

function closeMenu() {
  const links = document.getElementById('navLinks');
  const toggle = document.getElementById('navToggle');
  if (!links || !toggle) return;

  links.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
}

function buildTicker() {
  const track = document.getElementById('ticker');
  if (!track) return;

  const items = [
    "Machine Learning", "Data Science", "Python", "AI Systems",
    "Neural Networks", "Natural Language Processing",
    "Data Analytics", "Cloud Computing", "Deep Learning",
    "Computer Vision", "Statistics", "SQL"
  ];

  const frag = document.createDocumentFragment();
  [...items, ...items].forEach(text => {
    const el = document.createElement('span');
    el.className = 'ticker-item';
    el.textContent = text;
    frag.appendChild(el);
  });
  track.appendChild(frag);
}

/* --------------------------------------------------------------------------
   8. INIT
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildTicker();
  initLang();

  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Close mobile menu when a link is tapped
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

  // Close mobile menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

  // Close mobile menu on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Back-to-top visibility
  const btt = document.getElementById('backToTop');
  if (btt) {
    const onScroll = () => btt.classList.toggle('show', window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});

/* ==========================================================
   BACKGROUND PARALLAX
========================================================== */

let ticking = false;

window.addEventListener("scroll", () => {

    if (!ticking) {

        requestAnimationFrame(() => {

            document.documentElement.style.setProperty(
                "--bg-offset",
                `${window.scrollY}px`
            );

            ticking = false;

        });

        ticking = true;

    }

}, {
    passive: true
});