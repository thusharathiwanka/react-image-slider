import Slider from "./Slider";
import { imageInfo } from "./imageInfo";

function App() {
  console.log(imageInfo);
  return <Slider slides={imageInfo} />;
}

export default App;
