import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Custom event to send drag rotations from Hero interactive viewport to global 3D model
export interface CoreDragEventDetail {
  deltaX: number;
  deltaY: number;
}

export const dispatchCoreDrag = (deltaX: number, deltaY: number) => {
  window.dispatchEvent(
    new CustomEvent<CoreDragEventDetail>('tech-core-drag', {
      detail: { deltaX, deltaY },
    })
  );
};

export const ScrollTechCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL initialization skipped:', e);
      return;
    }

    // Clamp device pixel ratio for smooth 60fps performance without thermal throttling
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 7.2);

    // Main 3D Container Group for the Tech Core
    const coreRoot = new THREE.Group();
    scene.add(coreRoot);

    // Dynamic Color Palette (Cyberpunk Amber & Electric Cyan)
    const accentColor = new THREE.Color(0xf59e0b); // Amber / Gold
    const cyanColor = new THREE.Color(0x00f0ff);   // Cyber Cyan
    const darkObsidian = new THREE.Color(0x0c1017);

    // 1. Central Pulsating Quantum Nucleus (Dual Octahedrons)
    const nucleusGeom = new THREE.OctahedronGeometry(0.58, 0);
    const nucleusMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeom, nucleusMat);
    coreRoot.add(nucleusMesh);

    const innerSphereGeom = new THREE.SphereGeometry(0.32, 16, 16);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: cyanColor,
      transparent: true,
      opacity: 0.75,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeom, innerSphereMat);
    coreRoot.add(innerSphere);

    // 2. Faceted Crystalline Hyper-Core (Icosahedron with Translucent Faces)
    const crystalGeom = new THREE.IcosahedronGeometry(1.15, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: darkObsidian,
      emissive: new THREE.Color(0x051525),
      roughness: 0.18,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.45,
      transparent: true,
      opacity: 0.82,
      wireframe: false,
    });
    const crystalMesh = new THREE.Mesh(crystalGeom, crystalMat);
    coreRoot.add(crystalMesh);

    // Wireframe Cage for the crystal
    const cageGeom = new THREE.IcosahedronGeometry(1.16, 0);
    const cageMat = new THREE.MeshBasicMaterial({
      color: cyanColor,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const cageMesh = new THREE.Mesh(cageGeom, cageMat);
    coreRoot.add(cageMesh);

    // 3. Holographic Gimbal Gyro Rings
    // Ring 1: Equatorial Gyro Ring with Orbiting Satellites
    const ring1Group = new THREE.Group();
    const ring1Geom = new THREE.TorusGeometry(1.72, 0.022, 16, 90);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: cyanColor,
      emissive: cyanColor,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1Group.add(ring1Mesh);

    // Orbiting Satellite Cubes along Ring 1
    const satGeom = new THREE.BoxGeometry(0.09, 0.09, 0.09);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let i = 0; i < 4; i++) {
      const sat = new THREE.Mesh(satGeom, satMat);
      const angle = (i * Math.PI) / 2;
      sat.position.set(Math.cos(angle) * 1.72, Math.sin(angle) * 1.72, 0);
      ring1Group.add(sat);
    }
    coreRoot.add(ring1Group);

    // Ring 2: Polar Gyro Ring (Tilted 52 degrees)
    const ring2Group = new THREE.Group();
    ring2Group.rotation.x = Math.PI * 0.3;
    ring2Group.rotation.y = Math.PI * 0.25;

    const ring2Geom = new THREE.TorusGeometry(2.05, 0.016, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2Group.add(ring2Mesh);

    // Minor Satellites on Ring 2
    for (let i = 0; i < 3; i++) {
      const sat = new THREE.Mesh(satGeom, nucleusMat);
      const angle = (i * 2 * Math.PI) / 3;
      sat.position.set(Math.cos(angle) * 2.05, Math.sin(angle) * 2.05, 0);
      ring2Group.add(sat);
    }
    coreRoot.add(ring2Group);

    // 4. Floating Quantum Data Cloud (Particle Swarm)
    const particleCount = 140;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
      const theta = Math.PI * (1 + 5 ** 0.5) * i;
      const radius = 2.4 + Math.random() * 0.7;

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const isCyan = i % 2 === 0;
      const color = isCyan ? cyanColor : accentColor;
      particleColors[i * 3] = color.r;
      particleColors[i * 3 + 1] = color.g;
      particleColors[i * 3 + 2] = color.b;
    }

    particleGeom.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeom.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeom, particleMat);
    coreRoot.add(particlePoints);

    // 5. Dynamic Scene Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(cyanColor, 3.5, 12);
    keyLight.position.set(3, 3, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(accentColor, 4.0, 12);
    rimLight.position.set(-3, -2, 3);
    scene.add(rimLight);

    // Scroll Waypoints for Traversal Choreography across Sections
    // Coordinates correspond to camera field-of-view (camera at z=7.2)
    interface Waypoint {
      progress: number;
      x: number;
      y: number;
      z: number;
      scale: number;
      rotX: number;
      rotY: number;
    }

    // Traversal Waypoints calibrated to page section progression
    const getWaypoints = (isMobile: boolean): Waypoint[] => {
      if (isMobile) {
        return [
          { progress: 0.0, x: 0.0, y: -0.6, z: 0.0, scale: 0.75, rotX: 0.2, rotY: 0.0 },
          { progress: 0.18, x: 0.0, y: 0.2, z: -0.8, scale: 0.58, rotX: 0.4, rotY: 1.2 },
          { progress: 0.38, x: 0.0, y: -0.3, z: -0.4, scale: 0.65, rotX: -0.3, rotY: 2.4 },
          { progress: 0.58, x: 0.0, y: 0.1, z: -0.6, scale: 0.62, rotX: 0.5, rotY: 3.8 },
          { progress: 0.78, x: 0.0, y: -0.4, z: -0.5, scale: 0.60, rotX: -0.4, rotY: 5.2 },
          { progress: 1.0, x: 0.0, y: -0.5, z: 0.0, scale: 0.68, rotX: 0.1, rotY: 6.28 },
        ];
      }

      return [
        // 1. Hero Section (Right Column Hero Focus)
        { progress: 0.0, x: 2.25, y: 0.0, z: 0.0, scale: 1.05, rotX: 0.15, rotY: 0.0 },
        // 2. Terminal Section (Drifts to Left side, scanning down)
        { progress: 0.18, x: -2.3, y: -0.35, z: -0.6, scale: 0.85, rotX: 0.5, rotY: 1.5 },
        // 3. ProofStrip / Metrics (Drifts to Right side)
        { progress: 0.38, x: 2.4, y: 0.3, z: -0.3, scale: 0.9, rotX: -0.35, rotY: 3.0 },
        // 4. Engineering Mindset & Projects (Left background anchor)
        { progress: 0.58, x: -2.2, y: 0.0, z: -0.5, scale: 0.88, rotX: 0.4, rotY: 4.5 },
        // 5. AI Lab Terminal (Right side tech node)
        { progress: 0.78, x: 2.3, y: -0.45, z: -0.2, scale: 0.92, rotX: -0.2, rotY: 6.0 },
        // 6. Contact & Dossier (Centers into final anchor)
        { progress: 1.0, x: 0.0, y: -0.6, z: 0.3, scale: 0.82, rotX: 0.1, rotY: 7.5 },
      ];
    };

    let isMobile = window.innerWidth < 1024;
    let waypoints = getWaypoints(isMobile);

    // Interpolate waypoints based on current scroll progress
    const interpolateWaypoints = (p: number) => {
      const clampedP = Math.max(0, Math.min(1, p));
      
      // Find bounding waypoints
      let i = 0;
      while (i < waypoints.length - 1 && waypoints[i + 1].progress <= clampedP) {
        i++;
      }
      if (i >= waypoints.length - 1) return waypoints[waypoints.length - 1];

      const p0 = waypoints[i];
      const p1 = waypoints[i + 1];
      const localT = (clampedP - p0.progress) / (p1.progress - p0.progress);
      
      // Smooth Hermite smoothstep interpolation
      const smoothT = localT * localT * (3 - 2 * localT);

      return {
        x: p0.x + (p1.x - p0.x) * smoothT,
        y: p0.y + (p1.y - p0.y) * smoothT,
        z: p0.z + (p1.z - p0.z) * smoothT,
        scale: p0.scale + (p1.scale - p0.scale) * smoothT,
        rotX: p0.rotX + (p1.rotX - p0.rotX) * smoothT,
        rotY: p0.rotY + (p1.rotY - p0.rotY) * smoothT,
      };
    };

    // Smooth scroll tracking variables
    let targetScrollP = 0;
    let currentScrollP = 0;

    const handleScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      targetScrollP = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      isMobile = w < 1024;
      waypoints = getWaypoints(isMobile);
    };

    window.addEventListener('resize', handleResize);

    // Pointer Interaction (Parallax Tilt & Drag)
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const dragMomentum = { x: 0, y: 0, vx: 0, vy: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Custom Drag Event Listener (dispatched from Hero interactive frame)
    const handleCoreDrag = (e: Event) => {
      const customEvent = e as CustomEvent<CoreDragEventDetail>;
      if (customEvent.detail) {
        dragMomentum.vx += customEvent.detail.deltaX * 0.007;
        dragMomentum.vy += customEvent.detail.deltaY * 0.007;
      }
    };

    window.addEventListener('tech-core-drag', handleCoreDrag);

    // Animation & Render Loop
    let animationFrameId: number;

    const animate = (now: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth scroll lerp (buttery smooth 60fps tracking)
      currentScrollP += (targetScrollP - currentScrollP) * 0.07;
      const targetTransform = interpolateWaypoints(currentScrollP);

      // Smooth pointer lerp
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      // Drag inertia decay
      dragMomentum.x += dragMomentum.vx;
      dragMomentum.y += dragMomentum.vy;
      dragMomentum.vx *= 0.92;
      dragMomentum.vy *= 0.92;

      // Position update (interpolated scroll waypoint + subtle breathing float)
      const floatOffsetY = Math.sin(now * 0.0018) * 0.07;
      coreRoot.position.x = targetTransform.x + pointer.x * 0.15;
      coreRoot.position.y = targetTransform.y + floatOffsetY + pointer.y * 0.15;
      coreRoot.position.z = targetTransform.z;

      // Scale update
      coreRoot.scale.setScalar(targetTransform.scale);

      // Rotations
      // Gyro continuous self-spin
      const selfSpinY = now * 0.0007;
      const selfSpinX = Math.sin(now * 0.0005) * 0.2;

      // Compose: Waypoint rotation + Self spin + Interactive drag + Parallax tilt
      coreRoot.rotation.x =
        targetTransform.rotX + selfSpinX + dragMomentum.y + pointer.y * 0.2;
      coreRoot.rotation.y =
        targetTransform.rotY + selfSpinY + dragMomentum.x + pointer.x * 0.2;

      // Gyro Rings individual rotations for dynamic high-tech movement
      ring1Group.rotation.z = now * 0.0012;
      ring2Group.rotation.z = -now * 0.0015;

      // Inner nucleus counter-spin
      nucleusMesh.rotation.y = -now * 0.002;
      nucleusMesh.rotation.z = now * 0.0015;

      // Pulse nucleus scale
      const pulse = 1.0 + Math.sin(now * 0.003) * 0.08;
      nucleusMesh.scale.setScalar(pulse);

      // Orbiting Particle Points
      particlePoints.rotation.y = now * 0.0003;
      particlePoints.rotation.x = Math.sin(now * 0.0002) * 0.1;

      // Render
      renderer.render(scene, camera);
    };

    // Pause when tab is inactive to save battery & CPU/GPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('tech-core-drag', handleCoreDrag);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      // Dispose three.js resources
      nucleusGeom.dispose();
      nucleusMat.dispose();
      innerSphereGeom.dispose();
      innerSphereMat.dispose();
      crystalGeom.dispose();
      crystalMat.dispose();
      cageGeom.dispose();
      cageMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      satGeom.dispose();
      satMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};
