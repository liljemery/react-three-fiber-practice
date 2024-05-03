import { EffectComposer, Glitch } from "@react-three/postprocessing"
import { GlitchMode } from 'postprocessing'

const Effects = () => {
  return (
    <EffectComposer>
        <Glitch
            delay={[1.5, 3.5]} // min and max glitch delay
            duration={[0.6, 1.0]} // min and max glitch duration
            strength={[0.3, 1.0]} // min and max glitch strength
            mode={GlitchMode.SPORADIC} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.85} 
        />
    </EffectComposer>
  )
}

export default Effects