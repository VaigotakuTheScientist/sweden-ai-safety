import type { GeoPoint } from '../types/content';

/**
 * A stylised silhouette of Sweden used as the network motif.
 *
 * The outline is a hand-simplified boundary (roughly 60 points) rather than a
 * survey-accurate shape — it reads as Sweden at a glance and stays small
 * enough to inline. Community nodes are projected with the same transform, so
 * adding a city to `src/data/communities.ts` places it on the map with no
 * changes here.
 */

/** Approximate boundary, [longitude, latitude], clockwise from the northern tip. */
const OUTLINE: readonly (readonly [number, number])[] = [
  [20.05, 69.06], [20.6, 68.9], [22.0, 68.4], [23.2, 68.05], [23.65, 67.95],
  [23.5, 67.45], [23.9, 66.9], [23.65, 66.4], [24.15, 65.83], [22.35, 65.85],
  [21.5, 65.3], [21.0, 64.75], [20.3, 63.85], [19.5, 63.55], [18.72, 63.29],
  [17.9, 62.9], [17.31, 62.39], [17.45, 61.9], [17.1, 61.5], [17.4, 60.9],
  [17.1, 60.6], [18.3, 60.55], [18.75, 60.2], [18.3, 59.6], [18.07, 59.33],
  [17.0, 58.75], [16.8, 58.3], [16.64, 57.76], [16.5, 57.2], [16.36, 56.66],
  [15.9, 56.3], [15.59, 56.16], [14.7, 56.05], [14.3, 55.55], [13.82, 55.35],
  [13.0, 55.42], [12.9, 55.8], [12.69, 56.05], [12.86, 56.67], [12.25, 57.11],
  [11.97, 57.71], [11.93, 58.35], [11.45, 58.7], [11.17, 58.94], [11.45, 59.0],
  [11.75, 59.35], [12.1, 59.8], [12.5, 60.55], [12.2, 61.05], [12.85, 61.6],
  [12.1, 62.1], [12.2, 63.0], [11.95, 63.3], [12.7, 64.0], [13.6, 64.05],
  [14.35, 64.5], [14.5, 65.0], [15.0, 66.0], [16.4, 67.0], [17.9, 67.9],
  [18.05, 68.5],
];

export const MAP_VIEWBOX = { width: 320, height: 700 } as const;

/** Longitude compression at Sweden's mid-latitude, so the shape is not stretched. */
const LON_SCALE = Math.cos((62.5 * Math.PI) / 180);
const PADDING = 14;

const xs = OUTLINE.map(([lon]) => lon * LON_SCALE);
const ys = OUTLINE.map(([, lat]) => lat);
const minX = Math.min(...xs);
const maxX = Math.max(...xs);
const minY = Math.min(...ys);
const maxY = Math.max(...ys);
const scale = Math.min(
  (MAP_VIEWBOX.width - 2 * PADDING) / (maxX - minX),
  (MAP_VIEWBOX.height - 2 * PADDING) / (maxY - minY),
);
const offsetX = (MAP_VIEWBOX.width - (maxX - minX) * scale) / 2;
const offsetY = (MAP_VIEWBOX.height - (maxY - minY) * scale) / 2;

export interface MapPoint {
  readonly x: number;
  readonly y: number;
}

/** Projects a geographic point into the map's SVG coordinate space. */
export function project({ lat, lon }: GeoPoint): MapPoint {
  return {
    x: Number(((lon * LON_SCALE - minX) * scale + offsetX).toFixed(1)),
    y: Number(((maxY - lat) * scale + offsetY).toFixed(1)),
  };
}

/** The silhouette as a closed SVG path. */
export const SWEDEN_PATH: string =
  OUTLINE.map((point, index) => {
    const { x, y } = project({ lon: point[0], lat: point[1] });
    return `${index === 0 ? 'M' : 'L'}${x} ${y}`;
  }).join(' ') + ' Z';
