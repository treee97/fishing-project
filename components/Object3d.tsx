"use client";

import { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const Object3d = () => {
  let initialZoom: any;
  const cube = useRef<any>();

  function getScaleValue() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      return 1.2;
    } else if (screenWidth > 700) {
      return 1;
      // 38 base
    } else if (screenWidth > 500) {
      return 0.5;
      // 32
    }
    return 0.2;
  }

  function onLoad(spline: any) {
    const scaleValue = getScaleValue();
    initialZoom = scaleValue;
    spline.setZoom(scaleValue);
    const obj = spline.findObjectByName("Cube");
    cube.current = obj;
  }

  function setSplineScale(scale: any) {
    if (cube.current?.scale) {
      const newScale = cube.current.scale;
      newScale.x = scale;
      newScale.y = scale;
      newScale.z = scale;
      cube.current.scale = newScale;
    }
  }

  useEffect(() => {
    function scaleSpline() {
      if (cube.current?.scale) {
        const scaleValue = getScaleValue();
        setSplineScale(scaleValue / initialZoom);
      }
    }
    window.addEventListener("resize", scaleSpline);
    return () => window.removeEventListener("resize", scaleSpline);
  }, [initialZoom]);

  return (
    <>
      <Spline
        loading-anim
        onLoad={onLoad}
        scene="https://prod.spline.design/tTQU826ZhNDyx4Sf/scene.splinecode"
      />
    </>
  );
};

export default Object3d;
