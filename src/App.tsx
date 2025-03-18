import {
  MeshGradient,
  PerlinNoise,
  Metaballs,
} from "@paper-design/shaders-react";
import { useState } from "react";
import "./App.css";
import { Slider } from "./components/Slider";
import { ColorPicker } from "./components/ColorPicker";

function App() {
  const [color1, setColor1] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  const [color2, setColor2] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  const [color3, setColor3] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  const [color4, setColor4] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  const [scale, setScale] = useState(1);
  const [proportion, setProportion] = useState(0.5);
  const [contour, setContour] = useState(1);
  const [octaveCount, setOctaveCount] = useState(5);
  const [persistence, setPersistence] = useState(0.5);
  const [lacunarity, setLacunarity] = useState(2);
  const [speed, setSpeed] = useState(1);
  const [ballSize, setBallSize] = useState(0.3);
  const [visibilityRange, setVisibilityRange] = useState(0.5);
  const [shaderType, setShaderType] = useState("mesh"); // "mesh", "perlin", or "metaballs"

  return (
    <>
      <div className="controls">
        <div className="shader-select">
          <select
            value={shaderType}
            onChange={(e) => setShaderType(e.target.value)}
          >
            <option value="mesh">Mesh Gradient</option>
            <option value="perlin">Perlin Noise</option>
            <option value="metaballs">Metaballs</option>
          </select>
        </div>
        <ColorPicker label="Color 1" defaultValue={color1} setter={setColor1} />
        <ColorPicker label="Color 2" defaultValue={color2} setter={setColor2} />
        {(shaderType === "mesh" || shaderType === "metaballs") && (
          <ColorPicker
            label="Color 3"
            defaultValue={color3}
            setter={setColor3}
          />
        )}
        {shaderType === "mesh" && (
          <ColorPicker
            label="Color 4"
            defaultValue={color4}
            setter={setColor4}
          />
        )}
        {shaderType === "perlin" && (
          <>
            <Slider
              label="Scale"
              min="0.1"
              max="10"
              step="0.0001"
              defaultValue="1"
              setter={setScale}
            />
            <Slider
              label="Proportion"
              min="0"
              max="1"
              step="0.0001"
              defaultValue="0.5"
              setter={setProportion}
            />
            <Slider
              label="Contour"
              min="0"
              max="10"
              step="0.0001"
              defaultValue="1"
              setter={setContour}
            />
            <Slider
              label="Octave Count"
              min="1"
              max="10"
              step="0.0001"
              defaultValue="5"
              setter={setOctaveCount}
            />
            <Slider
              label="Persistence"
              min="0"
              max="1"
              step="0.0001"
              defaultValue="0.5"
              setter={setPersistence}
            />
            <Slider
              label="Lacunarity"
              min="0"
              max="5"
              step="0.0001"
              defaultValue="2"
              setter={setLacunarity}
            />
          </>
        )}
        {shaderType === "metaballs" && (
          <>
            <Slider
              label="Ball Size"
              min="0.1"
              max="1"
              step="0.0001"
              defaultValue="0.3"
              setter={setBallSize}
            />
            <Slider
              label="Visibility Range"
              min="0.1"
              max="1"
              step="0.0001"
              defaultValue="0.5"
              setter={setVisibilityRange}
            />
          </>
        )}
        <Slider
          label="Speed"
          min="0"
          max="2"
          step="0.0001"
          defaultValue="1"
          setter={setSpeed}
        />
      </div>
      <div className="shaders-container">
        {shaderType === "perlin" ? (
          <PerlinNoise
            color1={color1}
            color2={color2}
            scale={scale}
            proportion={proportion}
            contour={contour}
            octaveCount={octaveCount}
            persistence={persistence}
            lacunarity={lacunarity}
            speed={speed}
          />
        ) : shaderType === "metaballs" ? (
          <Metaballs
            color1={color1}
            color2={color2}
            color3={color3}
            ballSize={ballSize}
            visibilityRange={visibilityRange}
            speed={speed}
          />
        ) : (
          <MeshGradient
            color1={color1}
            color2={color2}
            color3={color3}
            color4={color4}
            speed={speed}
          />
        )}
      </div>
    </>
  );
}

export default App;
