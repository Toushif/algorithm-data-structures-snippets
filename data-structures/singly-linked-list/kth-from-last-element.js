// https://medium.com/@alexpattison/cracking-the-frontend-coding-interview-ec7d5b1e6755
// Question: Return the kth to last element of a singly linked list.
// Same question in frontend format -
// Frontend Question: Change the background color of the kth to last sibling element.
// Because we are trying to emulate a linked list, we will impose the constraint that we only have access to
// the nextElementSibling method of each node (along with inline styling).

// Let’s take them one by one:
// This is a very intuitive approach, but it’s generally a good idea to avoid mutating whatever input is passed to us.
// Someone could object that, because each node already has a previousElementSibling method, we wouldn’t need to mutate
// our input at all. While this is true, it runs counter to the problem as initially stated.
// Let’s try to maintain the constraints of the original problem, while adding in some new things to think about in the DOM.
// This seems like a reasonable approach, but there’s a way to do it without looping through twice.
// I’ll leave this one as a challenge. How can we keep track of how many links we are from the end as we bubble back
// up the call stack? You can find the answer at the end of the post.
// It turns out there is a clever way to get the benefits of our second approach without the drawbacks of
// iterating through our linked list twice. We just need to traverse our linked list with two pointers simultaneously.
// As long as the difference between them is (k — 1), when our lead pointer makes it to the end, the following
// pointer will be on the node we want to highlight.

// Let’s imagine we are given some html which looks like this:
// <div class='wrapper'>
//   <div class='link'>0</div>⟹
//   <div class='link'>1</div>⟹
//   <div class='link'>2</div>⟹
//   <div class='link'>3</div>⟹
//   <div class='link'>4</div>⟹
//   <div class='link'>5</div>⟹
//   <div class='link'>6</div>⟹
//   <div class='link'>7</div>⟹
//   <div class='link'>8</div>⟹
//   <div class='link'>9</div>
// </div>

// This code runs with O(n) time complexity O(1) space complexity.
// Given that we need to iterate through the whole list to determine our length, this is the best we can hope for.

const turnKthFromLastRed = (head, k) => {
    let leader = head;
    let follower = head;

    while (leader.nextElementSibling) {
        if (k > 1) {
            k--;
        } else {
            follower = follower.nextElementSibling;
        }

        leader = leader.nextElementSibling;
    }

    if (k === 1) {
        follower.style.background = "red";
    }
};

const head = document.querySelector(".link");
turnKthFromLastRed(head, 2);

// Another solution -
const recTurnKthToLastRed = (head, k) => {
    if (!head.nextElementSibling) return 1;
    const countAhead = recTurnKthToLastRed(head.nextElementSibling, k) + 1;

    if (k === countAhead) {
        head.style.background = "red";
    }

    return countAhead;
};

// Because we’re just trying to change the color of our node, we don’t care about the return value of our function. 
// countAhead represents the number of nodes ahead of the current node (inclusive). 
// This means that our top level call to recTurnKthToLastRed will return the length of our list.