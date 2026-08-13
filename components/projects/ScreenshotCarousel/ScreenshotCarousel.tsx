"use client";
import { useState } from "react";
import styles from "./ScreenshotCarousel.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import cslx from "clsx";

interface ScreenshotCarouselProps {
    screenshots: string[];
}

export default function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
    const [currentScreenshot, setCurrentScreenshot] = useState(0);

    return (
        <div className={styles.carousel}>
            <div className={styles.carouselInner}>
                <img src={screenshots[currentScreenshot]} />
                    {screenshots.length > 1 && (
                        <div className={styles.controls}>     
                            <button type="button"
                                onClick={() => 
                                setCurrentScreenshot(
                                    (
                                        currentScreenshot + screenshots.length - 1
                                    ) % screenshots.length)
                                }
                                >
                                <ArrowLeft size={30} className={styles.arrow}/>
                            </button>
                            <button type="button"
                                onClick={() => 
                                setCurrentScreenshot(
                                    (
                                        currentScreenshot + 1
                                        ) % screenshots.length)
                                    }
                                >
                                <ArrowRight size={30} className={styles.arrow}/>
                            </button>
                        </div>
                    )}
                </div>
                <div className={styles.dots}>
                    {screenshots.map((_, index) => (
                        <div
                            key={index}
                            className={cslx(
                                styles.dot,
                                currentScreenshot === index && styles.active
                            )}
                            onClick={() => setCurrentScreenshot(index)}
                        />
                    ))}
                </div>
        </div>
    )
}