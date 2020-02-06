export interface Expense {
    id: string;
    name: string;
    dateOfExpense: string;
    description?: string;
    tripId: string;
    username: string;
}