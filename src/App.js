import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Showdown from 'showdown';
import changeText from './actions/changeText';
import changeSize from './actions/changeSize';
import Maximize from './icons/maximize';
import Minimize from './icons/minimize';

let flag = true;

function App() {
  const converter = new Showdown.Converter();
  converter.setFlavor('github');

  const text = useSelector((store) => store.text);
  const display = useSelector((store) => store.display);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeText(e.target.value));
  }
  const handleSize = () => {
    if (flag == true) {
      flag = false;
      dispatch(changeSize({
        editorStyle: { height: "100%", width: "60%" },
        previewerStyle: { height: "70%", width: "42%" },
        editorButton: Minimize,
        previewerButton: Maximize
      }));
    }
    else {
      flag = true;
      dispatch(changeSize({
        editorStyle: { height: "70%", width: "42%" },
        previewerStyle: { height: "100%", width: "60%" },
        editorButton: Maximize,
        previewerButton: Minimize
      }));
    }
  }

  return (
    <div id='container'>
      <div className="App">
        <div id='mark' style={display.editorStyle}>
          <div className='header'>
            <h2>Editor</h2>
            <button onClick={() => handleSize()}>{display.editorButton}</button>
          </div>
          <textarea
            onChange={(e) => handleChange(e)}
          >{text}</textarea>
        </div>
        <div id='prev' style={display.previewerStyle}>
          <div className='header'>
            <h2>Previewer</h2>
            <button onClick={() => handleSize()}>{display.previewerButton}</button>
          </div>
          <div id='preview'
            dangerouslySetInnerHTML={{ __html: converter.makeHtml(text) }}
          ></div>
        </div>
      </div>
      <a href='https://github.com/AnhBigBrother/markdown-previewer' target='_blank'>by Tien_Anh_Tran</a>
    </div>
  );
}

export default App;