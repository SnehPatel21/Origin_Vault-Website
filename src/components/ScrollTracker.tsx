import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useCallback } from 'react';

interface ScrollTrackerProps {
  onScroll: (offset: number) => void;
}

export const ScrollTracker: React.FC<ScrollTrackerProps> = ({ onScroll }) => {
  const scrollData = useScroll();

  const handleScroll = useCallback(() => {
    if (scrollData && typeof scrollData.offset === 'number') {
      onScroll(scrollData.offset);
    }
  }, [scrollData, onScroll]);

  useFrame(() => {
    handleScroll();
  });

  return null;
};