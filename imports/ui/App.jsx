import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, withReact } from "slate-react";

export const App = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([]);

  return (
    <div>
      bla
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};
