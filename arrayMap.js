function hasContiguousSubarrayWithSum(arr, target) {
    let left = 0; // Initialize the left pointer
    let currentSum = 0; // Initialize the current sum
    
    // Iterate through the array using the sliding window technique
    for (let right = 0; right < arr.length; right++) {
        // Add the current element to the current sum
        currentSum += arr[right];
        
        // Shrink the window from the left until the sum is less than or equal to the target
        while (currentSum > target && left <= right) {
            currentSum -= arr[left];
            left++;
        }
        
        // If the current sum equals the target, return true
        if (currentSum === target) {
            return true;
        }
    }
    
    // If no subarray with the target sum is found, return false
    return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarrayWithSum(arr, target)); // Output: true