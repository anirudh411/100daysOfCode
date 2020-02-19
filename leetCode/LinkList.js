class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

let c = new Node(9);
c.next = new Node(10);
let listb = new Node(7);
listb.next = new Node(8);

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

function mergeTwoLists(l1, l2) {
	if (l1 == null) return l2;
	if (l2 == null) return l1;
	if (l1.val <= l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	}
	else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
}



