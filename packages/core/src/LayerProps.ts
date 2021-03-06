// This is for deck.gl Layer
export interface LayerProps {
  id?: string;
  data?: any;
  autoHighlight?: boolean;
  opacity?: number;
  pickable?: boolean;
  visible?: boolean;
  coordinateOrigin?: any;
  coordinateSystem?: any;
  extensions?: any;
  getPolygonOffset?: any;
  highlightColor?: any;
  highlightedObjectIndex?: any;
  lightSettings?: any;
  modelMatrix?: any;
  parameters?: any;
  positionFormat?: any;
  colorFormat?: any;
  transitions?: any;
  wrapLongitude?: any;
  dataComparator?: any;
  dataTransform?: any;
  numInstances?: any;
  updateTriggers?: any;
  _dataDiff?: any;
  onDragStart?: any;
  onDrag?: any;
  onDragEnd?: any;
  onClick?: any;
  onHover?: any;
  onDataLoad?: any;
}
