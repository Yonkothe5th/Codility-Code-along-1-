function solution(A, K) {
    const N = A.length;
    
    // If the array is empty or K is zero, return the original array
    if (N === 0 || K === 0) {
        return A;
    }
    
    // Calculate the effective number of rotations (reduce K to avoid unnecessary rotations)
    const effectiveRotations = K % N;
    
    // If effective rotations is zero, return the original array
    if (effectiveRotations === 0) {
        return A;
    }
    
    // Split the array into two parts based on the effective rotations
    const splitIndex = N - effectiveRotations;
    const rotatedArray = A.slice(splitIndex).concat(A.slice(0, splitIndex));
    
    return rotatedArray;
    }
    
    // Test case
    function test() {
    // Testing By Passing An array 
        const testArray1 = [3, 8, 9, 7, 6];
        const rotations1 = 5;
        const result1 = solution(testArray1, rotations1);
    
        const expected1 = [9, 7, 6, 3, 8];
        console.log(result1, "=== ", expected1); 
    }
    test();