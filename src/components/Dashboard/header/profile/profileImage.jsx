
import { useState ,useRef,useEffect } from 'react';

export default function ProfileImage() {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
  
   

  return (
    <div className="relative w-18 h-18 bg-white items-center justify-center">
      {/* Profile Picture */}
      <img
        src={image || '/avatar.png'} // fallback image
        alt="Profile"
        className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-lg item"
      />

      {/* Upload Overlay Button */}
      <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700">
        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </label>
     
</div>
  );
}
