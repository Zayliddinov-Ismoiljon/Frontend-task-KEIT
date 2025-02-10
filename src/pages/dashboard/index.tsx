import { useTranslation } from "react-i18next";
import { FaUsers } from "react-icons/fa";
import { MdOutlineContentCut } from "react-icons/md";
import { TbBuildingStore } from "react-icons/tb";
import { TfiStatsUp } from "react-icons/tfi";

const Dashboard = () => {
  const {t} = useTranslation()
  
  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <div className={`col-span-3 bg-white text-black py-4 px-6 rounded h-[150px]`}>
          <div className="flex justify-between items-center">
            <h3 className="text-[#606E80] font-medium text-2xl">{t('Users')}</h3>
            <FaUsers size={46} color="#07DA83"/>
          </div>
          <h3 className="text-[32px] font-bold text-[#181D25]">1293</h3>
          <p className="flex items-center justify-end text-[#606E80] font-medium"><span className="text-[#07DA83] flex items-center mr-3"><TfiStatsUp size={14} color="#07DA83" />8.5%</span> number of users</p>
        </div>
        <div className={`col-span-3 bg-white text-black py-4 px-6 rounded h-[150px]`}>
          <div className="flex justify-between items-center">
            <h3 className="text-[#606E80] font-medium text-2xl">{t('Salons')}</h3>
            <TbBuildingStore size={46} color="#5264FE"/>
          </div>
          <h3 className="text-[32px] font-bold text-[#181D25]">1293</h3>
          <p className="flex items-center justify-end text-[#606E80] font-medium"><span className="text-[#07DA83] flex items-center mr-3"><TfiStatsUp size={14} color="#07DA83" />8.5%</span> number of salons</p>
        </div>
        <div className={`col-span-3 bg-white text-black py-4 px-6 rounded h-[150px]`}>
          <div className="flex justify-between items-center">
            <h3 className="text-[#606E80] font-medium text-2xl">{t('Barbers')}</h3>
            <MdOutlineContentCut size={46} color="#F68500"/>
          </div>
          <h3 className="text-[32px] font-bold text-[#181D25]">1293</h3>
          <p className="flex items-center justify-end text-[#606E80] font-medium"><span className="text-[#07DA83] flex items-center mr-3"><TfiStatsUp size={14} color="#07DA83" />8.5%</span> number of barbers</p>
        </div>
        <div className={`col-span-3 bg-white text-black py-4 px-6 rounded h-[150px]`}>
          <div className="flex justify-between items-center">
            <h3 className="text-[#606E80] font-medium text-2xl">{t('Users')}</h3>
            <FaUsers size={46} color="#C830BC"/>
          </div>
          <h3 className="text-[32px] font-bold text-[#181D25]">1293</h3>
          <p className="flex items-center justify-end text-[#606E80] font-medium"><span className="text-[#07DA83] flex items-center mr-3"><TfiStatsUp size={14} color="#07DA83" />8.5%</span> number of users</p>
        </div>
        <div className={`col-span-8 bg-white text-black py-4 px-6 rounded h-[300px]`}>
          col-span
        </div>
        <div className={`col-span-4 bg-white text-black py-4 px-6 rounded h-[300px]`}>
          col-span
        </div>
        <div className={`col-span-6 bg-white text-black py-4 px-6 rounded h-[300px]`}>
          col-span
        </div>
        <div className={`col-span-6 bg-white text-black py-4 px-6 rounded h-[300px]`}>
          col-span
        </div>
      </div>
    </>
  );
};

export default Dashboard;
