import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, themeSettings, setThemeSettings } = useStateContext();
  return (
    <div className='bg-half-transparent fixed right-0 top-0  nav-item custom-css-box'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52]'>
        <div className='flex justify-between items-center p-4 border-b-1 border-color'>
          <p className='font-semibold text-lg' >Settings</p>
          <button
            type='button'
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <div className="theme-toggle-wrapper">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={currentMode === 'Dark'}
                  onChange={(e) => {
                    const newMode = e.target.checked ? 'Dark' : 'Light';
                    setMode({ target: { value: newMode } });
                  }}
                />
                <div className="slider round white" id="checkbox">
                  <img className="clouds cloud1" src="https://i.ibb.co/BKZ5z46/Mediamodifier-Design-Template.png" alt="cloud" />
                  <img className="clouds cloud2" src="https://i.ibb.co/BKZ5z46/Mediamodifier-Design-Template.png" alt="cloud" />
                  <div className="night"></div>
                  <img className="balloon" src="https://i.ibb.co/rtvfLkh/kisspng-hot-air-ballooning-hot-air-balloon-festival-flight-balloon-festival-5b0c63bbf3e107-504475381.png" alt="balloon" />
                  <p className="star">✦</p>
                  <p className="star">✦</p>
                  <p className="star">✦</p>
                  <p className="star">✦</p>
                  <p className="star">✦</p>
                  <img className="spaceship" src="https://i.ibb.co/LhFzH2X/kisspng-emoji-rocket-spacecraft-text-messaging-clip-art-rocket-5acb92ecc2cf10-049862491523290860798.png" alt="spaceship" />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className='flex-col p-4 border-t-1 border-black ml-4'>
          <p>Theme Colors</p>
          <div className="grid grid-cols-5 gap-3 mt-4">
            {themeColors.map((item, index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                <div
                  className="relative cursor-pointer flex items-center justify-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className={`h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-110 ${item.color === currentColor ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600 scale-110' : ''}`}
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`text-xl text-white drop-shadow-md ${item.color === currentColor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings