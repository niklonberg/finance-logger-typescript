/* // classes with public properties, which can be bad
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice("Betina", "Haircut", 20);
const invoiceTwo = new Invoice("Luigi", "Plumbing", 40);

//create array that can only contain Invoices:
let invoices: Invoice[] = [];
//invoices.push('hello') wont be allowed
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);

invoiceOne.client = "yoshi"; //properties are public

console.log(invoiceOne, invoiceTwo);
console.log(invoices); */

/* class Invoice {
  readonly client: string; //readonly means property can be accessed and read, but not changed
  private details: string; //denote details as private property, can still be accessed by the class methods
  public amount: number; //public here is on by default, but we can explicitly state it

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    //this.client = 'ostrich' not possible
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invoiceOne = new Invoice("Betina", "Haircut", 20);
const invoiceTwo = new Invoice("Luigi", "Plumbing", 40);
let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

//with details being private, we can no longer access it below
invoices.forEach((inv) => {
  console.log(inv.client, *inv.details*, inv.amount, inv.format());
});
invoices.forEach((inv) => {
  //inv.client = 'bert' not possible
  console.log(inv.client, inv.amount, inv.format());
});

//Our class setup can be shortened:
class InvoiceVerTwo {
  //readonly client: string;
  //private details: string;
  //public amount: number;
  //the below is only possible when you preface the parameter with readonly, private or public
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
}
 */
