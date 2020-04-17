import React, { useState } from 'react'

export default function App() {
    const [image, setImage] = useState({preview: '', raw: ''});
    const handleChange = (e) => {
        setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
        });
        console.log(image);
    };
    return (
        <div className='App'>
            <label htmlFor="upload-button">
                {
                    image.preview ? <img src={image.preview} width="600" height="600"/> : (
                        <h5 className="text-center">Upload your photo</h5>
                    )
                }
            </label>
            <input type="file" id="upload-button" style={{display: 'none'}} onChange={handleChange}/>
            <br/>
        </div>
    )
}
