import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export type ActuatorHandle = {
    group: THREE.Group | null;
    setClipProgress: (t: number) => void; // 0..1 across the longest embedded clip
    setIdle: (idle: boolean) => void;
};

const MODEL_URL = "/models/actuator.glb";

const ActuatorModel = forwardRef<ActuatorHandle>((_props, ref) => {
    const groupRef = useRef<THREE.Group>(null);
    const gltf = useGLTF(MODEL_URL) as any;
    const scene = gltf.scene as THREE.Group;
    const animations = gltf.animations as THREE.AnimationClip[];

    const mixer = useMemo(() => new THREE.AnimationMixer(scene), [scene]);
    const actions = useMemo(
        () =>
            animations.map((clip) => {
                const a = mixer.clipAction(clip);
                a.play();
                a.paused = true;
                a.enabled = true;
                a.setLoop(THREE.LoopOnce, 1);
                a.clampWhenFinished = true;
                return a;
            }),
        [animations, mixer]
    );
    const duration = useMemo(
        () => animations.reduce((m, c) => Math.max(m, c.duration), 0),
        [animations]
    );

    const idleRef = useRef(true);
    const idleTimerRef = useRef(0);

    useFrame((_, delta) => {
        if (idleRef.current && groupRef.current) {
            idleTimerRef.current += delta;

            const amplitudeRad = THREE.MathUtils.degToRad(15);
            const period = 15;

            groupRef.current.rotation.y =
                Math.sin((idleTimerRef.current / period) * Math.PI * 1.5) * amplitudeRad;
        }
    });

    useEffect(() => {
        scene.traverse((o) => {
            const m = o as THREE.Mesh;
            if (m.isMesh) {
                m.castShadow = true;
                m.receiveShadow = true;
            }
        });
    }, [scene]);

    useImperativeHandle(
        ref,
        () => ({
            get group() {
                return groupRef.current;
            },
            setClipProgress: (t: number) => {
                const clamped = Math.max(0, Math.min(1, t));
                actions.forEach((a) => {
                    a.paused = true;
                    a.time = clamped * (a.getClip().duration || duration);
                });
                mixer.update(0);
            },
            setIdle: (v: boolean) => {
                idleRef.current = v;
            },
        }),
        [actions, mixer, duration]
    );

    return (
        <group
            ref={groupRef}
            dispose={null}
            scale={0.30} // Adjust this value
        >
            <primitive object={scene} />
        </group>
    );
});

ActuatorModel.displayName = "ActuatorModel";
useGLTF.preload(MODEL_URL);

export default ActuatorModel;