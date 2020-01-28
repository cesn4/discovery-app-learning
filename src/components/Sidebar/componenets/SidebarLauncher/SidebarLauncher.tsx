import { useState } from 'react';

export const [sidebarState, setSidebarState] = useState(false);

export const sidebarHandler: VoidFunction = () => {
    setSidebarState(!sidebarState);
};

