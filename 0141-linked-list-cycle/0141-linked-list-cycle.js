/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var i = 0;

    function traveler(node) {
        if (!node) return false;
        if (node.see) return true;

        node.see = true
        node.index = i
        i = i + 1;
        return traveler(node.next);
    }

    return traveler(head);
};