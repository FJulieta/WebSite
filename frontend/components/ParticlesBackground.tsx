import { useMemo } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
    const particlesInit = useMemo(() => {
        return async (engine: Engine) => {
            await loadSlim(engine);
        };
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: { value: 'transparent' } },
                particles: {
                    color: { value: '#f2a6c1' },
                    links: {
                        enable: true,
                        color: '#f2a6c1',
                        distance: 90,
                        opacity: 0.4,
                    },
                    move: { enable: true, speed: 0.5 },
                    number: { value: 25 },
                    size: { value: { min: 1, max: 3 } },
                },
            }}
        />
    );
}
