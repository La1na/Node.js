export namespace Finance {
  export class LoanCalculator {
    constructor(
      public principal: number,
      public annualRate: number,
      public months: number
    ) {}

    calculateMonthlyPayment(): number {
      const monthlyRate = this.annualRate / 12 / 100;
      return (
        (this.principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -this.months))
      );
    }
  }

  export class TaxCalculator {
    constructor(public income: number, public taxRate: number) {}

    calculateTax(): number {
      return this.income * (this.taxRate / 100);
    }
  }
}
