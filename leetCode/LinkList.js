class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let c = new Node(3);
c.next = new Node(4);
c.next.next = new Node(5);
let listb = new Node(9);
listb.next = new Node(1);
listb.next.next = new Node(2);

list.next.next = c;

function middleNode(head) {
	let slow = head;
	let fast = head;
	while (fast != null && fast.next != null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

function getIntersectionNode(headA, headB) {
	while (headA != null && headB != null) {
		if (headA.next != null && headB.next != null) {
			if (headA.next.val === headB.next.val) {
				console.log(headB.next.val);
			}
		}
		headA = headA.next;
		headB = headB.next;
	}
}

console.log(getIntersectionNode(list, listb));


