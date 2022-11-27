import React from 'react';

// --------------------------------------------------------------------------------------
interface Props {
  init: boolean;
}

export default function useScaffold({init}: Props) {
  const [final] = React.useState(false);
  return {init, final};
}
