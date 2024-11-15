import React, { useRef, useCallback, useState, useEffect } from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  TemporalAAPlugin,
  AnisotropyPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  // ITexture,
  TweakpaneUiPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  // FileTransferPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WebViewer = () => {
  const objRef = useRef(null);

  const setupViewer = useCallback(async () => {
    try {
      // Initialize the viewer
      const viewer = new ViewerApp({
        canvas: objRef.current,
      });

      // Add all the necessary base plugins
      await addBasePlugins(viewer);

      // Add essential plugins
      await viewer.addPlugin(AssetManagerBasicPopupPlugin);
      // await viewer.addPlugin(FileTransferPlugin);
      await viewer.addPlugin(CanvasSnipperPlugin);

      // Import and load a GLB file
      await viewer.load("./assets/scene.glb");

      viewer.getPlugin

      // Optionally load an environment map if not set in the GLB
      // await viewer.setEnvironmentMap("./assets/environment.hdr");

      // Setup the UI plugin for testing
      const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin);
      uiPlugin.setupPlugins([TonemapPlugin, CanvasSnipperPlugin]); // Correct way to set plugins in the UI
    } catch (error) {
      console.error("Error setting up WebGI viewer:", error);
    }
  }, []);

  useEffect(() => {
    setupViewer();
    return () => {
      // Cleanup: Optional viewer cleanup logic here, if needed.
      // Example: viewer.destroy() if WebGI has such a method.
    };
  }, [setupViewer]);

  return (
    <div>
      <canvas id="web-canvas" ref={objRef} />
      <p>WebGI Viewer Loaded</p>
    </div>
  );
};


export default WebViewer;
