import HeroImage from "/assets/MY foto.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/canva.png";
import Tools7 from "/assets/tools/figma.png";




export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
 
  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
 
  {
    id: 5,
    gambar: Tools5,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  
  {
    id: 6,
    gambar: Tools6,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];


import Proyek1 from "./assets/proyek1.jpg";
import Proyek2 from "./assets/proyek2.jpg";
import Proyek3 from "./assets/proyek3.jpg";
import Proyek4 from "./assets/proyek4.jpg";



export const listProyek = [

  {
    id: 1,
    gambar: Proyek1,
    nama: "E-Menu",
    desk: "E-menu is a Web App with a responsible display.",
    tools: ["TailwindCSS", "Javascript", "Fillament", "Laravel"],
    dad: "600",
    link: "https://son-e-menu.my.id/sweety"
  },
  
 
  {
    id: 2,
    gambar: Proyek2,
    nama: "Coffee Shop website",
    desk: "Responsible Coffee Shop landing page website",
    tools: ["HTML", "TailwindCSS", "Vite", "React"],
    dad: "600",
    link: "https://kopi-son.vercel.app"
  },

   {
    id: 3,
    gambar: Proyek3,
    nama: "Website Portal Berita",
    desk: "Website Portal Berita with Laravel and Filament",
    tools: ["Laravel", "TailwindCSS", "Javascript", "Fillament"],
    dad: "600",
    link: "https://sonnews.my.id/"
  },

   {
    id: 4,
    gambar: Proyek4,
    nama: "Coming Soon",
    desk: "Coming Soon",
    tools: ["HTML", "TailwindCSS", "Javascript"],
    dad: "600",
  },
 
];
