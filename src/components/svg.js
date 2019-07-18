// @flow
// @jsx glam
import React from 'react';
import glam from 'glam';

type Props = { size: number };

const Svg = ({ size, ...props }: Props) => (
  <svg
    role="presentation"
    viewBox="0 0 24 24"
    css={{
      display: 'inline-block',
      fill: 'currentColor',
      height: size,
      stroke: 'currentColor',
      strokeWidth: 0,
      width: size,
    }}
    {...props}
  />
);

export const ChevronLeft = ({ size = 32, ...props }: Props) => (
  <Svg size={size} {...props}>
    <path d="M15.422 16.078l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z" />
  </Svg>
);
export const ChevronRight = ({ size = 32, ...props }: Props) => (
  <Svg size={size} {...props}>
    <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
  </Svg>
);
export const Close = ({ size = 32, ...props }: Props) => (
  <Svg size={size} {...props}>
    <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" />
  </Svg>
);
export const FullscreenEnter = ({ size = 32, ...props }: Props) => (
  <Svg size={size} {...props}>
    <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z" />
  </Svg>
);
export const FullscreenExit = ({ size = 32, ...props }: Props) => (
  <Svg size={size} {...props}>
    <path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z" />
  </Svg>
);
export const Download = ({ size = 32, ...props }: Props) => (
  <Svg size={size} {...props}>
    <path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z" />
  </Svg>
);

