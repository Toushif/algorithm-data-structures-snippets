// Given number of pages in n different books and m students. The books are arranged in ascending order of number of pages. 
// Every student is assigned to read some consecutive books. The task is to assign books in such a way that the 
// maximum number of pages assigned to a student is minimum. 
// Example : 
// Input : pages[] = {12, 34, 67, 90}
// m = 2
// Output : 113
// Explanation:
// There are 2 number of students. Books can be distributed 
// in following fashion : 
//   1) [12] and [34, 67, 90]
//       Max number of pages is allocated to student 
//       2 with 34 + 67 + 90 = 191 pages
//   2) [12, 34] and [67, 90]
//       Max number of pages is allocated to student
//       2 with 67 + 90 = 157 pages 
//   3) [12, 34, 67] and [90]
//       Max number of pages is allocated to student 
//       1 with 12 + 34 + 67 = 113 pages

// Of the 3 cases, Option 3 has the minimum pages = 113. 

// The idea is to use Binary Search. We fix a value for the number of pages as mid of current minimum and maximum. 
// We initialize minimum and maximum as 0 and sum-of-all-pages respectively. If a current mid can be a solution, then 
// we search on the lower half, else we search in higher half.
// Now the question arises, how to check if a mid value is feasible or not? Basically, we need to check if we can assign 
// pages to all students in a way that the maximum number doesn’t exceed current value. To do this, we sequentially 
// assign pages to every student while the current number of assigned pages doesn’t exceed the value. In this process, 
// if the number of students becomes more than m, then the solution is not feasible. Else feasible.

// method to find minimum pages
function findPages(arr, m) {
    let sum = 0;
    const n = arr.length;

    // return -1 if no. of books is less than
    // no. of students
    if (n < m) return -1;

    // Count total number of pages
    for (let i = 0; i < n; i++) sum += arr[i];

    // initialize start as 0 pages and end as
    // total pages
    let start = 0,
        end = sum;
    let result = Number.MAX_VALUE;

    // traverse until start <= end
    while (start <= end) {
        // check if it is possible to distribute
        // books by using mid as current minimum
        let mid = Math.floor((start + end) / 2);
        if (isPossible(arr, n, m, mid)) {
            // if yes then find the minimum distribution
            result = Math.min(result, mid);

            // as we are finding minimum and books
            // are sorted so reduce end = mid -1
            // that means
            end = mid - 1;
        }
        // if not possible means pages should be
        // increased so update start = mid + 1
        else start = mid + 1;
    }

    // at-last return minimum no. of  pages
    return result;
}

// Utility method to check if current minimum value
// is feasible or not.
function isPossible(arr, n, m, curr_min) {
    let studentsRequired = 1;
    let curr_sum = 0;

    // iterate over all books
    for (let i = 0; i < n; i++) {
        // check if current number of pages are greater
        // than curr_min that means we will get the result
        // after mid no. of pages
        if (arr[i] > curr_min) return false;

        // count how many students are required
        // to distribute curr_min pages
        if (curr_sum + arr[i] > curr_min) {
            // increment student count
            studentsRequired++;

            // update curr_sum
            curr_sum = arr[i];

            // if students required becomes greater
            // than given no. of students,return false
            if (studentsRequired > m) return false;
        }

        // else update curr_sum
        else curr_sum += arr[i];
    }
    return true;
}

// Driver Method
let arr = [12, 34, 67, 90];
let m = 2; //No. of students

console.log(findPages(arr, m));