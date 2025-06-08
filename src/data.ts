import HeroImage from "/assets/hansome.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";

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



export const listProyek = [

  {
    id: 1,
    gambar: Proyek1,
    nama: "Company Profile",
    desk: "E-menu merupakan App Web yang memiliki tampilan yang responsible",
    tools: ["HTML", "CSS", "Javascript", "Fillament", "Laravel"],
    dad: "300",
  },
  
 
  {
    id: 2,
    gambar: Proyek2,
    nama: "Coming Soon",
    desk: "Coming Soon",
    tools: ["HTML", "TailwindCSS", "Javascript"],
    dad: "600",
  },
 
];
