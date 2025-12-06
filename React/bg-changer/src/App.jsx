import { useState } from 'react';
import Button from './Components/Button';

function App() {

  const colors =
    ["Red", "Green", "Blue", "Olive", "Gray", "Yellow", "Pink", "Purple", "Lavender", "White", "Black"];
  
  const [bgColor, setBgColor] = useState('Olive');

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {colors.map((color) => (
            <Button key={color} color={color} onClick={() => setBgColor(color)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
