var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // Calculate area between left and right lines
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        const area = width * h;

        // Update maximum water if this area is bigger
        maxWater = Math.max(maxWater, area);

        // Move the pointer which has the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};
