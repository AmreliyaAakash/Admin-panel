import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../Component'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className='mt-12 flex-col'>
      <div className='flex flex-wrap  lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b82b58ac-7d87-4320-98cc-c73c8800a782/dk8txhx-c6d9068f-99d9-4830-8f22-6e900c2c44b5.png/v1/fill/w_1280,h_262,q_80,strp/screenshot_2025_07_30_161813_by_aakash87_dk8txhx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjYyIiwicGF0aCI6IlwvZlwvYjgyYjU4YWMtN2Q4Ny00MzIwLTk4Y2MtYzczYzg4MDBhNzgyXC9kazh0eGh4LWM2ZDkwNjhmLTk5ZDktNDgzMC04ZjIyLTZlOTAwYzJjNDRiNS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.yei-gJeh9xwF6VppsrM6-IMALthykUYvN3n29QOnPmo)] '>
          <div className='flex justify-between items-center'>
            <div className=''>
              <p className='font-semibold text-gray-400'>Earnings</p>
              <p className='text-2xl'>₹9,83,74,893</p>
            </div>
          </div>
          {/* second */}
          <div className='mt-6'>
            <Button color='white' bgColor={currentColor} text='Download' borderRadius='10px' size='md' />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2 ${item.pcColor === 'red-600' ? 'text-red-600' : 'text-green-600'}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-auto '>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Update</p>
            <div className='flex items-center gap-4'>
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className="text-3xl font-semibold">₹93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">₹48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div>
                <SparkLine
                  currentColor={currentColor}
                  data={SparklineAreaData}
                  width="200px"
                  height="80px"
                  type="Line"
                  id="line-sparkline"
                  color={currentColor}
                />
              </div>
              <div className='mt-10'>
                <Button color='white' bgColor={currentColor} text='Download Report' borderRadius='10px' size='md' />   
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Ecommerce