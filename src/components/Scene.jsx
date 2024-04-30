import { Grid } from "@react-three/drei";
import CameraControl from "./CameraControl";
import OrbitControl from "./OrbitControl";
import PresentationControl from "./PresentationControl";
import ScrollControl from "./ScrollControl";
import TransformControl from "./TransformControl";
import PivotControl from "./PivotControl";


const Scene = (props) => {



    
    return (
        <>
            {/* <OrbitControl/> */}
            {/* <PresentationControl/> */}
            {/* <ScrollControl /> */}
            {/* <TransformControl /> */}
            <PivotControl />
        </>
    )
}

export default Scene