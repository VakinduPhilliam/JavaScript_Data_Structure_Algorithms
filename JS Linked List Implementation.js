var linkedList = function(){
  this.head=null;
  this.tail=null;
  this.size=0;
}
linkedList.prototype.add=function(obj){
 if(!this.head){
   this.head=obj;
   this.tail=obj;
   this.size++;
   return
 }
 this.tail.next = obj;
 this.tail=obj;
 this.size++;
}
