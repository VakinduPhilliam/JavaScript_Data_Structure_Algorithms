function removeNode(list, value) {
    var node = list,
        last;

    if (node && node.value === value) {
        return node.next;
    }

    while (node && node.value !== value) {
        last = node,
        node = node.next;
    }
    if (last && node.value === value) {
        last.next = node.next;
    }
    return list;
}

var list = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: { value: 5, next: { value: 6, next: { value: 7, next: null } } } } } } };

list = removeNode(list, 5);
console.log(list)

list = removeNode(list, 1);
console.log(list)

list = removeNode(list, 7);
console.log(list)
