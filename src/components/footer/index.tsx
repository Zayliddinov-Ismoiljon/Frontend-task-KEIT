import { CiPhone } from "react-icons/ci"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { MdOutlineCopyright } from "react-icons/md"
import { TfiEmail } from "react-icons/tfi"

const Footer : React.FC = () : JSX.Element => {
  return(
    <div className="footer bg-[#212629] py-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 text-white">
            <h3 className="text-2xl font-semibold">About us</h3>
            <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequatur veritatis neque quos tempore nostrum voluptate molestias saepe.</p>
            <div className="flex items-center">
              <a href="facebook.com" className="bg-white p-2 mr-6 hover:bg-[#D6A354]" target="_blank"><FaFacebookF size={22} className="hover:text-white text-[#D6A354]"/></a>
              <a href="facebook.com" className="bg-white p-2 mr-6 hover:bg-[#D6A354]" target="_blank"><FaTwitter size={22} className="hover:text-white text-[#D6A354]"/></a>
              <a href="facebook.com" className="bg-white p-2 mr-6 hover:bg-[#D6A354]" target="_blank"><FaInstagram size={22} className="hover:text-white text-[#D6A354]"/></a>
              <a href="facebook.com" className="bg-white p-2 mr-6 hover:bg-[#D6A354]" target="_blank"><FaLinkedinIn size={22} className="hover:text-white text-[#D6A354]"/></a>
            </div>
          </div>
          <div className="col-span-4 text-white">
            <h3 className="text-2xl font-semibold">Popular News</h3>
            <div className="flex justify-between my-4 pb-3 border-b-2 border-dashed">
              <img src="https://gico.io/wowhair/images/blog/b-1.jpg" alt="images" className="mr-5" />
              <p>Magnam ipsa optio hic sequi fuga cumque minima, harum. <br /><span className="text-[#D6A354]">24 January, 2025</span></p>
            </div>
            <div className="flex justify-between my-4">
              <img src="https://gico.io/wowhair/images/blog/b-2.jpg" alt="images" className="mr-5" />
              <p>Magnam ipsa optio hic sequi fuga cumque minima, harum. <br /><span className="text-[#D6A354]">24 January, 2025</span></p>
            </div>
          </div>
          <div className="col-span-4 text-white">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="flex items-center mt-4 pb-3 border-b-2 border-dashed border-white"><IoLocationSharp size={20} color="#D6A354" className="mr-3" />Tashkent, Uzbekistan</p>
            <p className="flex items-center mt-4 pb-3 border-b-2 border-dashed border-white"><CiPhone size={20} color="#D6A354" className="mr-3" />+998903707724</p>
            <p className="flex items-center mt-4 pb-3 border-b-2 border-dashed border-white"><TfiEmail size={20} color="#D6A354" className="mr-3" /><a href="mailto:zayliddinovismoil@gmail.com">zayliddinovismoil@gmail.com</a></p>
          </div>
        </div>
        <p className="w-full justify-center mt-5 text-white flex items-center border-b-[1px] border-white pb-2">Copyright<MdOutlineCopyright color="white" className="mx-1" /> Zayliddinov Ismoiljon 2025</p>
      </div>
    </div>
  )
}

export default Footer