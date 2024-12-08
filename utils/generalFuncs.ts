/**
 * Converts degrees to radians.
 * @param deg The angle in degrees.
 * @returns The angle in radians.
 */
const degToRad = (deg: number): number => (deg * Math.PI) / 180;

const radToDeg = (rad: number): number => rad * (180 / Math.PI);

export default { degToRad, radToDeg };
