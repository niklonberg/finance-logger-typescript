import HasFormatter from "../interfaces/HasFormatter.js";

class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

export default Invoice;
