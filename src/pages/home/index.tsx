import { useTranslation } from "react-i18next"
import Footer from "../../components/footer"
import HomeHeader from "../../components/home_header"
import './styles.css'
import { useState } from "react"
import { Carousel } from "antd"
import { TiPin } from "react-icons/ti"
import { FaCalendarAlt } from "react-icons/fa"

const Home : React.FC = () : JSX.Element => {
  const {t} = useTranslation()
  const [isActiveBtn, setisActiveBtn] = useState<number>(1)

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

 return(
  <>
      <HomeHeader/>
      <div className="header-inner py-8 w-full">
        <div className="container mx-auto">
          <div className="w-[50%]">
            <h1 className="text-white text-[100px] font-[Oswald] font-bold capitalize">smart haircut for mens</h1>
            <p className="text-white font-[Oswald] font-medium text-lg my-3">Quisquam repellat itaque quod molestiae modi, minus, omnis laudantium aspernatur non, nobis expedita deleniti, assumenda nulla odio?</p>
            <button className="mt-3 py-1 w-[170px] h-[50px] text-center font-medium bg-[#D6A354] text-lg text-white">{t('Order Now')}</button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-10">
        <div className="w-[70%] mx-auto text-center mb-10">
          <h2 className="text-[70px] font-semibold">Why choose us</h2>
          <p className="my-5 text-lg">Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic, beatae alias saepe recusandae numquam totam laborum. Facilis iure rem corrupti laborum.</p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4 relative">
            <h3 className="font-bold text-2xl mb-3">Trending haircut</h3>
            <img src="https://gico.io/wowhair/images/haircut/1.jpg" className="w-[85%]" alt="image" />
            <button className="text-white text-center bg-[#D6A354] w-[150px] h-[50px] absolute z-100 bottom-[-20px] right-4">{t('Book Now')}</button>
          </div>
          <div className="col-span-4 relative">
            <h3 className="font-bold text-2xl mb-3">Trending haircut</h3>
            <img src="https://gico.io/wowhair/images/haircut/2.jpg" className="w-[85%]" alt="image" />
            <button className="text-white text-center bg-[#D6A354] w-[150px] h-[50px] absolute z-100 bottom-[-20px] right-4">{t('Book Now')}</button>
          </div>
          <div className="col-span-4 relative">
            <h3 className="font-bold text-2xl mb-3">Trending haircut</h3>
            <img src="https://gico.io/wowhair/images/haircut/3.jpg" className="w-[85%]" alt="image" />
            <button className="text-white text-center bg-[#D6A354] w-[150px] h-[50px] absolute z-100 bottom-[-20px] right-4">{t('Book Now')}</button>
          </div>
        </div>
      </div>
      
      <div className="bg-[#F5F5F5] py-6 mt-12">
        <div className="container mx-auto">
          <div className="w-[70%] mx-auto text-center">
            <h2 className="text-[70px] font-semibold capitalize">what we offer</h2>
            <p className="my-5 text-lg">Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic, beatae alias saepe recusandae numquam totam laborum. Facilis iure rem corrupti laborum.</p>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="w-[25%]">
              <div className="w-full mb-16 relative">
                <img src="https://gico.io/wowhair/images/service/1.jpg" className="w-full" alt="image" />
                <button className="absolute z-50 bottom-[80px] right-6 w-[130px] h-[50px] text-center bg-[#D6A354] text-white">{t('Details')}</button>
                <h3 className="my-2 text-[24px] font-semibold">normal haircut</h3>
                <p className="text-base text-[#434343]">Beatae consectetur tempore, veritatis, eos error odio perspiciatis</p>
              </div>
              <div className="w-full mb-16 relative">
                <img src="https://gico.io/wowhair/images/service/2.jpg" className="w-full" alt="image" />
                <button className="absolute z-50 bottom-[80px] right-6 w-[130px] h-[50px] text-center bg-[#D6A354] text-white">{t('Details')}</button>
                <h3 className="my-2 text-[24px] font-semibold">normal haircut</h3>
                <p className="text-base text-[#434343]">Beatae consectetur tempore, veritatis, eos error odio perspiciatis</p>
              </div>
            </div>
            <div className="w-[35%]">
              <img src="https://gico.io/wowhair/images/img2.png" className="w-full" alt="image" />
            </div>
            <div className="w-[25%]">
              <div className="w-full mb-16 relative">
                <img src="https://gico.io/wowhair/images/service/3.jpg" className="w-full" alt="image" />
                <button className="absolute z-50 bottom-[80px] right-6 w-[130px] h-[50px] text-center bg-[#D6A354] text-white">{t('Details')}</button>
                <h3 className="my-2 text-[24px] font-semibold">normal haircut</h3>
                <p className="text-base text-[#434343]">Beatae consectetur tempore, veritatis, eos error odio perspiciatis</p>
              </div>
              <div className="w-full mb-16 relative">
                <img src="https://gico.io/wowhair/images/service/4.jpg" className="w-full" alt="image" />
                <button className="absolute z-50 bottom-[80px] right-6 w-[130px] h-[50px] text-center bg-[#D6A354] text-white">{t('Details')}</button>
                <h3 className="my-2 text-[24px] font-semibold">normal haircut</h3>
                <p className="text-base text-[#434343]">Beatae consectetur tempore, veritatis, eos error odio perspiciatis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto">
          <div className="w-[60%] mx-auto text-center">
            <h3 className="text-[70px] font-semibold capitalize">awesome gallery</h3>
            <p className="my-5 text-base">Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic, beatae alias saepe recusandae numquam totam laborum. Facilis iure rem corrupti laborum.</p>
            <div className="flex justify-around items-center pt-6">
              <button className={`py-2 px-5 text-center rounded-2xl border border-dashed border-[#D6A354] font-semibold ${isActiveBtn === 1 ? 'bg-[#D6A354]' : ''} ${isActiveBtn === 1 ? 'text-white' : 'text-[#484865]'}`} onClick={() => setisActiveBtn(1)}>All</button>
              <button className={`py-2 px-5 text-center rounded-2xl border border-dashed border-[#D6A354] font-semibold ${isActiveBtn === 2 ? 'bg-[#D6A354]' : ''} ${isActiveBtn === 2 ? 'text-white' : 'text-[#484865]'}`} onClick={() => setisActiveBtn(2)}>Normal Haircut</button>
              <button className={`py-2 px-5 text-center rounded-2xl border border-dashed border-[#D6A354] font-semibold ${isActiveBtn === 3 ? 'bg-[#D6A354]' : ''} ${isActiveBtn === 3 ? 'text-white' : 'text-[#484865]'}`} onClick={() => setisActiveBtn(3)}>Hair Pump</button>
              <button className={`py-2 px-5 text-center rounded-2xl border border-dashed border-[#D6A354] font-semibold ${isActiveBtn === 4 ? 'bg-[#D6A354]' : ''} ${isActiveBtn === 4 ? 'text-white' : 'text-[#484865]'}`} onClick={() => setisActiveBtn(4)}>Hair Clean</button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-12 py-12">
            <div className="col-span-4"><img src="https://gico.io/wowhair/images/gallery/1.jpg" alt="image" className="w-full" /></div>
            <div className="col-span-4"><img src="https://gico.io/wowhair/images/gallery/2.jpg" alt="image" className="w-full" /></div>
            <div className="col-span-4"><img src="https://gico.io/wowhair/images/gallery/3.jpg" alt="image" className="w-full" /></div>
            <div className="col-span-4"><img src="https://gico.io/wowhair/images/gallery/4.jpg" alt="image" className="w-full" /></div>
            <div className="col-span-4"><img src="https://gico.io/wowhair/images/gallery/5.jpg" alt="image" className="w-full" /></div>
            <div className="col-span-4"><img src="https://gico.io/wowhair/images/gallery/6.jpg" alt="image" className="w-full" /></div>
          </div>
        </div>
      </div>

      <div className="py-12 says-section bg-[#F5F5F5]">
        <div className="container mx-auto">
          <div className="w-[40%]">
            <h3 className="text-[70px] font-semibold capitalize">What people says</h3>
            <p className="my-5 text-base">Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic, beatae alias saepe recusandae numquam totam laborum.</p>
            <Carousel afterChange={onChange} style={{padding: '40px 0px',}}>
              <div className="bg-white border border-dashed border-gray-400 p-4">
                <div className="flex w-full">
                  <img src="https://gico.io/wowhair/images/testimonial/1.jpg" alt="barber image" className="w-[80px] h-[80px]" />
                  <div className=" ml-4">
                    <p className="text-base text-[#444444]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quisquam quasi. Unde delectus dolore tenetur!</p>
                    <h3 className="text-base font-bold mt-1">--- Favian Alen</h3>
                    <p className="text-base text-[#444444]">CEO, Envato</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-dashed border-gray-400 p-4">
                <div className="flex w-full">
                  <img src="https://gico.io/wowhair/images/testimonial/2.jpg" alt="barber image" className="w-[80px] h-[80px]" />
                  <div className=" ml-4">
                    <p className="text-base text-[#444444]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quisquam quasi. Unde delectus dolore tenetur!</p>
                    <h3 className="text-base font-bold mt-1">--- Favian Alen</h3>
                    <p className="text-base text-[#444444]">CEO, Envato</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-dashed border-gray-400 p-4">
                <div className="flex w-full">
                  <img src="https://gico.io/wowhair/images/testimonial/3.jpg" alt="barber image" className="w-[80px] h-[80px]" />
                  <div className=" ml-4">
                    <p className="text-base text-[#444444]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, quisquam quasi. Unde delectus dolore tenetur!</p>
                    <h3 className="text-base font-bold mt-1">--- Favian Alen</h3>
                    <p className="text-base text-[#444444]">CEO, Envato</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="news-section py-12">
        <div className="container mx-auto">
          <div className="w-[60%] mx-auto text-center">
            <h2 className="font-semibold text-[46px]">Latest news</h2>
            <p className="my-6 text-[#5B5B5B] font-medium">Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic, beatae alias saepe recusandae numquam totam laborum. Facilis iure rem corrupti laborum.</p>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 border-2 border-dashed p-2 relative">
              <img src="https://gico.io/wowhair/images/blog/1.jpg" alt="images" className="w-full" />
              <div className="flex items-center my-3">
                <span className="text-[#5B5B5B] flex items-center"><TiPin size={24} className="mr-2"/>Haircut</span>
                <span className="text-[#5B5B5B] flex items-center ml-8"><FaCalendarAlt size={18} className="mr-2"/>01 January, 2025</span>
              </div>
              <h3 className="font-semibold text-[28px]">let's see trending haircuts in 2022 only for men</h3>
              <button className="absolute z-50 bottom-[-20px] bg-[#D6A354] text-white text-lg capitalize py-2 px-3 text-center right-8">Read More</button>
            </div>
            <div className="col-span-4 border-2 border-dashed p-2 relative">
              <img src="https://gico.io/wowhair/images/blog/2.jpg" alt="images" className="w-full" />
              <div className="flex items-center my-3">
                <span className="text-[#5B5B5B] flex items-center"><TiPin size={24} className="mr-2"/>Haircut</span>
                <span className="text-[#5B5B5B] flex items-center ml-8"><FaCalendarAlt size={18} className="mr-2"/>01 January, 2025</span>
              </div>
              <h3 className="font-semibold text-[28px]">let's see trending haircuts in 2022 only for men</h3>
              <button className="absolute z-50 bottom-[-20px] bg-[#D6A354] text-white text-lg capitalize py-2 px-3 text-center right-8">Read More</button>
            </div>
            <div className="col-span-4 border-2 border-dashed p-2 relative">
              <img src="https://gico.io/wowhair/images/blog/3.jpg" alt="images" className="w-full" />
              <div className="flex items-center my-3">
                <span className="text-[#5B5B5B] flex items-center"><TiPin size={24} className="mr-2"/>Haircut</span>
                <span className="text-[#5B5B5B] flex items-center ml-8"><FaCalendarAlt size={18} className="mr-2"/>01 January, 2025</span>
              </div>
              <h3 className="font-semibold text-[28px]">let's see trending haircuts in 2022 only for men</h3>
              <button className="absolute z-50 bottom-[-20px] bg-[#D6A354] text-white text-lg capitalize py-2 px-3 text-center right-8">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
  </>
 )
}

export default Home