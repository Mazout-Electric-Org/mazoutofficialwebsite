import { Component, Suspense, forwardRef, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import ActuatorModel, { ActuatorHandle } from "./ActuatorModel";

type Props = {
    className?: string;
    isDesktop?: boolean;
};

const LoadingSpinner = () => (
    <div
        style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
        }}
    >
        <div
            style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.15)",
                borderTopColor: "rgba(255,255,255,0.65)",
                animation: "actuator-spin 0.8s linear infinite",
            }}
        />
        <style>
            {`@keyframes actuator-spin { to { transform: rotate(360deg); } }`}
        </style>
    </div>
);

class ModelErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { hasError: boolean }> {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(err: unknown) {
        // eslint-disable-next-line no-console
        console.warn("[ActuatorScene] Model failed to load, using fallback.", err);
    }
    render() {
        return this.state.hasError ? this.props.fallback : this.props.children;
    }
}

const ActuatorScene = forwardRef<ActuatorHandle, Props>(({ className, isDesktop = true }, ref) => {
    return (
        <div className={"w-full h-full " + (className ?? "")} aria-hidden>
            {/* Spinner renders in normal DOM, OUTSIDE the Canvas/Suspense boundary,
                so it shows immediately and doesn't wait on the R3F render tree. */}
            <Suspense fallback={<LoadingSpinner />}>
                <Canvas
                    camera={
                        isDesktop
                            ? { position: [0, 0.4, 5.5], fov: 32 }
                            : { position: [0, 0.2, 7.5], fov: 38 }
                    }
                    dpr={[1, 1.75]}
                    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                    shadows
                >
                    <ambientLight intensity={0.18} />

                    <directionalLight
                        position={[4, 6, 4]}
                        intensity={0.55}
                        castShadow
                        shadow-mapSize={[1024, 1024]}
                        color="#fff3e0"
                    />

                    <directionalLight position={[-5, 2, -3]} intensity={0.15} color="#a8c0d9" />

                    <Suspense fallback={null}>
                        <ModelErrorBoundary fallback={null}>
                            <ActuatorModel ref={ref} />
                        </ModelErrorBoundary>
                        <Environment preset="city" environmentIntensity={0.35} />
                    </Suspense>
                    <ContactShadows
                        position={[0, -1.2, 0]}
                        opacity={0.45}
                        scale={8}
                        blur={2.4}
                        far={3}
                    />
                </Canvas>
            </Suspense>
        </div>
    );
});

ActuatorScene.displayName = "ActuatorScene";

export default ActuatorScene;