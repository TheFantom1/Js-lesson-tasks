function cylinder(h, r) {
    let lateralSurfaceArea = 2 * Math.PI * r * h;
    let baseArea = Math.PI * r * r;
    let totalSurfaceArea = lateralSurfaceArea + 2 * baseArea;
    return totalSurfaceArea;
}

let r1 = cylinder(5, 10);
console.log("cylinder:", r1);
