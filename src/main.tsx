import React from 'react'
import {hydrateRoot} from 'react-dom/client'
import Index from "./Index";


if (typeof document !== "undefined"){
  const ReactRoot = hydrateRoot(document.getElementById('root')!,<Index/>);
}