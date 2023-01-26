import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function ColorGame() {
  const [color, setColor] = useState("violet");
  const styles = {
    background: color,
  };
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color" />
      <ColorBox />
    </div>

  );
}
