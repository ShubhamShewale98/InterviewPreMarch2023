import React from 'react';
// import vector from '../assest/Images/Vector.png'
// import bgc from '../assets/Images/bgc.png'; 
import obeLadyImage from '../assest/Images/obeLadyImage.png';
import Vector from '../assest/Images/Vector.svg';


export interface CardProps {
  elem: { name:string,
  price:string,
  discount:string,
  tvl:string,
  logo:string,
  pairs:any[]}
}

const Card: React.FC<CardProps> = ({ elem }) => {
  return (<>

    <div style={{
      backgroundImage: `url(${Vector})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'fill',
      height: '320px',
      width: '57%',
      position: 'relative',
      backgroundColor: 'rgb(27,30,51)'
    }} >
      <div className='ml-20 aling center rounded-sm    '>
        <img src={elem.logo} alt="" className='ml-10 aling center' />
      </div>

      <div className=' max-w-sm mx-auto  items-center space-x-8'>
        <p className="text-sm text-sky-700 mt-2 pt-5 font-extrabold  " >{elem.name}</p>


        <div className='rounded-sm bg-slate-900 mt-2 w-4/5  '>
          <p className="text-sm text-white   ml-3  " >{elem.price}
            <span className="text-sm text-red-500  ml-3">
              {elem.discount}
            </span>
          </p>
        </div>

        <p className="text-sm text-gray-500 pr-8 font-semibold mt-2 " >Price</p>
        <div className='rounded-sm bg-slate-900 mt-2 w-4/5   '>
          <p className="text-sm text-white   mr-3  " >{elem.tvl}

          </p>
        </div>

        <p className="text-sm text-gray-500 pr-8 font-semibold mt-2" >TVL</p>
        <div className='pl-14'>
        <div className='rounded-xs bg-slate-900 mt-2 w-3/6 flex justify-center   '>
          {elem?.pairs.length > 0 && elem?.pairs.map((ele:any) => <img src={ele} alt="Image 1" className="w-8 h-5" />) }
        
        </div>
        </div>
       
        <p className="text-sm text-gray-500 pr-8 pt-3 font-extrabold" >Popular Pairs</p>
      </div>


    </div>
  </>

  );
};

export default Card; 