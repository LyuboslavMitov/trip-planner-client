export interface Expense {
    id: string;
    name: string;
    amount: number;
    dateOfExpense: string;
    description?: string;
    tripId: string;
    username: string;
}

export interface UserToExpenses {
    username:string;
    expenses:Expense[];
}