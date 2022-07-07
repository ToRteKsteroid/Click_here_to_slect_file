import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [slectedFile, setSelectedFile] = useState(null);
  const [listOfFiles, setListOfFiles] = useState(null);

  const onFileChange = (e) => {
    setSelectedFile(e.target.files);
  };

  useEffect(() => {
    if (slectedFile) {
      const items = Array.from(slectedFile);
      setListOfFiles(items);
    }
  }, [slectedFile]);

  const clearFile = () => {
    setSelectedFile(null);
    setListOfFiles(null);
  };

  console.log(slectedFile);
  console.log(listOfFiles);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form>
        <input type="file" id="file" hidden onChange={onFileChange} multiple />
        <label htmlFor="file">
          <h1>Click here to slect file.</h1>
        </label>
        {listOfFiles && (
          <>
            {listOfFiles.map((file) => (
              <p key={file.name}>{file.name}</p>
            ))}
          </>
        )}

        {slectedFile && (
          <button type="button" onClick={clearFile}>
            delete
          </button>
        )}
      </form>
    </div>
  );
}
