"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import styles from "./TitleText.module.css";

interface TitleTextProps {
  progress: MotionValue<number>;
}

const TitleText = ({ progress }: TitleTextProps) => {
  const pathLength = useTransform(progress, [0, 0.05, 0.85, 1], [0, 0, 0.1, 1]);
  const strokeWidth = useTransform(progress, [0, 0.75, 1], [2, 2, 0]);
  const pathFill = useTransform(progress, [0, 0.75, 1], [0, 0, 1]);
  return (
    <div className={styles.titleText}>
      <svg
        viewBox="0 0 500 70"
        width="500"
        height="70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          style={{ pathLength, strokeWidth, fillOpacity: pathFill }}
          d="M 44.882 30.821 L 30.287 30.821 L 32.725 21.045 Q 33.788 16.781 33.584 15.723 Q 33.379 14.666 31.784 14.666 Q 29.982 14.666 29.176 15.949 Q 28.371 17.231 27.308 21.495 L 20.808 47.566 Q 19.788 51.657 19.962 52.905 Q 20.136 54.153 21.835 54.153 Q 23.465 54.153 24.278 52.905 Q 25.092 51.657 26.242 47.046 L 27.997 40.008 L 42.592 40.008 L 42.047 42.192 Q 39.878 50.894 37.739 54.534 Q 35.601 58.174 30.706 60.913 Q 25.811 63.652 19.64 63.652 Q 13.227 63.652 9.646 61.329 Q 6.065 59.006 5.737 54.898 Q 5.409 50.79 7.466 42.539 L 11.555 26.141 Q 13.067 20.074 14.24 17.041 Q 15.412 14.007 18.175 11.199 Q 20.938 8.391 24.997 6.779 Q 29.057 5.167 33.806 5.167 Q 40.254 5.167 43.827 7.663 Q 47.399 10.159 47.787 13.886 Q 48.176 17.613 46.214 25.482 Z M 90.391 6.346 L 81.038 43.856 Q 79.448 50.235 78.388 52.818 Q 77.328 55.401 74.604 58.122 Q 71.88 60.844 68.184 62.248 Q 64.489 63.652 59.947 63.652 Q 54.921 63.652 51.487 61.988 Q 48.054 60.324 46.813 57.654 Q 45.572 54.985 45.964 52.021 Q 46.356 49.056 48.725 39.557 L 57.005 6.346 L 71.601 6.346 L 61.107 48.432 Q 60.191 52.107 60.335 53.13 Q 60.478 54.153 61.692 54.153 Q 63.079 54.153 63.758 53.026 Q 64.438 51.899 65.484 47.704 L 75.796 6.346 Z M 125.018 30.821 L 110.423 30.821 L 112.861 21.045 Q 113.924 16.781 113.719 15.723 Q 113.515 14.666 111.92 14.666 Q 110.118 14.666 109.312 15.949 Q 108.507 17.231 107.444 21.495 L 100.944 47.566 Q 99.924 51.657 100.098 52.905 Q 100.272 54.153 101.971 54.153 Q 103.601 54.153 104.414 52.905 Q 105.228 51.657 106.378 47.046 L 108.133 40.008 L 122.728 40.008 L 122.183 42.192 Q 120.014 50.894 117.875 54.534 Q 115.737 58.174 110.842 60.913 Q 105.947 63.652 99.776 63.652 Q 93.363 63.652 89.782 61.329 Q 86.201 59.006 85.873 54.898 Q 85.545 50.79 87.602 42.539 L 91.691 26.141 Q 93.203 20.074 94.376 17.041 Q 95.548 14.007 98.311 11.199 Q 101.074 8.391 105.133 6.779 Q 109.193 5.167 113.942 5.167 Q 120.39 5.167 123.963 7.663 Q 127.535 10.159 127.923 13.886 Q 128.312 17.613 126.35 25.482 Z M 170.527 6.346 L 161.174 43.856 Q 159.584 50.235 158.524 52.818 Q 157.464 55.401 154.74 58.122 Q 152.016 60.844 148.32 62.248 Q 144.625 63.652 140.083 63.652 Q 135.057 63.652 131.623 61.988 Q 128.19 60.324 126.949 57.654 Q 125.708 54.985 126.1 52.021 Q 126.492 49.056 128.861 39.557 L 137.141 6.346 L 151.737 6.346 L 141.243 48.432 Q 140.327 52.107 140.471 53.13 Q 140.614 54.153 141.828 54.153 Q 143.214 54.153 143.894 53.026 Q 144.574 51.899 145.62 47.704 L 155.932 6.346 Z M 190.699 6.346 L 201.03 6.346 Q 211.361 6.346 214.82 7.143 Q 218.278 7.94 219.767 11.216 Q 221.255 14.493 219.466 21.669 Q 217.833 28.221 215.641 30.474 Q 213.45 32.728 208.553 33.179 Q 212.619 34.253 213.66 36.056 Q 214.702 37.859 214.69 39.367 Q 214.678 40.875 212.983 47.67 L 209.293 62.473 L 195.737 62.473 L 200.388 43.822 Q 201.511 39.315 201.069 38.24 Q 200.626 37.165 197.61 37.165 L 191.3 62.473 L 176.705 62.473 Z M 202.9 15.949 L 199.788 28.429 Q 202.249 28.429 203.406 27.753 Q 204.563 27.077 205.487 23.368 L 206.257 20.282 Q 206.922 17.613 206.176 16.781 Q 205.43 15.949 202.9 15.949 Z M 263.104 6.346 L 253.752 43.856 Q 252.161 50.235 251.101 52.818 Q 250.041 55.401 247.317 58.122 Q 244.593 60.844 240.898 62.248 Q 237.202 63.652 232.661 63.652 Q 227.634 63.652 224.201 61.988 Q 220.767 60.324 219.526 57.654 Q 218.285 54.985 218.677 52.021 Q 219.07 49.056 221.438 39.557 L 229.719 6.346 L 244.314 6.346 L 233.821 48.432 Q 232.904 52.107 233.048 53.13 Q 233.192 54.153 234.405 54.153 Q 235.792 54.153 236.471 53.026 Q 237.151 51.899 238.197 47.704 L 248.509 6.346 Z M 303.314 6.346 L 289.32 62.473 L 274.725 62.473 L 280.603 38.899 L 276.234 38.899 L 270.357 62.473 L 255.761 62.473 L 269.756 6.346 L 284.351 6.346 L 279.346 26.418 L 283.714 26.418 L 288.719 6.346 Z M 324.77 6.346 L 310.776 62.473 L 296.181 62.473 L 310.175 6.346 Z M 362.724 6.346 L 343.152 42.158 L 338.086 62.473 L 324.566 62.473 L 329.631 42.158 L 328.298 6.346 L 341.715 6.346 Q 340.781 22.744 339.745 28.429 Q 343.197 19.45 349.307 6.346 Z M 387.893 6.346 L 382.254 62.473 L 367.312 62.473 L 369.099 52.385 L 363.864 52.385 L 360.482 62.473 L 345.367 62.473 L 366.78 6.346 Z M 371.164 42.435 Q 372.431 32.901 374.814 18.895 Q 368.585 34.981 366.172 42.435 Z M 425.217 6.346 L 422.417 17.578 L 413.75 17.578 L 402.556 62.473 L 387.961 62.473 L 399.154 17.578 L 390.522 17.578 L 393.323 6.346 Z M 462.137 6.346 L 448.143 62.473 L 435.35 62.473 L 434.12 36.957 L 427.758 62.473 L 415.555 62.473 L 429.549 6.346 L 441.752 6.346 L 443.632 31.619 L 449.934 6.346 Z M 494.194 6.346 L 488.555 62.473 L 473.613 62.473 L 475.401 52.385 L 470.166 52.385 L 466.784 62.473 L 451.669 62.473 L 473.082 6.346 Z M 477.465 42.435 Q 478.733 32.901 481.116 18.895 Q 474.886 34.981 472.473 42.435 Z"
        />
      </svg>
    </div>
  );
};

export default TitleText;
