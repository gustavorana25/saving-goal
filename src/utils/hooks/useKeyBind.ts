import { useEffect } from 'react';

const RIGHT_ARROW_KEY = 'ArrowRight';
const LEFT_ARROW_KEY = 'ArrowLeft';

interface Config {
  onKeyPress?: (keyPress: string) => void;
  onHorizontalArrowPress?: (direction: number) => void;
}

interface UseKeyBind {
  handleKeyBindActivation: (activate: boolean) => void;
}

function useKeyBind(config: Config): UseKeyBind {
  const { onKeyPress, onHorizontalArrowPress } = config;

  const listener = (event: KeyboardEvent) => {
    if (onKeyPress) {
      onKeyPress(event.key);
    }

    if (event.key === RIGHT_ARROW_KEY && onHorizontalArrowPress) {
      return onHorizontalArrowPress(1);
    }

    if (event.key === LEFT_ARROW_KEY && onHorizontalArrowPress) {
      return onHorizontalArrowPress(-1);
    }
  };

  const handleKeyBindActivation = (active: boolean) => {
    if (active) {
      return window.addEventListener('keydown', listener);
    }
    window.removeEventListener('keydown', listener);
  };

  useEffect(() => {
    return () => {
      handleKeyBindActivation(false);
    };
  }, []);

  return {
    handleKeyBindActivation,
  };
}

export default useKeyBind;
