const nums = [1, 2, 3, 4, 5, 6, 7, 8]
const nums1 = [2, 4, 6, 8, 10, 12, 14, 16]

const dobro = []

for(let i = 0; i < nums.length; i++){
    dobro.push(nums[i] * 2)
}

for(const num of nums1){
    dobro.push(num * 2)
}

console.log(dobro)