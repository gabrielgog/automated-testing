 // Reverses all strings
String.prototype.reverse = function reverse(string){
    return Array.from(this).reverse().join("")
}




// Phrase content.

function Phrase(content) {
    this.content = content;

    // Returns content processed for palindrome testing

    this.processedContent = function processedContent(){

    return  this.content.toLowerCase();

    }

    // Returns true for a palindrome, false otherwise.

    this.palindrome = function palindrome(){
        return this.processedContent() === this.processedContent().reverse();
    }


}

