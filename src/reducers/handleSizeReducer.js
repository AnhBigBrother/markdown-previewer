import Maximize from "../icons/maximize";
import Minimize from "../icons/minimize";

const handleSizeReducer = (state = {
  editorStyle: { height: "70%", width: "42%" },
  previewerStyle: { height: "100%", width: "60%" },
  editorButton: Maximize,
  previewerButton: Minimize
}
  , action) => {
  switch (action.type) {
    case "changeSize": return action.payload;
  }
  return state;
}

export default handleSizeReducer;