export const conversations = [
  {
    id: 1,
    customer: {
      name: "Sarah Chen",
      phone: "+1 (555) 0123",
      avatar: "👩‍💼",
      status: "online",
    },
    lastMessage:
      "Dari pilihan di atas, apakah ada jadwal yang cocok untuk Ibu?",
    time: "2m ago",
    unread: 3,
    channel: "whatsapp",
    status: "ongoing-qa",
    tags: ["high-value", "math-tutoring"],
    agent: "AI",
  },
  {
    id: 2,
    customer: {
      name: "David Rodriguez",
      phone: "+1 (555) 0124",
      avatar: "👨‍💻",
      status: "offline",
    },
    lastMessage: "Terima kasih banyak atas waktunya, Ibu Rini",
    time: "5m ago",
    unread: 0,
    channel: "whatsapp",
    status: "completed",
    tags: ["paid", "grade-11"],
    agent: "AI",
  },
  {
    id: 3,
    customer: {
      name: "Maria Santos",
      phone: "+1 (555) 0125",
      avatar: "👩‍🎓",
      status: "away",
    },
    lastMessage: "template object",
    time: "12m ago",
    unread: 1,
    channel: "whatsapp",
    status: "no_response",
    tags: ["follow-up", "chemistry"],
    agent: "Human",
  },
  {
    id: 4,
    customer: {
      name: "Ahmad Hassan",
      phone: "+1 (555) 0126",
      avatar: "👨‍🔬",
      status: "online",
    },
    lastMessage: "Baik, nanti sy sampaikan ke anak nya dahulu 🙏",
    time: "1h ago",
    unread: 0,
    channel: "whatsapp",
    status: "interested",
    tags: ["physics", "grade-12"],
    agent: "AI",
  },
];

export const messages = [
  {
    id: 1,
    sender: "customer",
    content: "Kalau untuk SMK dan SMU ada perbedaan pelajaran tdk?",
    time: "11:26 am",
    status: "delivered",
  },
  {
    id: 2,
    sender: "ai",
    content: "Karna anak sy SMK",
    time: "11:26 am",
    status: "delivered",
  },
  {
    id: 3,
    sender: "customer",
    content: "Untuk kelas 11 SMK bisa mengambil paket matematika merdeka.",
    time: "11:27 am",
    status: "delivered",
  },
  {
    id: 4,
    sender: "ai",
    content:
      "Ini adalah pilihan jadwal bimbel matematika untuk kelas 11 SMA.\n\nBaik, nanti sy sampaikan ke anak nya dahulu 🙏",
    time: "11:31 am",
    status: "delivered",
    isTemplate: true,
  },
  {
    id: 5,
    sender: "customer",
    content:
      "Ibu, mohon diskusikan pilihan jadwal yang tersedia dengan putri Ibu, dan kabari kakak setelah Ibu sudah menentukan pilihan.",
    time: "11:31 am",
    status: "delivered",
  },
  {
    id: 6,
    sender: "ai",
    content:
      "Halo Bapak/Ibu, apakah ada keraguan terkait informasi yang kami sampaikan sebelumnya?",
    time: "11:34 am",
    status: "delivered",
    isTemplate: true,
    templateName: "FU_ongoing-qa",
  },
];
