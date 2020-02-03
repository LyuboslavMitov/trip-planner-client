export interface Expense {
    id: string;
    name: string;
    dateOfExpense: Date;
    description?: string;
    tripId: string;
    username: string;
}