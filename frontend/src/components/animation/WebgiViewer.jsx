import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  GammaCorrectionPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  CanvasSnipperPlugin,
  mobileAndTabletCheck,
  AssetManagerBasicPopupPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollAnimation from "../../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = () => {
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(null);

  const memoizedScrollAnimation = useCallback(
    (position, target, isMobile, onUpdate) => {
      if (position && target && onUpdate) {
        scrollAnimation(position, target, isMobile, onUpdate);
      }
    },
    []
  );

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const isMobileOrTablet = mobileAndTabletCheck();
    setIsMobile(isMobileOrTablet);

    const manager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    // Add plugins individually
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    // Add a popup (HTML) with download progress when any asset is downloading
    await viewer.addPlugin(AssetManagerBasicPopupPlugin);

    viewer.renderer.refreshPipeline();

    // Load an asset into the viewer
    // await manager.addFromPath("camera.glb");
    // await manager.addFromPath("bim.glb");
    await manager.addFromPath("scene-black.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });


    if (isMobileOrTablet) {
      position.set(-16.7, 17.7, 11.7);
      target.set(0, 1.37, 0);
      if (contentRef.current) {
        contentRef.current.className = "mobile-or-tablet";
      }
    }

    window.scrollTo(0, 0);

    let needsUpdate = true;


    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    // Trigger scroll-based animation
    memoizedScrollAnimation(position, target, isMobileOrTablet, onUpdate);
  }, [memoizedScrollAnimation]);

  useEffect(() => {
    setupViewer();
  }, [setupViewer]);

  return (
    <div id="webgi-canvas-container" ref={contentRef}>
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
};

export default WebgiViewer;


