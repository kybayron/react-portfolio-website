import React, { useCallback } from "react"

import Particles from "react-tsparticles";

import type { Container, Engine } from "tsparticles-engine";

import { loadFull } from "tsparticles";

import options from './particles'

export default function ParticlesComponent () {
    
    const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);
  
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
  
    return (
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
    );

    
}