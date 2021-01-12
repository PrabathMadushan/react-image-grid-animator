import React from "react";

export interface ImageGridProps {
  images: string[];
  visibleCount: number;
  interval: number;
  animationItemcount?: number;
  randomized?: boolean;
  isActive?: boolean;
  transitionDuration: number;
}

declare const ImageGrid: React.FC<ImageGridProps>;

export default ImageGrid;
