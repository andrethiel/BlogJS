import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
import List from '@editorjs/editorjs'
import ImageTool from '@editorjs/image';

const editor = new EditorJS({
  holderId : 'editorjs',
  tools: { 
    header: Header, 
    list: List,
    image: ImageTool
  }, 
  
});


function App() {
  return (
    <div id='editorjs' style={{margin: '1rem', border: 'solid 1px'}}>
      
    </div>
  );
}

export default App;
