import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

function App() {
  return (
    <div className="bg-slate-200 h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
      <ShaderGradientCanvas
        importedfiber={{ ...fiber, ...drei, ...reactSpring }}
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23026532&color2=%238BBDA3&color3=%236d6b6a&embedMode=off&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="fixed top-0 left-0 p-4">
        <h1>Gonzalo Paz</h1>
        <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/gonzalopaz22/" target="_blank">
              Linkedin
            </a>
            <a href="https://github.com/GonzaAvery" target="_blank">
              Github
            </a>
            <a href="https://ar.pinterest.com/gonzalopaz3959/" target="_blank">
              Pinterest
            </a>
          </div>
          <div className="fixed bottom-0 right-0 p-4 flex justify-between">
            <div className="flex gap-2">
              <h2>Software Engineer | Buenos Aires</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
