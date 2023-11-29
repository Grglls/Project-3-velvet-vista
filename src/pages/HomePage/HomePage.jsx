import React, { useState } from "react";

export default function HomePage ({uploadImage}) {
//   const [image, setImage] = useState('');
//   const _handleImageChange = (e) => {
//     setImage(e.target.files[0]);
// }
//   const _handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//         if (image) {
//             const data = await uploadImage(image);
//             console.log(data);
//             // newTask.image = data.url;
//         } else {
//             setImage('');
//         }
//     } catch (error) {
//         console.log(error);
//     }
//   }

    return (
      <main className="HomePage">
        <div>
            Home Page Test
        </div>
        <form onSubmit={_handleSubmit}>
          <input type="file" onChange={_handleImageChange} />
          <button>Submit</button>
        </form>
      </main>
    );
  }