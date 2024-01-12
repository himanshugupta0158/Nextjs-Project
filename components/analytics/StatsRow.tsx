// components/StatsRow.js
import { FaLongArrowAltUp, FaLongArrowAltDown, FaCrown } from 'react-icons/fa';

const StatsRow = () => {
  return (
    <div className="flex flex-row">
      {/* Add your stat boxes here */}
      <div className="m-5 rounded-lg p-5 basis-1/5" style={{backgroundColor: '#DFF5FF'}}>
        <div className='mb-4'>
          Total Job Posts
        </div>
        <div className='flex flex-row'>
          <div className='font-bold text-3xl mr-10'>721K</div>
          <div className='flex flex-row'>
            <span className='text-sm'>+110</span>
            <FaLongArrowAltUp />
          </div>
        </div>
      </div>
      <div className="m-5 rounded-lg p-8 basis-1/5" style={{backgroundColor: '#FFF5F7'}}>
        <div className='mb-4'>
          Active Job Posts
        </div>
        <div className='flex flex-row'>
          <div className='font-bold text-3xl mr-10'>721K</div>
          <div className='flex flex-row'>
            <span>+110</span>
            <FaLongArrowAltDown />
          </div>
        </div>
      </div>
      <div className="m-5 rounded-lg p-8 basis-1/5" style={{backgroundColor: '#DFF5FF',}}>
        <div className='mb-4'>
          Total Applicants
        </div>
        <div className='flex flex-row'>
          <div className='font-bold text-3xl mr-10'>721K</div>
          <div className='flex flex-row'>
            <span>+110</span>
            <FaLongArrowAltUp />
          </div>
        </div>
      </div>
      <div className="m-5 rounded-lg p-8 basis-1/5" style={{backgroundColor: '#FFF5F7',}}>
        <div className='mb-4'>
          Hired Applicants
        </div>
        <div className='flex flex-row'>
          <div className='font-bold text-3xl mr-10'>721K</div>
          <div className='flex flex-row'>
            <span>+110</span>
            <FaLongArrowAltDown />
          </div>
        </div>
      </div>
      <div className="m-5 rounded-lg p-8 basis-1/5 text-white" style={{backgroundColor: '#EF003A',}}>
        <div className='mb-4 flex flex-row'>
          <FaCrown className="text-4xl text-yellow-400"/>
          <div className='ml-5 font-bold mt-2'>
            Subscription Plan
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='mr-10'>Expiry : <span>26th Nov 2023</span></div>
        </div>
      </div>
    </div>
  );
};

export default StatsRow;
