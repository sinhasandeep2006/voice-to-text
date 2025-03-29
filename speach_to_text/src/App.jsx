import { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
function App() {
  const  [text,settext]=useState()
  const [isCopied, setCopied] = useClipboard(text);
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, });
  const stopListening = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="container">
        <h2> Speech to text converter</h2>
        <br />
        <p>
          convert you voice into text 😁 and copy and past for the Doumentaion
          😉
        </p>
        <div className="main-content" onClick={()=>settext(transcript)}>{transcript}</div>
        <div className="btn-style">
        <button onClick={setCopied}>
       {isCopied ? "copied" : "Copy to clipboard"}
    </button>
          <button onClick={startListening}>Start</button>
          <button onClick={stopListening}>Stop</button>
        </div>
      </div>
    </>
  );
}
export default App;
