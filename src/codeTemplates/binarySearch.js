module.exports = () => ({
  title: "二分法",
  logo: require("../imgs/half.svg"),
  list: [
    {
      text: "查找一个数",
      problems: [
        {
          id: "single-element-in-a-sorted-array",
          title: "540. 有序数组中的单一元素",
        },
      ],
      codes: [
        {
          language: "java",
          text: `
        public int binarySearch(int[] nums, int target) {
            // 左右都闭合的区间 [l, r]
            int left = 0;
            int right = nums.length - 1;
        
            while(left <= right) {
                int mid = left + (right - left) / 2;
                if(nums[mid] == target)
                    return mid;
                if (nums[mid] < target)
                        // 搜索区间变为 [mid+1, right]
                    left = mid + 1;
                if (nums[mid] > target)
                    // 搜索区间变为 [left, mid - 1]
                    right = mid - 1;
            }
            return -1;
        }`,
        },
        {
          language: "py",
          text: `
            def binarySearch(nums, target):
                # 左右都闭合的区间 [l, r]
                l, r = 0, len(nums) - 1
                while l <= r:
                    mid = (left + right) >> 1
                    if nums[mid] == target: return mid
                    # 搜索区间变为 [mid+1, right]
                    if nums[mid] < target: l = mid + 1
                    # 搜索区间变为 [left, mid - 1]
                    if nums[mid] > target: r = mid - 1
                return -1`,
        },
        {
          language: "js",
          text: `
            function binarySearch(nums, target) {
                let left = 0;
                let right = nums.length - 1;
                while (left <= right) {
                const mid = Math.floor(left + (right - left) / 2);
                if (nums[mid] == target) return mid;
                if (nums[mid] < target)
                    // 搜索区间变为 [mid+1, right]
                    left = mid + 1;
                if (nums[mid] > target)
                    // 搜索区间变为 [left, mid - 1]
                    right = mid - 1;
                }
                return -1;
            }`,
        },
        {
          language: "cpp",
          text: `
          int binarySearch(vector<int>& nums, int target){
            if(nums.size() == 0)
              return -1;
          
            int left = 0, right = nums.size() - 1;
            while(left <= right){
              int mid = left + ((right - left) >> 1);
              if(nums[mid] == target){ return mid; }
              // 搜索区间变为 [mid+1, right]
              else if(nums[mid] < target)
            left = mid + 1;
              // 搜索区间变为 [left, mid - 1]
              else
            right = mid - 1;
            }
            return -1;
          }
          `,
        },
      ],
    },
    {
      text: "寻找最左边的满足条件的值",
      problems: [
        {
          id: "find-first-and-last-position-of-element-in-sorted-array",
          title: "34. 在排序数组中查找元素的第一个和最后一个位置",
        },
        {
          id: "first-bad-version",
          title: "278. 第一个错误的版本",
        },
      ],
      codes: [
        {
          language: "java",
          text: `
          public int binarySearchLeft(int[] nums, int target) {
            // 搜索区间为 [left, right]
            int left = 0;
            int right = nums.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (nums[mid] < target) {
                    // 搜索区间变为 [mid+1, right]
                    left = mid + 1;
                }
                if (nums[mid] >= target) {
                    // 搜索区间变为 [left, mid-1]
                    right = mid - 1;
                }
            }
            // 检查是否越界
            if (left >= nums.length || nums[left] != target)
                return -1;
            return left;
        }`,
        },
        {
          language: "py",
          text: `
          def binarySearchLeft(nums, target):
            # 左右都闭合的区间 [l, r]
            l, r = 0, len(nums) - 1
            while l <= r:
                mid = (l + r) >> 1
                # 搜索区间变为 [mid+1, right]
                if nums[mid] < target: l = mid + 1
                # 搜索区间变为 [left, mid - 1]
                if nums[mid] >= target: r = mid - 1
            if l >= len(nums) or nums[l] != target: return -1
            return l`,
        },
        {
          language: "js",
          text: `
          function binarySearchLeft(nums, target) {
            let left = 0;
            let right = nums.length - 1;
            while (left <= right) {
              const mid = Math.floor(left + (right - left) / 2);
              if (nums[mid] < target)
                // 搜索区间变为 [mid+1, right]
                left = mid + 1;
              if (nums[mid] >= target)
                // 搜索区间变为 [left, mid - 1]
                right = mid - 1;
            }
            // 检查是否越界
            if (left >= nums.length || nums[left] != target) return -1;
            return left;
          }`,
        },
        {
          language: "cpp",
          text: `
          int binarySearchLeft(vector<int>& nums, int target) {
            // 搜索区间为 [left, right]
              int left = 0, right = nums.size() - 1;
              while (left <= right) {
                  int mid = left + ((right - left) >> 1);
                  if (nums[mid] == target) {
                      // 收缩右边界
                      right = mid - 1;
                  }
                  if (nums[mid] < target) {
                      // 搜索区间变为 [mid+1, right]
                      left = mid + 1;
                  }
                  if (nums[mid] > target) {
                      // 搜索区间变为 [left, mid-1]
                      right = mid - 1;
                  }
              }
              // 检查是否越界
              if (left >= nums.size() || nums[left] != target)
                  return -1;
              return left;
          }
          `,
        },
      ],
    },
    {
      text: "寻找最右边的满足条件的值",
      problems: [
        {
          id: "find-first-and-last-position-of-element-in-sorted-array",
          title: "34. 在排序数组中查找元素的第一个和最后一个位置",
        },
        {
          id: "sqrtx",
          title: "69. x 的平方根",
        },
      ],
      codes: [
        {
          language: "java",
          text: `
            public int binarySearchRight(int[] nums, int target) {
                // 搜索区间为 [left, right]
                int left = 0
                int right = nums.length - 1;
                while (left <= right) {
                    int mid = left + (right - left) / 2;
                    if (nums[mid] <= target) {
                        // 搜索区间变为 [mid+1, right]
                        left = mid + 1;
                    }
                    if (nums[mid] > target) {
                        // 搜索区间变为 [left, mid-1]
                        right = mid - 1;
                    }
                }
                // 检查是否越界
                if (right < 0 || nums[right] != target)
                    return -1;
                return right;
            }`,
        },
        {
          language: "py",
          text: `
            def binarySearchRight(nums, target):
                # 左右都闭合的区间 [l, r]
                l, r = 0, len(nums) - 1
                while l <= r:
                    mid = (l + r) >> 1
                    # 搜索区间变为 [mid+1, right]
                    if nums[mid] <= target: l = mid + 1
                    # 搜索区间变为 [left, mid - 1]
                    if nums[mid] > target: r = mid - 1
                if r < 0 or nums[r] != target: return -1
                return r`,
        },
        {
          language: "js",
          text: `
          function binarySearchRight(nums, target) {
            let left = 0;
            let right = nums.length - 1;
            while (left <= right) {
              const mid = Math.floor(left + (right - left) / 2);
              if (nums[mid] <= target)
                // 搜索区间变为 [mid+1, right]
                left = mid + 1;
              if (nums[mid] > target)
                // 搜索区间变为 [left, mid - 1]
                right = mid - 1;
            }
            // 检查是否越界
            if (right < 0 || nums[right] != target) return -1;
            return right;
          }`,
        },
        {
          language: "cpp",
          text: `
          int binarySearchRight(vector<int>& nums, int target) {
            // 搜索区间为 [left, right]
              int left = 0, right = nums.size() - 1;
              while (left <= right) {
                  int mid = left + ((right - left) >> 1);
                   if (nums[mid] == target) {
                      // 收缩左边界
                      left = mid + 1;
                  }
                  if (nums[mid] < target) {
                // 搜索区间变为 [mid+1, right]
                      left = mid + 1;
                  }
                  if (nums[mid] > target) {
                // 搜索区间变为 [left, mid-1]
                      right = mid - 1;
                  }
              }
              // 检查是否越界
              if (right < 0 || nums[right] != target)
                  return -1;
              return right;
          }
          
          `,
        },
      ],
    },
    {
      text: "寻找最左插入位置",
      codes: [
        {
          language: "py",
          text: `
        def bisect_left(nums, x):
          # 内置 api
          bisect.bisect_left(nums, x)
          # 手写
          l, r = 0, len(A) - 1
          while l <= r:
              mid = (l + r) // 2
              if A[mid] >= x: r = mid - 1
              else: l = mid + 1
          return l
        `,
        },
        {
          language: "JS",
          text: `
/**
 * @author suukii
 * @description 寻找最左插入位置
 * @param {number[]} nums 
 * @param {number} x 
 * @returns {number}
 */
function searchInsertLeft(nums, x) {
  // 题意转换一下，其实就是寻找第一个“大于等于” x 的数字，返回它的下标
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] >= x) right = mid - 1;
    if (nums[mid] < x) left = mid + 1;
  }

  return left;
}
          `,
        },
      ],
      problems: [
        {
          id: "random-pick-with-weight",
          title: "528. 按权重随机选择",
        },
      ],
    },
    {
      text: "寻找最右插入位置",
      codes: [
        {
          language: "py",
          text: `
        def bisect_right(nums, x):
          # 内置 api
          bisect.bisect_right(nums, x)
          # 手写
          l, r = 0, len(A) - 1
          while l <= r:
              mid = (l + r) // 2
              if A[mid] <= x: l = mid + 1
              else: r = mid - 1
          return l
        `,
        },
        {
          language: "JS",
          text: `
/**@author suukii
 * @description 寻找最右插入位置
 * @param {number[]} nums 
 * @param {number} x 
 * @returns {number}
 */
function searchInsertRight(nums, x) {
  // 题意转换一下，其实就是寻找第一个“大于” x 的数字，返回它的下标
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > x) right = mid - 1;
    if (nums[mid] <= x) left = mid + 1;
  }

  return left;
}
          `,
        },
      ],
      problems: [
        {
          id: "find-first-and-last-position-of-element-in-sorted-array",
          title: "34. 在排序数组中查找元素的第一个和最后一个位置",
        },
      ],
    },
  ],
  link: "https://github.com/azl397985856/leetcode/blob/master/91/binary-search.md",
});
