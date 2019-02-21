// Constructors (Node and SinglyList)
    function Node(data) {
        this.data = data;
        this.next = null;
    }

    function SinglyList() {
        this._length = 0;
        this.head = null;
    }

//Add Method

    SinglyList.prototype.add = function(value) {
        var node = new Node(value),
            currentNode = this.head;

        if(!currentNode) {
            this.head = node;
            this._length++;

            // return the new Node object. (why can't we just use return; here?)
            return node;
        }

        //USE CASE 2: NON-EMPTY LIST
        while (currentNode.next) {
            currentNode = currentNode.next; 
        }
        currentNode.next = node;

        this._length++;

        // return statement doesn't seem to do anything here.
        return node;
    };
