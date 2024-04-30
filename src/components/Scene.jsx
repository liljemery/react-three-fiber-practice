import { Grid } from "@react-three/drei";
import CameraControl from "./CameraControl";
import OrbitControl from "./OrbitControl";
import PresentationControl from "./PresentationControl";
import ScrollControl from "./ScrollControl";
import TransformControl from "./TransformControl";


const Scene = (props) => {



    
    return (
        <>
            {/* <OrbitControl/> */}
            {/* <PresentationControl/> */}
            {/* <ScrollControl /> */}
            <TransformControl />
        </>
    )
}

export default Scene