"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import ZoomParallex from "./components/zoom-parallex/ZoomParallex";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className={styles.main}>
      <ZoomParallex />
    </main>
  );
}
