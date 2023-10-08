import { useAnimations, useGLTF, useTexture } from "@react-three/drei"
import { useState, useEffect, useRef } from "react"
import { useFrame } from '@react-three/fiber';
import { Color } from 'three'
import { Leva, useControls } from "leva";

export default function Phare({ toggleBetweenMode }) {
  const doesModeSwitch = toggleBetweenMode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const {positionControl, rotationControl, scaleControl} = useControls({
  //   positionControl: {
  //     value: { x: 0.51, y:0.13, z: -0.53 },
  //     min: - 10,
  //     max: 10,
  //     step: 0.01,
  //     joystick: 'invertY',
  // },
  // rotationControl: {
  //   value: { x: 0, y:-2.34, z: 0 },
  //     min: - 10,
  //     max: 10,
  //     step: 0.01,
  //     joystick: 'invertY',
  // },
  // scaleControl: 0.3,
  // })



  const phare = useGLTF('./models/phareOeil.glb')
  const oeil = useGLTF('./models/oeil_apply.glb')
  const animations = useAnimations(oeil.animations, oeil.scene)
  const texturePhare = useTexture('./models/textures/phare_texture_spack.jpg')
  const textureVitre = useTexture('./models/textures/phare_vitre_texture.jpg')
  const textureOeil = useTexture('./models/textures/murOeilTexturePack.jpg')
  texturePhare.flipY = false;
  textureOeil.flipY = false;
  textureVitre.flipY = false;


  const colorTransition = useRef();
  const day = new Color(30, 30, 10)
  const night = new Color(1, 1, 1)
  useEffect(() => {
    animations.actions.paupiereBasAction.play()
    animations.actions.oeilAction.play()
    animations.actions.deuxieme_paupiereAction.play()
    animations.actions.paupiereHautAction.play()
    animations.actions.oeilAction.play()
  }, [])

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addListener(handleDarkModeChange);
    setIsDarkMode(darkModeMediaQuery.matches);

    return () => {
      darkModeMediaQuery.removeListener(handleDarkModeChange);
    };
  }, []);

  useFrame(() => {
    isDarkMode ? colorTransition.current.material.color.lerp(doesModeSwitch ? day : night, 0.05) : colorTransition.current.material.color.lerp(doesModeSwitch ? night : day, 0.05)
  })

  return (<>

    <group position-y={-10} rotation={[0, 4, 0]}>
      <mesh
        geometry={phare.nodes.phare.geometry} scale={2}>
        <meshBasicMaterial map={texturePhare} />
      </mesh>
      <mesh
        geometry={phare.nodes.mureOeil.geometry} scale={2}>
        <meshBasicMaterial map={textureOeil} />
      </mesh>
      <mesh ref={colorTransition} geometry={phare.nodes.vitre.geometry} scale={2}>
        <meshBasicMaterial
          color={isDarkMode ? doesModeSwitch ? night : day : doesModeSwitch ? day : night}
          rougness={1} metalness={0} toneMapped={false} map={textureVitre} />
      </mesh>
    </group>

    <primitive position={[0.51, 0.13, -0.53]} scale={2} rotation={[0, -2.34, 0]} object={oeil.scene} />

  </>)
}