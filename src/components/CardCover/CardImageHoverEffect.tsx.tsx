import React, { ReactNode } from 'react';

interface CardImageHoverEffectProps {
  children: ReactNode;
  targetClassName: string;
  imageUrl: string;
}

const CardImageHoverEffect: React.FC<CardImageHoverEffectProps> = ({
  children,
  targetClassName,
  imageUrl,
}) => {
  // Using data attribute instead of class to avoid style conflicts
  const uniqueId = `hover-${Math.random().toString(36).substr(2, 9)}`;
  const targetId = `target-${uniqueId}`;

  return (
    <div 
      data-hover-id={uniqueId}
      style={{ display: 'contents' }}
    >
      <style>
        {`
          /* Only apply styles to elements with our specific data attribute */
          [data-hover-id="${uniqueId}"]:hover ~ [data-target-id="${targetId}"]::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${imageUrl});
            background-size: cover;
            background-position: center;
            opacity: 1;
            pointer-events: none;
            z-index: 1;
          }

          /* Only set position relative during hover */
          [data-hover-id="${uniqueId}"]:hover ~ [data-target-id="${targetId}"] {
            position: relative;
          }
        `}
      </style>
      {children}
    </div>
  );
};

export default CardImageHoverEffect;