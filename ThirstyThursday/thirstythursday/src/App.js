import './App.css';
import Tesseract from 'tesseract.js'
import { useState } from 'react'

function App() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState([]);

  const onFileChange = (e) => {
    setFiles([...files, e.target.files[0]])
  }

  const processImage = () => {
    files.map( file => {
      Tesseract.recognize(
        file,
        "eng",
        { logger: m => {
          if(m.status === 'recognizing text') {
            setProgress(m.progress)
          }
        }})
        .then(({ data: { text } }) => {
          const newText = text.split('\n')
          const newList = newText.filter( (string) => {
            if (string.length > 1 )
              return string;
          })
          console.log(newList, 'WHAT IS THIS')
          setResult([...result, ...newList]);
        })
    })
  }

  return (
    <div className="App">
      <input type="file" onChange={onFileChange}/>
      <div style={{marginTop: 25}}>
        <input type="button" value="Submit" onClick={processImage} />
      </div>
      <div>
        <progress value={progress} max={1} />
      </div>
      <div style={{ marginTop: 20, fontSize: 18 }} >
        Result:
      </div>
      <>
      { result.length > 0 && result.map( (resultLine, index) => (
        <>
          <div>
            {resultLine}
          </div>
          <br />
        </>
        ))
      }
      </>
    </div>
  );
}

export default App;
