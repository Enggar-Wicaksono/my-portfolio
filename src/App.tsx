import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {


  return <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInLeft animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-sky-700 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
          <q>Design and functionality must go hand in hand...👍👍</q>
        </div>
        
        <h1 className="text-5xl/tight font-bold mb-6">Welcome to My Portfolio</h1>
        <p className="text-base/loose mb-6 opacity-50"> I have a strong interest in Information Technology, especially in IT Infrastructure, Programming, and Design. Currently, I am building a career in technology by studying web development and UI/UX design.</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="https://drive.google.com/uc?export=download&id=1089qH8SJ9eobsKjWiDGk7TTCp27kFVig" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download <i className="ri-download-line ri-lg"></i></a> 
          <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">View Project<i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInRight animate__delay-4s" loading="lazy"/>
    </div>
    
    {/* Tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 border border-zinc-400 bg-sky-700 rounded-2xl " data-aos="fade-up" data-aos-duration="1000">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
        <p className="text-base/loose mb-10">
          Hello... 
          I'm Enggar Wicaksono, a person who has been working in the Information Technology field, I believe design and functionality should go hand in hand, so that every project developed not only looks attractive but also provides an optimal user experience.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                3<span className="text-violet-500">+</span>
              </h1>
              <p>Project Completed</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                1<span className="text-violet-500">+</span>
              </h1>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
        
      </div>

      <div className="tools mt-32 ">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools used</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Here are some tools that I usually use to create websites or designs</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-4">

          {listTools.map((tool) => (
          <div className=" flex items-center gap-2 p-3 border border-zinc-400 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
          <img src={tool.gambar} alt="Tool Image" className="w-14 " loading="lazy"/>
          <div>
              <h4 className="font-bold">{ tool.nama}</h4>
              <p className="opacity-50">{ tool.ket}</p>
          </div>
        </div>
        ))}
        </div>
      </div>
    </div>
    {/* Tentang */}

    {/* Proyek */}
    <div className="proyek mt-32 py-10" id="proyek"></div>
    <h1 className="text-center text-4xl font-bold mb-2"data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
    <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Here are some of the projects I have made</p>
    <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {listProyek.map((proyek) => (
        <div key={proyek.id} className="p-4 border border-zinc-400 hover:bg-zinc-800 group  rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
          <img src={proyek.gambar} alt="Proyek Image"  loading="lazy"/>
          <div>
            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
            <p className="text-base/loose mb-4">{proyek.desk}</p>
            <div className="flex flex-wrap gap-2">
              {proyek.tools.map((tool, index) => (
                <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={proyek.link} target="_blank" rel="noopener noreferrer"className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
            </div>
          </div>
        </div>
      ))}

    </div>
    {/* Proyek */}

    {/* Kontak */}
    <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
    <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Contact</h1>
      <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Let's connect with me.</p>
      <form action="https://formsubmit.co/xianzheng2209@gmail.com" method="POST" className=" bg-sky-700 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Full Name</label>
            <input type="text" name="nama" placeholder="Enter your name..." className="focus border border-zinc-400 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">E-mail</label>
            <input type="text" name="nama" placeholder="Enter your Email..." className="border border-zinc-400 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">Message</label>
            <textarea name="pesan" id="pesan" cols={45} rows={7} placeholder="Message" className="border border-zinc-400 p-2 rounded-md" required>

            </textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-400 hover:bg-violet-600">Send Message</button>
          </div>
          
        </div>
      </form>
    </div>
    {/* Kontak */}
    </>
  
}

export default App
