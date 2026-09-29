export type Client = {
  name: string;
  role: string;
  company: string;
  location?: string;
  quote?: string;
  videoUrl?: string;
  poster?: string;
};

export const clients: Client[] = [
  { name: "Kasem Aufe", role: "CEO", company: "Smoke Signal Supply", location: "AZ, USA" },
  { name: "Yasir Mapara", role: "CEO", company: "YBM Interiors" },
  { name: "Fahad Yaqoob", role: "Creative Director", company: "Deepak & Fahad" },
  { name: "Asad Sajjad", role: "Managing Director", company: "ACERTA Middle East" },
  { name: "Doug Jones", role: "General Manager", company: "Smoke Signal Supply" },
  { name: "Mufti Zeeshan Abdul Aziz", role: "CEO", company: "International Halal Certification" },
  { name: "Ghassan Baksh", role: "Marketing", company: "Vaults Energy Solutions" },
];