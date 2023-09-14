/* eslint-disable react/no-unknown-property */
import {Sparkles,Center,useGLTF, OrbitControls, useTexture } from "@react-three/drei"
import {extend } from "@react-three/fiber"



extend({OrbitControls:OrbitControls})



const Experience = () => {

  const {nodes} = useGLTF("/scene.gltf")
  console.log(nodes)

const normalTexture = useTexture("/public/textures/material_0_normal.png")
const diffuseTexture = useTexture("/public/textures/material_0_diffuse.png")

  return (
    <>
    <color args={["#87ceeb"]} attach="background" />
<OrbitControls makeDefault />

{/* <mesh scale={1.5}>
<boxGeometry/>
<meshNormalMaterial/>
</mesh> */}
 
<Center>
  {/* <mesh geometry={nodes.baked.geometry}>
  <meshBasicMaterial map={texture}/>
</mesh>
<mesh geometry={nodes.poleLightA.geometry}
position={nodes.poleLightA.position}
>
<meshBasicMaterial color="#ffffe5" />

</mesh>
<mesh geometry={nodes.poleLightB.geometry}
position={nodes.poleLightB.position}
>
<meshBasicMaterial color="#ffffe5"/>
</mesh>

<mesh geometry={nodes.portalLight.geometry}
position={nodes.portalLight.position}
rotation={nodes.portalLight.rotation}
>

</mesh> */}
<mesh geometry={nodes.Object_5.geometry}
position={nodes.Object_5.position}
rotation={[1,5.1,7]}
scale={[2,2,2]}
>
  <meshBasicMaterial map={normalTexture} />
  <meshBasicMaterial map={diffuseTexture}  />
  {/* <meshBasicMaterial map={occlusionTexture} /> */}
  {/* <meshBasicMaterial map={glossinessTexture} /> */}



</mesh>
{/* <Sparkles size={6} scale={[4,2,4]} position-y={1}  speed={0.4} count={120} /> */}
</Center>




    </>
  )
}
export default Experience
