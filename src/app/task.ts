export interface Task {
    taskId: number,
    description: string | null,
    details: string | null,
    due_Date: string | null,
    frequency_Type: string | null,
    frequency_Number: number | null,
    sensative: boolean | null,
    last_Completed: string | null
}
