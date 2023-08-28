/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(list1, list2) {
    let list = new ListNode(0);
    let current_node = list;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current_node.next = list1
            list1 = list1.next
        } else {
            current_node.next = list2
            list2 = list2.next
        }

        current_node = current_node.next
    }

    current_node.next = list1 || list2

    return list.next
};