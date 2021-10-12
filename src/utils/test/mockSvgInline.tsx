import React from 'react';

interface IMockSvgInlineProps {
  src: string;
}

function MockSvgInline({ src, ...rest }: IMockSvgInlineProps): JSX.Element {
  return <svg data-testid={src} {...rest} />;
}

export default MockSvgInline;
