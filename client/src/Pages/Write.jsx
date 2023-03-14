import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  
  return (
    <div className='write-container' >
      <div className='content' >
        <input type="text" placeholder='title' />
        <div className='editorContainer' >
          <ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: 'none'}} type='file' id='file' name='' />
          <label className='file' htmlFor='file'>Upload Image</label>
          <div className='buttons'>
            <button>Save as a Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name='cat' value='art' id='art' />
            <label html='art'>Art</label>
          </div>
          <div className='cat' >
            <input type="radio" name='cat' value='science' id='science' />
            <label html='science'>Science</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='cinema' id='cinema' />
            <label html='cinema'>Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='design' id='design' />
            <label html='design'>Design</label>
          </div>
          <div className="cat">
            <input type="radio" name='cat' value='food' id='food' />
            <label html='food'>Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write